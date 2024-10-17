import { Share1Icon } from "@radix-ui/react-icons";
import React from "react";

import { LucideShare2, Share2 } from "lucide-react";
import { Button } from "./ui/button";

const ShareButton = ({ title, text, url }: any) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url
        });
        console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    } else {
      console.log("Web Share API is not supported in your browser");
    }
  };

  return (
    <Button variant={"outline"} onClick={handleShare}>
      <Share2 />
    </Button>
  );
};

export default ShareButton;
