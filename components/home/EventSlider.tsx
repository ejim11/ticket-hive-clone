"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import EventListItem from "../EventListItem";
import SectionCover from "../SectionCover";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { eventsList } from "../utils/data";
import EventSkeleton from "../skeletons/EventSkeleton";
import { useAppSelector } from "@/hooks/customHook";

const sliderBtnClassnName =
    "bg-color-grey-1 flex items-center top-[50%]  justify-center w-[7rem] h-[7rem] rounded-full absolute  z-20     hover:bg-color-black-1  transition-all duration-150 ease-in";

function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <button
            // className={className}
            // style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
            className={`${sliderBtnClassnName} right-[8rem] xlg:right-[5rem] xmd:right-[3rem] smd:right-0 `}
        >
            <GoChevronRight className="text-color-white-1 w-[2.8rem] h-[2.8rem]" />
        </button>
    );
}

function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <button
            // className={className}
            // style={{ ...style, display: "block", background: "red" }}
            className={`${sliderBtnClassnName} left-[0rem]`}
            onClick={onClick}
        >
            <GoChevronLeft className="text-color-white-1 w-[2.8rem] h-[2.8rem]" />
        </button>
    );
}

const EventSlider = ({ title, events }: { title: string; events: any }) => {
    const { isLoading } = useAppSelector((state) => state.event);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 2000,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                },
            },
        ],
        customPaging: function (i: any) {
            return <div className="  "></div>;
        },
    };

    return (
        <div className="w-full pl-[8rem] xlg:pl-[5rem] xmd:pl-[3rem] smd:pl-0 pb-[10rem] smd:py-[8rem] sm:py-[6rem]">
            <div className="w-full flex justify-between items-center pr-[8rem] xlg:pr-[5rem] xmd:pr-[3rem] sm:pr-[2rem] py-[2.5rem]">
                <h3 className="text-[3rem] sm:text-[2.5rem] font-semibold uppercase smd:ml-[3rem] sm:ml-[2rem]">
                    {title}
                </h3>
                <button
                    type="button"
                    className="text-[rgba(34,34,34,0.8)] font-medium uppercase  hover:text-color-purple-1 transition-all duration-150 ease-in"
                >
                    View all
                </button>
            </div>
            <div className="smd:px-[3rem] sm:px-[2rem]">
                {isLoading ? (
                    <div className="pr-[5rem] sm:pr-0 grid grid-cols-event-cat-grid gap-[3rem]">
                        <div className="w-full ">
                            <EventSkeleton />
                        </div>
                        <div className="w-full ">
                            <EventSkeleton />
                        </div>
                        <div className="w-full ">
                            <EventSkeleton />
                        </div>
                    </div>
                ) : events.length === 0 ? (
                    <div className="w-full flex justify-center items-center">
                        <p>No events available</p>
                    </div>
                ) : (
                    <Slider {...settings}>
                        {events.map((eventItem: any) => (
                            <div key={eventItem} className="pr-[3rem] smd:pr-0">
                                <EventListItem event={eventItem} />
                            </div>
                        ))}

                        {events.length < 3 && (
                            <div className="w-[50rem] h-[40rem] pr-[3rem]">
                                <div className=" bg-color-white-1 w-full h-full"></div>
                            </div>
                        )}
                        {events.length < 2 && (
                            <div className="w-[50rem] h-[40rem] pr-[3rem]">
                                <div className=" bg-color-white-1 w-full h-full"></div>
                            </div>
                        )}
                    </Slider>
                )}
            </div>
        </div>
    );
};

export default EventSlider;
