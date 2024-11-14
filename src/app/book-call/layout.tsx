import { ContentLayout } from "@/components/admin-panel/content-layout";


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ContentLayout>{children}</ContentLayout>;
}
