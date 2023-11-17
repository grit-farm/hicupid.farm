import ScreenContainer from '@/app/_components/ScreenContainer'

export default function ServerPage() {
  return (
    <ScreenContainer>
      <section className="mx-auto mt-8 w-full max-w-7xl">
        <div className="bg-[url('/images/bg-main.png')] p-8 text-white">
          <h2 className="text-5xl">자주 묻는 질문</h2>
          <p className="mt-8 text-lg">
            하이큐피드를 이용하시면서 자주 물어보시는 질문만 정리해두었습니다.
          </p>
          <p className="text-lg">
            상담을 신청하기 전에 고민, 질문이 생긴다면 먼저 확인하시는 것을
            추천드립니다.
          </p>
        </div>
        <article className="mt-4 bg-purple-100 p-8 text-lg">
          <div>
            <p>Q) 하이큐피드의 상담사는 어떤 사람들로 이루어져 있나요?</p>
            <p className="mt-2 text-base">
              A) 각각 연애 컨설팅 솔루션 경험이 500회 이상 있으며 전문적이고
              내담자와 편하게 소통이 가능한 베테랑 상담사들이 있습니다.
            </p>
            <hr className="my-4 h-0.5 rounded border-0 bg-purple-400" />
          </div>
          <div>
            <p>Q) 무료 상담은 정말 무료로 진행되나요?</p>
            <p className="mt-2 text-base">
              A) 네! 일절 비용을 받지 않고 무료로 진행됩니다. 다만 접수 후 실제
              상담까지 2~3일의 대기시간이 있습니다. (유료 상담으로 전환시 빠르게
              상담 가능)
            </p>
            <hr className="my-4 h-0.5 rounded border-0 bg-purple-400" />
          </div>
          <div>
            <p>Q) 상담은 어떤 방식으로 진행되나요?</p>
            <div className="mt-2 text-base">
              A){' '}
              <p className="mt-2">
                - 진단지 작성후 원하는 방향의 상담을 선택합니다.
              </p>
              <p>
                상담 종류는 전화를 통한 음성 상담, 카톡을 활용한 문자 상담 2가지
                방법이 있습니다.
              </p>
              <p className="mt-2">
                - 상담이 가능한 스케줄 확인 후 해당 날짜 선택{' '}
              </p>
              <p className="mt-2">
                - 상담사들이 일정 확인 후 연락을 하게 됩니다.
              </p>
            </div>
            <hr className="my-4 h-0.5 rounded border-0 bg-purple-400" />
          </div>
          <div>
            <p>Q) 유료 상담과 무료 상담의 차이점은 무엇인가요?</p>
            <p className="mt-2 text-base">
              A)
              <p className="mt-2">- 무료 상담</p>
              <p className="mt-1">상담까지 대기시간 2~3일 소요</p>
              <p className="mt-1">제한 시간이 짧은 편</p>
              <p className="mt-1">구체적이고 자세한 피드백 X</p>
              <p className="mt-4">- 유료 상담</p>
              <p className="mt-1">당일 상담 가능</p>
              <p className="mt-1">구체적이고 현실적인 피드백 가능</p>
              <p className="mt-1">코스별 다양한 솔루션 제공</p>
            </p>
            <hr className="my-4 h-0.5 rounded border-0 bg-purple-400" />
          </div>
          <div>
            <p>Q) 무료 상담에 대해서 더 자세히 알고 싶어요.</p>
            <p className="mt-2 text-base">
              A) 무료상담 신청 전에 설문 항목에 맞춰서 진단지를 작성합니다.
              <p className="mt-1">
                진단지 작성 후 제출해주시면 무료 상담이 접수 됩니다.
              </p>
              <p className="mt-1">
                2~3일 이후 사전에 작성해주신 진단지 작성을 바탕으로 어떤
                방식으로 내담자의 고민을 해결할 수 있을지 같이 고민합니다.
              </p>
            </p>
            <hr className="my-4 h-0.5 rounded border-0 bg-purple-400" />
          </div>
          <div>
            <p>
              Q) 익명, 상담 내용에 관하여 비밀이 보장되나요? (상담 내용이 후기로
              공유되진 않나요?)
            </p>
            <p className="mt-2 text-base">
              A) 네! 하이큐피드는 비밀보장을 원칙으로 상담을 진행합니다. 또한
              실명이 아닌 상담사들이 부르기 쉬운 가명을 사용하셔도 좋습니다.
            </p>
            <hr className="my-4 h-0.5 rounded border-0 bg-purple-400" />
          </div>
        </article>
      </section>
    </ScreenContainer>
  )
}
