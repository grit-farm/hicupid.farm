"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Timestamp, collection, doc, setDoc } from "firebase/firestore";
import { fireStore } from "@/lib/utils/firebase";
import Swal from "sweetalert2";
import { sendSlackMessage } from "@/lib/utils/slack";

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
                funnel: 'INTJ 남자를 유혹하는 방법 이북',
                createdAt: Timestamp.fromDate(new Date()),
                updatedAt: Timestamp.fromDate(new Date()),
            };

            const email = doc(collection(fireStore, "email"));
            await setDoc(email, submitData);

            Swal.fire(
                "신청이 완료되었어요.",
                "인티제 남자의 벽을 장난감 성벽으로 만들 수 있었던 방법을 금방 보내드릴께요!",
                "success"
            );

            sendSlackMessage(
                "#hi-cupid",
                "큐피드봇",
                ":cupid:",
                `웹사이트에서 ${data.email}님이 INTJ 남자를 유혹하는 방법을 신청하였어요!`
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
                2. 신청하기
            </button>
            <p>
                선착순으로 신청자가 <span className="text-red-500">30명</span>에 도달하면 책 발송은 마감 됩니다.
            </p>
        </form>
    );
};

export default EmailForm;
