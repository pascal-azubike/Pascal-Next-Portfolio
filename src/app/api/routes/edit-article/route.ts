import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../config/MongoDbConfig";
import Article from "../../models/Article";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import axios from "axios";
import { uptimizeCloudinaryImage } from "@/hooks/imageCloudinaryOptimizer";
import { embedding } from "@/utils/getEmbeddins";
import { pdfTemplate } from "../create-article/pdfTemplate";

export const POST = async (request: NextRequest) => {
  let browser;

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

    const reqBody = await request.json();
    const { title, description, image, blurImage, shortSummary } = reqBody;

    const optimizedImage1 = await uptimizeCloudinaryImage(
      "/q_auto/f_auto/w_300/h_300",
      image
    );
    const optimizedImage2 = await uptimizeCloudinaryImage(
      "/q_auto/f_auto/w_800",
      image
    );

    console.log("Starting PDF generation process...");

    // Launch Puppeteer with serverless-friendly settings
    browser = await puppeteer.launch({
      args: [
        ...chromium.args,
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--single-process",
        "--no-zygote"
      ],
      defaultViewport: chromium.defaultViewport || { width: 1200, height: 800 },
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      ignoreHTTPSErrors: true
    });

    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(60000); // Extend navigation timeout

    // Intercept requests to block unnecessary resources
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      if (["image", "stylesheet", "font"].includes(req.resourceType())) {
        req.abort();
      } else {
        req.continue();
      }
    });

    // Populate the HTML template with dynamic content
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

    // Set page content
    await page.setContent(populatedHtml, {
      waitUntil: "networkidle2",
      timeout: 60000
    });

    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "20px", right: "20px", bottom: "20px", left: "20px" },
      scale: 0.75, // Adjust scale for more efficient rendering
      timeout: 60000
    });

    // Close the browser
    await browser.close();
    browser = null;

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
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 60000
      }
    );

    const pdfUrl = response.data.secure_url;
    const newEmbedding = await embedding(
      `${title}, ${shortSummary}, ${description}`
    );

    // Update article in MongoDB
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
      { new: true }
    );

    return NextResponse.json(
      { status: "success", message: "Article edited successfully", pdfUrl },
      { status: 200 }
    );
  } catch (error:any) {
    console.error("Error in PDF generation:", error);
    return NextResponse.json(
      { status: "error", message: `PDF generation failed: ${error.message}` },
      { status: 500 }
    );
  } finally {
    if (browser) {
      try {
        await browser.close();
      } catch (err) {
        console.error("Error closing browser:", err);
      }
    }
  }
};
