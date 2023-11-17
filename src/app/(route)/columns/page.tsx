import ScreenContainer from '@/app/_components/ScreenContainer'

export default function ServerPage() {
  return (
    <ScreenContainer>
      <section className="mx-auto mt-8 w-full max-w-7xl">
        <div className="bg-[url('/images/bg-main.png')] p-8 text-white">
          <h2 className="text-5xl">하이큐피드 칼럼</h2>
          <p className="mt-8 text-lg">
            상담을 신청하기 전에 천천히 칼럼을 읽어보시길 권장합니다.
          </p>
          <p className="text-lg">
            연애 상담 방향성을 잡을 때 도움이 될 수 있습니다.
          </p>
        </div>
        <article className="mt-4 bg-purple-100 p-8 text-lg">
          <h3 className="text-3xl font-bold">상담을 신청하시기 전에</h3>
          <hr className="my-4 h-px border-0 bg-black" />
          <div>
            <p>
              사랑하는 사람을 만나서 행복하게 시간을 보낼 수 있는 연애는 우리
              삶에서 정말 중요한 부분입니다.
            </p>
            <p>
              이런 연애를 성공적으로 이루어 내기 위해서 어떤 것들이 준비가
              되어야 할까요?
            </p>
          </div>
          <div className="mt-8">
            <p>
              먼저, 자기 객관화가 중요합니다. 우리는 자기객관화를 통해 자신의
              강점과 약점을 알게 되고, 이를 바탕으로 조금 더 성장할 수 있습니다.
            </p>
            <p>
              적당하게 타협하면서 '이정도면 괜찮지..' 라고 스스로 속이지 말고
              솔직하게 자신의 모습을 평가하고, 지속해서 개선할 수 있는 부분이
              어떤것이 있을지 찾고 나아가는것이 필요합니다.
            </p>
          </div>
          <div className="mt-8">
            <p>
              둘째, 자기관리를 잘하는 것이 중요합니다. 연애를 하면서 다양한
              감정을 경험하게 됩니다. 이러한 감정을 잘 관리하고 조절하는 능력이
              필요합니다.
            </p>
            <p>
              적절하게 시간을 내고 즐겁게 취미활동을 할 수 있는 것들을 통해서
              스트레스를 해소하고 휴식을 취하며, 자신에게 충분한 시간과 관심을
              기울이는 것이 필요합니다.
            </p>
            <p>
              또한, 건강한 식습관과 규칙적인 운동을 통해 좋은 컨디션을 유지하는
              것이 좋습니다.
            </p>
          </div>
          <div className="mt-8">
            <p>
              셋째, 자신을 위한 시간을 가져야 합니다. 연애는 중요하지만, 자신을
              위한 시간도 필요합니다. 서로 자기개발을 위해 시간을 내는 것은
              연애에도 긍정적인 영향을 줍니다.
            </p>
            <p>
              자신만의 취미활동이나 독서, 명상 등 소중한 시간을 가지는 것은
              자신을 사랑하고 존중하는 표현입니다.
            </p>
          </div>
          <div className="mt-8">
            <p>
              마지막으로, 자신의 가치를 인정하고 소중히 여기는 것이 중요합니다.
              자신의 외모,성격,능력 등등 자신이 가지고 있는 것들 중에서
            </p>
            <p>
              본인이 생각했을 때 좋은 것들이 1개 이상 누구나 가지고 있습니다.
              이런 부분을 생각하면 연애에서도 자신감을 갖게 해줍니다.
            </p>
            <p>
              자신을 사랑하고 소중히 여기는 마음가짐은 타인과의 관계에서도
              긍정적인 영향을 미칩니다.
            </p>
          </div>
          <div className="mt-8">
            <p>
              연애 컨설팅을 신청하기 전에 자신을 돌아보고 준비가 되어있는지
              곰곰히 생각해보세요.
            </p>
            <p>
              자신을 사랑하고 관리하는 노력을 할 준비가 충분히 되어있다면 더욱
              만족스러운 결과를 얻을 수 있을 겁니다.
            </p>
          </div>
        </article>
      </section>
    </ScreenContainer>
  )
}
