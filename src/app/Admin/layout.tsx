import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import React from "react";

const page = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
};

export default page;
