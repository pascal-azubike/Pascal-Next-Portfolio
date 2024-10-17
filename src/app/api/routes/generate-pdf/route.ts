import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import fs from "fs/promises";
import path from "path";
import { pdfTemplate } from "./pdfTemplate";
import axios from "axios";
import { uptimizeCloudinaryImage } from "@/hooks/imageCloudinaryOptimizer";

export const POST = async (req: NextRequest) => {
  console.log("Generating PDF .....................");

  try {
    // Parse the request body to get the Quill content and other details
    const body = await req.json();
    const { title, description, imageUrl, quillContent } = body;

    if (!quillContent) {
      return NextResponse.json(
        { success: false, error: "Quill content is required" },
        { status: 400 }
      );
    }
    const optimizedImage1 = await uptimizeCloudinaryImage(
      "/q_auto/f_auto/w_300/h_300",
      imageUrl
    );
    const optimizedImage2 = await uptimizeCloudinaryImage(
      "/q_auto/f_auto/w_800",
      imageUrl
    );
    console.log("Generating PDF from Quill content...");

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
        `<p id="article-description" class="text-gray-400 text-lg mb-4">${description}</p>`
      )
      .replace(
        '<div id="article-image" class="mb-8 relative aspect-[16/9] rounded-xl overflow-hidden bg-zinc-800">',
        `<div id="article-image" class="mb-8 relative aspect-[16/9] rounded-xl overflow-hidden bg-zinc-800"><img src="${optimizedImage2}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;">`
      )
      .replace(
        '<div id="article-content" class="prose prose-invert max-w-none">',
        `<div id="article-content" class="prose prose-invert max-w-none">${quillContent}`
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

    // Remove the temporary HTML file

    // Save the PDF to a file in the current folder
    const fileName = `blog-post-${Date.now()}.pdf`;
    const filePath = path.join(process.cwd(), "pdfs", fileName);

    // Ensure the 'pdfs' directory exists
    await fs.mkdir(path.join(process.cwd(), "pdfs"), { recursive: true });

    await fs.writeFile(filePath, pdfBuffer);

    // Remove the temporary HTML file
    await fs.unlink(tempHtmlPath);

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
        }
      }
    );

    const pdfUrl = response.data.secure_url;

    // Send a success response with the Cloudinary URL
    console.log(pdfUrl, "PDF uploaded successfully to Cloudinary");
    return NextResponse.json(
      {
        success: true,
        message: "PDF generated and uploaded successfully",
        pdfUrl: pdfUrl
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error, "error ..............................");
    return NextResponse.json(
      { success: false, error: "Error generating and uploading PDF" },
      { status: 500 }
    );
  }
};
