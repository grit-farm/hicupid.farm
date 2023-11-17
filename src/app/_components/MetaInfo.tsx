'use client'

import Script from 'next/script'

const MetaInfo = () => {
  return (
    <>
      <meta
        name="naver-site-verification"
        content={`${process.env.NEXT_PUBLIC_NAVER_SITE_ID}`}
      />
      {/* eslint-disable-next-line @next/next/inline-script-id */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://hicupid.farm',
            '@type': 'Organization',
            name: '하이큐피드 | MBTI 궁합 맞춤형 연애상담 서비스',
            url: 'https://hicupid.farm',
            provider: {
              '@type': 'Organization',
              name: '하이큐피드',
            },
          }),
        }}
      />
    </>
  )
}

export default MetaInfo
