import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sijjadati | סגדתי | سجادتي",
  description: "Premium rugs for home and business",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
