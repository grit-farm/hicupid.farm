import ScreenContainer from '@/app/_components/ScreenContainer'

export default function ServerPage() {
  return (
    <ScreenContainer>
      <section className="mx-auto mt-8 w-full max-w-7xl">
        <div className="bg-[url('/images/bg-main.png')] p-8 text-white">
          <h2 className="text-5xl">하이큐피드 소개</h2>
          <p className="mt-8 text-lg">하이큐피드는 HI와 CUPID의 합성어로</p>
          <p className="text-lg">
            사랑을 상징하는 신(Cupid)과 함께 사랑하는 이에게 인사(Hi)를 건넬 수
            있도록 도와주고 싶은 마음입니다.
          </p>
        </div>
        <article className="p-8 text-lg">
          <div>
            <p>
              썸을 시작하는 방법, 썸에서 연애로 나아가는 방법, 이별 상담, 재회
              상담 등
            </p>
            <p>사랑의 모든 단계에서 도와드릴게요.</p>
          </div>
          <div className="mt-8">
            <p>우리는 이성을 마주할 때 </p>
            <p>여러가지 문제를 마주하게 됩니다.</p>
          </div>
          <div className="mt-8">
            <p>마음에 드는 사람과 어떻게 썸을 시작할 수 있을지</p>
            <p>썸 단계에서 어떻게 연애로 발전시킬 수 있을지</p>
            <p>사귀면서 발생하는 갈등은 어떻게 해결할 수 있을지</p>
            <p>애매한 관계는 어떻게 더욱 성숙하게 만들 수 있을지</p>
          </div>
          <div className="mt-8">
            <p>사랑의 모든 순간, 모든 단계 속에서</p>
            <p>하이큐피드가 믿을 수 있는 상담과 조언을 통해</p>
            <p>더 슬기롭고 똑똑하게 사랑할 수 있도록 도와드릴게요.</p>
          </div>
          <div className="mt-8">
            <p>여러분의 사랑을 진심으로 응원하겠습니다. </p>
          </div>
          <div className="mt-8">
            <p>하이큐피드 올림.</p>
          </div>
        </article>
      </section>
    </ScreenContainer>
  )
}
