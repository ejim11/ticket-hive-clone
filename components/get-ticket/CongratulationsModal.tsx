import React from "react";
import Image from "next/image";
import congratsImg from "../../assets/congrats.svg";
import congratsImg2 from "../../assets/congrats-2.svg";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const CongratulationsModal = ({
    eventTitle,
    setDisplayCongratsModal,
}: {
    eventTitle: string;
    setDisplayCongratsModal: Function;
}) => {
    const router = useRouter();

    const oncloseCongratsModal = () => {
        setDisplayCongratsModal(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            className="font-outfit fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center h-screen w-screen bg-[rgba(0,0,0,0.5)] z-[150] cursor-pointer"
            data-close="true"
            onClick={(e: any) => {
                if (e.target.dataset.close) {
                    oncloseCongratsModal();
                }
            }}
        >
            <div className="cursor-default bg-color-white-1 p-[3rem] rounded-[0.6rem] flex flex-col items-center w-[40rem] text-center">
                <div className="relative h-auto my-[3rem]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-[5.4rem] h-[5.4rem] mb-[2.5rem] absolute -bottom-[3rem] left-[50%] right-[50%] -translate-x-[50%] "
                    >
                        <Image
                            src={congratsImg}
                            alt="congrats image"
                            priority
                            width={60}
                            height={60}
                            className="w-full h-full"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src={congratsImg2}
                            alt="congrats image"
                            priority
                            width={360}
                            height={130}
                            className="w-full h-full"
                        />
                    </motion.div>
                </div>

                <p className="text-[3.5rem] font-medium mb-[1.5rem]">
                    Congratulations on your purchase
                </p>
                <p className="font-normal">
                    You’ve successfully a purchased ticket for:
                </p>
                <p className="uppercase text-color-purple-1">{eventTitle}</p>
                <p className="">See ticket in email</p>
                <div className="flex flex-col mt-[4rem] w-full">
                    {/* <button
                        type="button"
                        className="text-[rgba(255,255,255,0.9)] bg-color-purple-1 w-full py-[1.5rem] text-[1.8rem] mb-[1.5rem] rounded-[0.8rem]"
                        onClick={() => {
                            oncloseCongratsModal();
                        }}
                    >
                        See ticket in email
                    </button> */}
                    <button
                        type="button"
                        className="text-color-purple-1 bg-[rgba(243,237,255,1)] w-full py-[1.5rem] text-[1.8rem] mb-[1.5rem] rounded-[0.8rem]"
                        onClick={() => {
                            oncloseCongratsModal();
                            router.push("/");
                        }}
                    >
                        Return home
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default CongratulationsModal;
