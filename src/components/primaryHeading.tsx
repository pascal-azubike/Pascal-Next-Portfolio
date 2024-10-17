import localFont from "next/font/local";
import React, { ReactNode } from "react";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "../../public/fonts/Colby-StReg.woff2",
  display: "swap"
});

const PrimaryHeading = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={myFont.className}>{children}</div>;
};

export default PrimaryHeading;
