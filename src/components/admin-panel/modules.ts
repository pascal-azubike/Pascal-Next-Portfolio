import { uptimizeCloudinaryImage } from "@/hooks/imageCloudinaryOptimizer";
import axios from "axios";
import Quill from "quill";
import hljs from "highlight.js";

// Image handler function
const imageHandler = function (this: { quill: Quill }) {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.onchange = async () => {
    if (!input.files || !input.files[0]) return;

    const file = input.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dztt3ldiy/image/upload`,
        formData
      );

      const imageUrl = await uptimizeCloudinaryImage(
        "f_auto,q_auto",
        response.data.url
      );

      if (this.quill) {
        const selection = this.quill.getSelection();
        if (selection) {
          const cursorPosition = selection.index;

          // Insert the image
          this.quill.insertEmbed(cursorPosition, "image", imageUrl);

          // Move cursor to next position and add a caption placeholder
          this.quill.insertText(cursorPosition + 1, "\n");
          this.quill.insertText(
            cursorPosition + 2,
            "Image caption here...",
            { italic: true, color: '#666' }
          );
          this.quill.insertText(cursorPosition + 3, "\n");

          // Set the cursor after the caption
          this.quill.setSelection(cursorPosition + 3, 0);

          // Add data attributes for additional metadata if needed
          const imageNode = this.quill.root.querySelector(
            `img[src="${imageUrl}"]`
          ) as HTMLImageElement;

          if (imageNode) {
            imageNode.setAttribute("alt", "");
            imageNode.setAttribute("title", "");
            // Add any additional attributes you need
            imageNode.dataset.caption = "";
            imageNode.dataset.alignment = "center";
          }
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      // You might want to show an error message to the user here
    }
  };
};

export const modulesObject = {
  syntax: {
    highlight: (text: string) => hljs.highlightAuto(text).value
  },
  toolbar: {
    container: [
      [{ font: [] }, { size: [] }, { header: [1, 2, 3, 4, 5, 6] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      [{ header: 1 }, { header: 2 }, "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      [{ direction: "rtl" }, { align: [] }],
      [{ 'align': ['', 'center', 'right', 'justify'] }],
      ["link", "image", "video", "clean"]
    ],
    handlers: {
      image: imageHandler
    }
  },
  blotFormatter: {
    overlay: {
      style: {
        border: "2px solid #0096ff",
        borderRadius: '4px'
      }
    },
    align: {
      enabled: true,
      icons: {
        left: '<i class="fa fa-align-left"></i>',
        center: '<i class="fa fa-align-center"></i>',
        right: '<i class="fa fa-align-right"></i>'
      }
    },
    resize: {
      enabled: true
    }
  },
  imageUploader: {
    upload: (file: File) => {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ml_default");

        axios
          .post(`https://api.cloudinary.com/v1_1/dztt3ldiy/image/upload`, formData)
          .then(async (response) => {
            const imageUrl = await uptimizeCloudinaryImage(
              "f_auto,q_auto",
              response.data.url
            );
            resolve(imageUrl);
          })
          .catch((error) => {
            reject("Upload failed");
            console.error("Error:", error);
          });
      });
    }
  }
};