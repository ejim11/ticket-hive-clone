"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import EventListItem from "../EventListItem";
import SectionCover from "../SectionCover";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { eventsList } from "../utils/data";

const sliderBtnClassnName =
    "bg-color-grey-1 flex items-center top-[50%]  justify-center w-[7rem] h-[7rem] rounded-full absolute  z-20     hover:bg-color-black-1  transition-all duration-150 ease-in";

function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <button
            // className={className}
            // style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
            className={`${sliderBtnClassnName} right-[8rem]`}
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

const EventSlider = ({ title }: { title: string }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,

        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        customPaging: function (i: any) {
            return <div className="  "></div>;
        },
    };
    return (
        <div className="w-full pl-[8rem] pb-[10rem]">
            <div className="w-full flex justify-between items-center pr-[8rem] py-[2.5rem]">
                <h3 className="text-[3rem] font-semibold uppercase">{title}</h3>
                <button
                    type="button"
                    className="text-[rgba(34,34,34,0.8)] font-medium uppercase  hover:text-color-purple-1 transition-all duration-150 ease-in"
                >
                    View all
                </button>
            </div>
            <div>
                <Slider {...settings}>
                    {eventsList.map((eventItem: any) => (
                        <div key={eventItem} className="pr-[3rem]">
                            <EventListItem item={eventItem} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default EventSlider;
