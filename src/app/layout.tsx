import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azure Cert Prep",
  description:
    "Study, drill, and master Microsoft Azure certification exams with your friends.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
