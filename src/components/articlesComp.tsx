import React from "react";
import Image from "next/image";

import FocusCards from "./ui/focus-cards";
import AllArticles from "./ui/focus-cards";

const MediumLikeLayout = () => {
  return (
    <div className="relative">
      <div className="max-w-5xl mx-auto px-4 md:px-8   ">
        <AllArticles max={4} />
      </div>
    </div>
  );
};

export default MediumLikeLayout;
