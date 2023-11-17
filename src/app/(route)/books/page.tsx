import ScreenContainer from '@/app/_components/ScreenContainer'
import BookCard from '@/app/_components/BookCard'
import EntjBook from '../../../../public/images/entj-book.png'

export default function ServerPage() {
  return (
    <ScreenContainer>
      <section className="mx-auto mt-8 w-full max-w-7xl">
        <div className="bg-[url('/images/bg-main.png')] p-8 text-white">
          <h2 className="text-5xl">노하우 북</h2>
          <p className="mt-8 text-lg">
            하이큐피드의 상담사 분들의 노하우가 담긴 전자책 입니다.
          </p>
          <p className="mt-1 text-lg">
            엄청 거창한 내용이나 꿀팁은 아닐 수도 있습니다. 읽는다고 모든 문제가
            해결되진 않을 겁니다.
          </p>
          <p className="mt-1 text-lg">
            다만, 이 노하우 북을 통해 남녀 사이의 연애/이별/결혼/재회 등 다양한
            상황에서의 유형별 노하우를 엿볼 수 있습니다.
          </p>
        </div>
        <article className="flex gap-4">
          <BookCard
            title="ENTJ 남자와 썸에서 연애까지"
            description="ENTJ 남자들이 굉장히 매력적이지만
막상 연애하면 이해가 잘 안되어서 고통받고, 힘들어하는 사람들을 위한 노하우 북 입니다."
            link=""
            image={EntjBook}
          />
        </article>
      </section>
    </ScreenContainer>
  )
}
