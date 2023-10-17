"use client";
import Image from "next/image";
import BookCover from "../../../public/images/book-cover.png";

const BookIndex = () => {
  return (
    <div className="flex flex-col text-center">
      <div className="flex justify-center">
        <Image
          className="rounded-sm"
          src={BookCover}
          alt="ENTJ 남자와 썸에서 연애까지"
          height={500}
        />
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <h2 className="text-xl mb-2">목차</h2>
        <p>
          <span className="text-violet-700">1.</span> 들어가며
        </p>
        <p>
          <span className="text-violet-700">2.</span> ENTJ 남자 종류 2가지
        </p>
        <p>
          <span className="text-violet-700">3.</span> ENTJ 남자가 좋아하는 이성
          스타일
        </p>
        <p>
          <span className="text-violet-700">4.</span> ENTJ 남자를 어떻게?
        </p>
        <p>
          <span className="text-violet-700">5.</span> ENTJ 남자를 공략하기 위한
          스몰토크 주제
        </p>
        <p>
          <span className="text-violet-700">6.</span> ENTJ 남자에게 고백하는
          방법
        </p>
        <p>
          <span className="text-violet-700">7.</span> ENTJ 남자와 연애할때
          반드시 알아야 할점
        </p>
        <p>
          <span className="text-violet-700">8.</span> 나가며
        </p>
      </div>
    </div>
  );
};

export default BookIndex;
