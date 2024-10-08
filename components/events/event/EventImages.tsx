import { StaticImageData } from "next/image";
import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderBtnClassnName =
    "bg-color-grey-1 flex items-center top-[50%]  justify-center w-[7rem] h-[7rem] rounded-full absolute  z-20     hover:bg-color-black-1 transition-all duration-150 ease-in";

function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <button
            // className={className}
            // style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
            className={`${sliderBtnClassnName} right-[0rem]`}
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

const EventImages = ({
    images,
    title,
}: {
    images: StaticImageData[];
    title: string;
}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,

        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        customPaging: function (i: any) {
            return <div className="  "></div>;
        },
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                },
            },
        ],
    };

    return (
        <div className="w-full my-[2rem]">
            <Slider {...settings}>
                {images.map((img: StaticImageData, i: number) => (
                    <div
                        key={i}
                        className="w-[70rem] h-[70rem] px-[3rem] xlg:px-[1.5rem] xmd:px-0 xmd:w-full xmd:h-[50rem]"
                    >
                        <Image
                            src={img}
                            alt={`${title} images`}
                            priority
                            width={500}
                            height={500}
                            className="w-full h-full"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default EventImages;
