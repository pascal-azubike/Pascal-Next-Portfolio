import Product from "../../models/Product";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../config/MongoDbConfig";
import Article from "../../models/Article";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import axios from "axios";
import { uptimizeCloudinaryImage } from "@/hooks/imageCloudinaryOptimizer";
import { embedding } from "@/utils/getEmbeddins";
import { pdfTemplate } from "../create-article/pdfTemplate";

// Define the POST handler
export const POST = async (request: NextRequest) => {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("productId")?.trim();

    if (!id) {
      return NextResponse.json(
        { message: "Product ID is required" },
        { status: 400 }
      );
    }

    const article = await Article.findById(id);

    if (!article) {
      return NextResponse.json(
        { message: "Article not found" },
        { status: 404 }
      );
    }

    // Parse the request body
    const reqBody = await request.json();
    const { title, description, image, blurImage, shortSummary } = reqBody;

    // Optimize images
    const optimizedImage1 = await uptimizeCloudinaryImage(
      "/q_auto/f_auto/w_300/h_300",
      image
    );
    const optimizedImage2 = await uptimizeCloudinaryImage(
      "/q_auto/f_auto/w_800",
      image
    );

    console.log("Generating PDF from Quill content...");

    // Configure chrome-aws-lambda options
    const executablePath = await chromium.executablePath();

    if (!executablePath) {
      throw new Error("Could not find Chrome executable path");
    }

    // Launch browser with proper Lambda configuration
    const browser = await puppeteer.launch({
      args: [
        ...chromium.args,
        "--hide-scrollbars",
        "--disable-web-security",
        "--disable-features=IsolateOrigins",
        "--disable-site-isolation-trials",
        "--no-sandbox",
        "--disable-setuid-sandbox"
      ],
      defaultViewport: chromium.defaultViewport,
      executablePath: executablePath,
      headless: true
    });

    // Set a reasonable timeout for page operations
    const page = await browser.newPage();
    page.setDefaultTimeout(30000); // 30 second timeout

    // Populate the template with the content
    const populatedHtml = pdfTemplate
      .replace(
        '<h1 id="article-title" class="text-3xl md:text-4xl font-bold mb-4"></h1>',
        `<h1 id="article-title" class="text-3xl md:text-4xl font-bold mb-4">${title}</h1>`
      )
      .replace(
        '<p id="article-description" class="text-gray-400 text-lg mb-4"></p>',
        `<p id="article-description" class="text-gray-400 text-lg mb-4">${shortSummary}</p>`
      )
      .replace(
        '<div id="article-image" class="mb-8 relative aspect-[16/9] rounded-xl overflow-hidden bg-zinc-800">',
        `<div id="article-image" class="mb-8 relative aspect-[16/9] rounded-xl overflow-hidden bg-zinc-800"><img src="${optimizedImage2}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;">`
      )
      .replace(
        '<div id="article-content" class="prose prose-invert max-w-none">',
        `<div id="article-content" class="prose prose-invert max-w-none">${description}`
      )
      .replace('id="author-name"></a>', `id="author-name">Azubike Pascal</a>`)
      .replace(
        'id="author-image" alt="Author" class="rounded-full w-9 h-9" src=""',
        `id="author-image" alt="Author" class="rounded-full w-9 h-9" src="${optimizedImage1}"`
      )
      .replace(
        'id="footer-author-name"></h2>',
        `id="footer-author-name">Azubike Pascal</h2>`
      )
      .replace(
        'id="footer-logo" alt="Logo" class="rounded-full h-8 w-8 mr-2" src=""',
        `id="footer-logo" alt="Logo" class="rounded-full h-8 w-8 mr-2" src="${optimizedImage1}"`
      );

    try {
      // Set the HTML content with proper error handling
      await page.setContent(populatedHtml, {
        waitUntil: ["domcontentloaded", "networkidle0"],
        timeout: 30000
      });

      // Generate PDF with specific settings for Lambda
      const pdfBuffer = await page.pdf({
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
        margin: {
          top: "20px",
          right: "20px",
          bottom: "20px",
          left: "20px"
        }
      });

      // Upload PDF to Cloudinary
      const formData = new FormData();
      formData.append(
        "file",
        new Blob([pdfBuffer], { type: "application/pdf" }),
        `${title.replace(/\s+/g, "-")}.pdf`
      );
      formData.append("upload_preset", "ml_default");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dztt3ldiy/raw/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          timeout: 30000 // 30 second timeout for upload
        }
      );

      const pdfUrl = response.data.secure_url;
      const newEmbedding = await embedding(
        `${title}, ${shortSummary}, ${description}`
      );

      // Update the article
      await Article.findByIdAndUpdate(
        id,
        {
          title,
          description,
          imageUrl: image,
          numView: 0,
          blurImage,
          pdfUrl,
          shortSummary,
          embedding: newEmbedding
        },
        {
          new: true
        }
      );

      // Return success response
      return NextResponse.json(
        { status: "success", message: "Article edited successfully", pdfUrl },
        { status: 200 }
      );
    } catch (error: any) {
      throw new Error(`PDF generation failed: ${error.message}`);
    } finally {
      // Always close the browser
      if (browser) {
        await browser.close();
      }
    }
  } catch (error: any) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      {
        status: "error",
        message: error.message || "An unexpected error occurred"
      },
      { status: 500 }
    );
  }
};
