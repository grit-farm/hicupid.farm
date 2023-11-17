import ScreenContainer from '@/app/_components/ScreenContainer'

export default function ServerPage() {
  return (
    <ScreenContainer>
      <section className="bg-[url('/images/bg-main.png')]">
        <div className="mx-auto mt-8 w-full max-w-7xl px-4">
          <h2 className="text-5xl text-white">하이큐피드 연애 컨설팅</h2>
          <article className="text-white">
            <div className="mt-8 text-2xl">
              <p>특별하고 설레는 연애</p>
              <p>너무 어려우신가요?</p>
            </div>
            <div className="mt-8 text-2xl">
              <p>하이큐피드와 함께 하시면</p>
              <p>모든 문제가 해결될 거에요</p>
            </div>
            <div className="mt-8 text-2xl">
              <p>걱정은 덜어두시고</p>
              <p>편하게 상담 받으세요.</p>
            </div>
            <div className="my-4">
              <p>2023년 10월 기준, 416분께서 하이큐피드와 고민을 나누었어요.</p>
            </div>
            <button className="mb-8 mt-4 rounded bg-primary px-2 py-2 text-white">
              하이큐피드 무료 상담
            </button>
          </article>
        </div>
      </section>
    </ScreenContainer>
  )
}
