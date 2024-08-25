import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";

export const metadata: Metadata = {
  title: "에브리멍멍",
  description: "강아지에 대한 정보를 모아모아",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
