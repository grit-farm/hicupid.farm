'use client'

const Footer = () => {
  return (
    <footer className="bg-white shadow ">
      <div className="mx-auto mt-8 w-full max-w-screen-xl p-2">
        <p className="flex justify-center text-xs text-gray-700 sm:text-center">
          <span>하이큐피드 | MBTI 궁합 맞춤형 연애상담 서비스</span>
        </p>
      </div>
      <div className="mx-auto w-full max-w-screen-xl p-4">
        <p className="mb-1 flex flex-col justify-center gap-2 text-xs text-gray-700 sm:text-center md:flex-row">
          <span>그릿팜</span>
          <span>대표: 이학성</span>
          <span>인천광역시 부평구 주부토로 201</span>
          <span>이메일: contact@hicupid.farm</span>
          <span>사업자등록번호: 145-02-03376</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
