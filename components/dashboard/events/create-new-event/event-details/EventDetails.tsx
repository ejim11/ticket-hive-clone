"use client";
import {
    checkImageDimensionsAndSize,
    fileHandler,
} from "@/components/utils/helper-func";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { createNewEventActions } from "@/slices/createNewEventSlice";
import Image from "next/image";
import React, { useState } from "react";
import { LuBadgeAlert } from "react-icons/lu";
import { MdOutlineLogin } from "react-icons/md";

const EventDetails: any = ({
    setFormIndex,
    imageObj,
    setImageObj,
    image,
    setImg,
}: {
    setFormIndex: Function;
    imageObj: any;
    setImageObj: Function;
    image: any;
    setImg: Function;
}) => {
    const { name, category, description } = useAppSelector(
        (state) => state.createNewEvent.details
    );

    const dispatchFn = useAppDispatch();

    const eventCategories = [
        "music",
        "conference",
        "festivals",
        "parties",
        "exhibitions",
        "theater",
        "classes",
        "sports",
    ];

    const isBtnDisabled =
        name.length > 3 && category && description.length > 5 && image;

    const labelClassName =
        "text-[1.8rem] font-medium text-[rgba(34,34,34,0.8)] mb-[1rem]";

    const onChangeEventNameHandler = (e: any) => {
        dispatchFn(
            createNewEventActions.setEventDetail({ name: e.target.value })
        );
    };

    const onChangeEventCategoryHandler = (e: any) => {
        dispatchFn(
            createNewEventActions.setEventDetail({ category: e.target.value })
        );
    };

    const onChangeEventDescriptionHandler = (e: any) => {
        dispatchFn(
            createNewEventActions.setEventDetail({
                description: e.target.value,
            })
        );
    };

    console.log(imageObj, name);

    const setImage = (file: any) => {
        setImageObj(file);
        setImg(fileHandler(file));
    };

    const onChangeEventImageHandler = (e: any) => {
        const file = e.target.files[0];

        if (file && file.type.startsWith("image/")) {
            checkImageDimensionsAndSize(
                file,
                <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] text-color-red" />,
                setImage
            );
        }
    };

    const handleDragOver = (e: any) => {
        e.preventDefault();
    };

    const onDropEventImageHandler = (e: any) => {
        e.preventDefault();

        const file = e.dataTransfer.files[0];

        if (file && file.type.startsWith("image/")) {
            checkImageDimensionsAndSize(
                file,
                <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] text-color-red" />,
                setImage
            );
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-between font-outfit">
            <div className="w-full flex flex-col  p-[2rem]  overflow-y-auto ">
                <div className="w-full flex flex-col mb-[2.4rem]">
                    <label htmlFor="event-name" className={labelClassName}>
                        Name
                    </label>
                    <input
                        type="text"
                        name="event-name"
                        id="event-name"
                        placeholder="Event name"
                        value={name}
                        onChange={onChangeEventNameHandler}
                        className="px-[1.5rem] py-[1rem] border outline-none ring-0 border-[rgba(223,225,228,1)] rounded-[0.6rem] focus:ring-0 focus:outline-none"
                    />
                </div>
                <div className="flex flex-col mb-[2.4rem]">
                    <label
                        htmlFor="event-categories"
                        className={labelClassName}
                    >
                        Category
                    </label>
                    <div className="border px-[1.5rem] py-[1rem] border-[rgba(223,225,228,1)] rounded-[0.6rem] cursor-pointer ">
                        <select
                            name="event-categories"
                            id="event-categories"
                            className="ring-0 outline-none focus:ring-0 focus:outline-none w-full cursor-pointer bg-color-white-1"
                            value={category}
                            onChange={onChangeEventCategoryHandler}
                        >
                            <option value="" disabled>
                                Select category
                            </option>
                            {eventCategories.map((category: string) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex flex-col mb-[2.4rem]">
                    <label htmlFor="description" className={labelClassName}>
                        Description
                    </label>
                    <textarea
                        rows={4}
                        className="border px-[1.5rem] py-[1rem] border-[rgba(223,225,228,1)] rounded-[0.6rem]  ring-0 outline-none focus:ring-0 focus:outline-none"
                        placeholder="John.doe1234@gmail.com"
                        value={description}
                        onChange={onChangeEventDescriptionHandler}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="event-image" className={labelClassName}>
                        Image
                    </label>
                    <div
                        className="flex flex-col items-center px-[1.5rem] py-[3rem] text-center border-2 border-[rgba(223,225,228,1)] rounded-[0.6rem] border-dotted"
                        onDrop={onDropEventImageHandler}
                        onDragOver={handleDragOver}
                    >
                        {image ? (
                            <div className="w-[5rem] h-[5rem]">
                                <Image
                                    src={image}
                                    alt="event-image"
                                    priority
                                    width={20}
                                    height={20}
                                    className="w-full h-full rounded-[0.6rem]"
                                />
                            </div>
                        ) : (
                            <MdOutlineLogin className="rotate-[90deg] w-[2.8rem] h-[2.8rem]" />
                        )}
                        <p className="text-[1.3rem] w-[80%] mt-[1.6rem]">
                            Drag & Drop or{" "}
                            <label
                                htmlFor="event-image"
                                className="text-color-purple-1 cursor-pointer"
                            >
                                {image ? "Change file" : "Choose file"}
                            </label>{" "}
                            to uplaod required size 1920 x 1005 pixels. max 10MB
                            each jpg. jpeg. png.gif
                        </p>
                    </div>
                    <input
                        type="file"
                        name="event-image"
                        accept="image/*"
                        id="event-image"
                        className="border hidden"
                        onChange={onChangeEventImageHandler}
                    />
                </div>
            </div>
            <div className="w-full px-[2rem] h-[9rem] flex items-center">
                <button
                    type="button"
                    disabled={!isBtnDisabled}
                    className="disabled:bg-color-purple-3 disabled:cursor-not-allowed bg-color-purple-1 text-color-white-1 px-[3rem] py-[1rem] rounded-[0.6rem] ml-auto flex"
                    onClick={() => {
                        setFormIndex(1);
                    }}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default EventDetails;
