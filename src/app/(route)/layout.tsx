import '../globals.css'
import type { Metadata } from 'next'
import Footer from '@/app/_components/Footer'
import Headers from '@/app/_components/Headers'

export const metadata: Metadata = {
  metadataBase: new URL('https://novelduck.farm'),
  title: {
    default: '하이큐피드 | MBTI 궁합 맞춤형 연애상담 서비스',
    template: '%s | 하이큐피드',
  },
  description: 'MBTI 궁합 맞춤형 연애상담 서비스',
  openGraph: {
    title: '하이큐피드 | MBTI 궁합 맞춤형 연애상담 서비스',
    description: 'MBTI 궁합 맞춤형 연애상담 서비스',
    url: 'https://hicupid.farm',
    siteName: '하이큐피드',
    images: ['/images/og.png'],
    locale: 'ko-KR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: '하이큐피드 | MBTI 궁합 맞춤형 연애상담 서비스',
    description: 'MBTI 궁합 맞춤형 연애상담 서비스',
    images: ['/images/og.png'],
    creator: '하이큐피드',
    site: 'https://hicupid.farm',
  },
  alternates: {
    canonical: 'https://hicupid.farm',
    types: {
      'application/rss+xml': 'https://hicupid.farm/rss',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="font-gangwonEdu">
        <Headers />
        {children}
        <Footer />
      </body>
    </html>
  )
}
