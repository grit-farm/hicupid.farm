import Image from "next/image";
import BookCover from "../../public/book-cover.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4">
      <article className="flex flex-col text-center">
        <p>
          MBTI 관련 글을 아무리 보고 또 봐도 <br />
          알다가도 모를 것 같은 ENTJ 남자들 어렵게 느껴지죠? <br />
          잘해보려고 노력하는데 이게 잘하고 있는건지 <br />
          아닌지 답답하고 잘 모를 수밖에 없어요. <br />
        </p>
        <p className="mt-8">
          누구보다 사랑에 200% 진심 가득한 <br />
          ENTJ 남자를 제대로 잡을 수 있도록 도와드릴게요. <br />
        </p>
        <p className="mt-8">
          ENTJ 남자와 빠르게 유혹할 수 있는 <br />
          비법들을 꾹꾹 눌러서 담았습니다. <br />
          어디가서 흔하게 보고 듣는 내용들이 아니거든요. <br />
        </p>
        <p className="mt-8">
          &apos;ENTJ 남자와 썸에서 연애까지&apos;는 <br />
          ENTJ남자의 첫만남부터 연애할 때 주의사항까지 <br />
          바로 실전에서 활용가능한 내용들을 담았습니다. <br />
        </p>
        <p className="mt-8">
          진심으로 ENTJ 남자를 잡고 싶은 분들 중에서 <br />
          선착순 100명에게만 무료로 전자책을 보내드릴게요.
          <br />
        </p>
        <p className="mt-8">
          아래 이메일을 적어주세요.
          <br />
          시작이 반이라고 하는데 여기까지 오신거면 실행력이 있으신거고 <br />
          이미 50% 성공했다고 볼 수 있어요!
          <br />
        </p>
        <p className="mt-8">여러분의 사랑을 응원할게요.</p>
        <p className="mt-8">하이큐피드 올림 ♥</p>
      </article>
      <form className="flex flex-col gap-8 mt-16">
        <div className="flex justify-center">
          <Image
            className="rounded-sm"
            src={BookCover}
            alt="ENTJ 남자와 썸에서 연애까지"
            height={500}
          />
        </div>
        <input
          className="bg-gray-100 text-center rounded-sm py-4"
          placeholder="1. 이메일을 입력해주세요."
        />
        <button className="bg-violet-700 hover:bg-violet-600 text-white rounded-sm py-4">
          2. 전자책 신청하기
        </button>
        <p>
          선착순으로 100명까지 신청 완료하게 되면 일괄적으로 전자책을 발송할
          예정입니다.
        </p>
      </form>
    </main>
  );
}
