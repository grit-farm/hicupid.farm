"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import BookCover from "../../../public/images/book-cover.png";
import { Timestamp, collection, doc, setDoc } from "firebase/firestore";
import { fireStore } from "@/lib/utils/firebase";
import Swal from "sweetalert2";

type Inputs = {
  email: string;
};

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const submitData = {
        email: data.email,
        createdAt: Timestamp.fromDate(new Date()),
        updatedAt: Timestamp.fromDate(new Date()),
      };

      const email = doc(collection(fireStore, "email"));
      await setDoc(email, submitData);

      Swal.fire(
        "신청이 완료되었어요.",
        "ENTJ 남자를 잡을 수 있는 이북을 금방 보내드릴께요!",
        "success"
      );
    } catch (err) {
      Swal.fire(
        "오류가 발생하였습니다.",
        "오류는 개발 담당자에게 바로 전달됩니다.",
        "error"
      );
      console.error(err);
    }
  };

  return (
    <form
      className="flex flex-col gap-8 mt-16"
      onSubmit={handleSubmit(onSubmit)}
    >
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
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />
      {errors.email && (
        <p className="text-sm text-red-500">이메일이 올바르지 않습니다.</p>
      )}
      <button className="bg-violet-700 hover:bg-violet-600 text-white rounded-sm py-4">
        2. 전자책 신청하기
      </button>
      <p>
        선착순으로 100명까지 신청 완료하게 되면 일괄적으로 전자책을 발송할
        예정입니다.
      </p>
    </form>
  );
};

export default EmailForm;
