import { NextRequest, NextResponse } from "next/server";

import puppeteer from "puppeteer";
import fs from "fs/promises";
import path from "path";
import { pdfTemplate } from "./pdfTemplate";
import axios from "axios";
import { uptimizeCloudinaryImage } from "@/hooks/imageCloudinaryOptimizer";

import { connectDB } from "../../config/MongoDbConfig";
import Article from "../../models/Article";
import { embedding } from "@/utils/getEmbeddins";
// Define the POST handler
export const POST = async (request: NextRequest) => {
  try {
    // if (loginUser?.privateMetadata?.admin !== true) {
    //   return NextResponse.json(
    //     { message: "You are not allowed to perform this operation" },
    //     { status: 401 }
    //   );
    // }
    connectDB();
    // Parse the request body
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
    console.log("Generating PDF from Quill content...");
    const newEmbedding = await embedding(
      `${title},
      ${shortSummary},
			${description},`
    );

    // Launch a headless browser instance
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // HTML template (you would typically load this from a file)
    const htmlTemplate = pdfTemplate;

    // Populate the template with the content

    const populatedHtml = htmlTemplate
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
    // Write the populated HTML to a temporary file
    const tempHtmlPath = path.join(process.cwd(), "temp.html");
    await fs.writeFile(tempHtmlPath, populatedHtml);

    // Navigate to the temporary HTML file
    await page.goto(`file://${tempHtmlPath}`, { waitUntil: "networkidle0" });

    // Generate the PDF
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true
    });

    // Close the browser
    await browser.close();

    // Upload PDF to Cloudinary

    const formData = new FormData();
    formData.append(
      "file",
      new Blob([pdfBuffer], { type: "application/pdf" }),
      `${title.replace(/\s+/g, "-")}.pdf`
    );
    formData.append("upload_preset", "ml_default");
    let pdfUrl;
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dztt3ldiy/raw/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      pdfUrl = response.data.secure_url;
    } catch (error: any) {
      if (error.response) {
        console.error(
          "Server responded with:",
          "i just return this error ",
          error.response.status,
          error,
          pdfUrl
        );
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
      // Implement retry logic here
    }

    console.log(pdfUrl);
    console.log(newEmbedding, "Embeddings ............................");
    // Create the new product
    await Article.create({
      title,
      description,
      imageUrl: image,
      numView: 0,
      blurImage,
      pdfUrl,
      shortSummary,
      embedding: newEmbedding
    });

    // Return success response
    return NextResponse.json(
      { status: "success", message: "Product created successfully", pdfUrl },
      { status: 201 }
    );
  } catch (error: any) {
    console.log("error =================================", error);
    // Handle errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
