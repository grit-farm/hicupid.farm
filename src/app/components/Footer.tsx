"use client";

const Footer = () => {
  return (
    <footer className="bg-white shadow ">
      <div className="w-full max-w-screen-xl mx-auto p-2 mt-8">
        <p className="flex text-xs justify-center text-gray-700 sm:text-center">
          <span>하이큐피드 | MBTI 종합 맞춤형 연애상담 서비스</span>
        </p>
      </div>
      <div className="w-full max-w-screen-xl mx-auto p-4">
        <p className="flex flex-col md:flex-row gap-2 justify-center text-xs text-gray-700 sm:text-center mb-1">
          <span>그릿팜</span>
          <span>대표: 이학성</span>
          <span>인천광역시 부평구 주부토로 201</span>
          <span>이메일: contact@hicupid.farm</span>
          <span>사업자등록번호: 145-02-03376</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
