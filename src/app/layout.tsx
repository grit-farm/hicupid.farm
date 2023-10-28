import "./globals.css";
import type { Metadata } from "next";

import Headers from "@/app/components/Headers";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "하이큐피드 | MBTI 궁합 맞춤형 연애상담 서비스",
  description: "MBTI 종합 맞춤형 연애상담 서비스",
  openGraph: {
    title: "하이큐피드 | MBTI 궁합 맞춤형 연애상담 서비스",
    description: "MBTI 종합 맞춤형 연애상담 서비스",
    url: "https://hicupid.farm",
    siteName: "하이큐피드 | MBTI 궁합 맞춤형 연애상담 서비스",
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
