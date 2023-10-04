import "./globals.css";
import type { Metadata } from "next";

import Headers from "@/components/Headers";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hi Cupid | 쉿! 너만 알려주는 연애비법",
  description: "쉿! 너만 알려주는 연애비법",
  openGraph: {
    title: "Hi Cupid | 쉿! 너만 알려주는 연애비법",
    description: "쉿! 너만 알려주는 연애비법",
    url: "https://hicupid.farm",
    siteName: "Hi Cupid | 쉿! 너만 알려주는 연애비법",
    images: ["https://hicupid.farm/images/og.png"],
    locale: "ko-KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sCoreDream">
        <Headers />
        {children}
        <Footer />
      </body>
    </html>
  );
}
