import { StaticImageData } from "next/image";
import eventCatImg1 from "../../assets/home/event-cat-1.png";
import eventCatImg2 from "../../assets/home/event-cat-2.png";
import eventCatImg3 from "../../assets/home/event-cat-3.png";
import eventCatImg4 from "../../assets/home/event-cat-4.png";
import eventCatImg5 from "../../assets/home/event-cat-5.png";
import eventCatImg6 from "../../assets/home/event-cat-6.png";
import eventCatImg7 from "../../assets/home/event-cat-7.png";
import eventCatImg8 from "../../assets/home/event-cat-8.png";
import eventImg1 from "../../assets/events/event-1.svg";
import eventImg2 from "../../assets/events/event-2.png";
import eventImg3 from "../../assets/events/event-3.png";
import eventImg4 from "../../assets/events/event-4.png";
import eventImg5 from "../../assets/events/event-5.png";
import eventImg6 from "../../assets/events/event-6.png";
import eventImg7 from "../../assets/events/event-7.png";
import eventImg8 from "../../assets/events/event-8.png";
import eventImg9 from "../../assets/events/event-9.png";
import eventImg10 from "../../assets/events/event-10.png";
import eventImg11 from "../../assets/events/event-11.png";
import eventImg12 from "../../assets/events/event-12.png";
import whyTicketHiveImg1 from "../../assets/home/why-ticket-hive-1.svg";
import whyTicketHiveImg2 from "../../assets/home/why-ticket-hive-2.svg";
import whyTicketHiveImg3 from "../../assets/home/why-ticket-hive-3.svg";
import moreImg1 from "../../assets/image 45.png";
import moreImg2 from "../../assets/image 46.png";

export type EventCategory = {
    title: string;
    image: StaticImageData;
};

export const eventCategories: EventCategory[] = [
    {
        title: "Music",
        image: eventCatImg1,
    },
    {
        title: "conference",
        image: eventCatImg2,
    },
    {
        title: "festivals",
        image: eventCatImg3,
    },
    {
        title: "parties",
        image: eventCatImg4,
    },
    {
        title: "exhibitions",
        image: eventCatImg5,
    },
    {
        title: "theater",
        image: eventCatImg6,
    },
    {
        title: "classes",
        image: eventCatImg7,
    },
    {
        title: "sports",
        image: eventCatImg8,
    },
];

export type EventItem = {
    image: StaticImageData;
    title: string;
    location: string;
    date: string;
    price: string | number;
};

export const eventsList = [
    {
        id: 1,
        image: eventImg1,
        title: "Lagos International Finance Expo 2024",
        summary:
            "Lagos Leather Fair is an annual showcase of Africa’s Leather Industry with this year's theme - “Levelling Up”.",
        location: {
            venue: "Federal Palace Hotel and Casino",
            address: "6-8 Ahmadu Bello Way Lagos, LA 106104",
        },
        dateAndTime: {
            date: "Saturday, June 29, 2024",
            time: "9:00 AM - 6:00 PM",
        },
        description:
            "In its seventh instalment, the fair will gather leather enthusiasts, designers, manufacturers, suppliers, and industry partners from across the globe to deliver a carefully curated experience that spotlights the diversity of African culture, creativity, and craftsmanship. Alongside its partners and sponsors, this year’s LLF will engage attendees with conversations and initiatives that aim to advance the leather ecosystem. These include improving socioeconomic impact, adopting sustainable and innovative practices, enhancing industry competition and global partnerships, and improving supply chain efficiency within the industry. Welcoming over 3,500 attendees in its previous edition, each year, LLF creates a unique and dynamic experience that showcases the talent of leather creatives, and diverse forms of African leather products.",
        moreImages: [moreImg1, moreImg2],
        price: 6000,
    },
    {
        id: 2,
        image: eventImg2,
        title: "Lagos Leather Fair 2024",
        summary:
            "Lagos Leather Fair is an annual showcase of Africa’s Leather Industry with this year's theme - “Levelling Up”.",
        location: {
            venue: "Federal Palace Hotel and Casino",
            address: "6-8 Ahmadu Bello Way Lagos, LA 106104",
        },
        dateAndTime: {
            date: "Saturday, June 29, 2024",
            time: "9:00 AM - 6:00 PM",
        },
        description:
            "In its seventh instalment, the fair will gather leather enthusiasts, designers, manufacturers, suppliers, and industry partners from across the globe to deliver a carefully curated experience that spotlights the diversity of African culture, creativity, and craftsmanship. Alongside its partners and sponsors, this year’s LLF will engage attendees with conversations and initiatives that aim to advance the leather ecosystem. These include improving socioeconomic impact, adopting sustainable and innovative practices, enhancing industry competition and global partnerships, and improving supply chain efficiency within the industry. Welcoming over 3,500 attendees in its previous edition, each year, LLF creates a unique and dynamic experience that showcases the talent of leather creatives, and diverse forms of African leather products.",
        moreImages: [moreImg1, moreImg2],
        price: 6000,
    },
    {
        id: 3,
        image: eventImg3,
        title: "Lagos Leather Fair 2024",
        summary:
            "Lagos Leather Fair is an annual showcase of Africa’s Leather Industry with this year's theme - “Levelling Up”.",
        location: {
            venue: "Federal Palace Hotel and Casino",
            address: "6-8 Ahmadu Bello Way Lagos, LA 106104",
        },
        dateAndTime: {
            date: "Saturday, June 29, 2024",
            time: "9:00 AM - 6:00 PM",
        },
        description:
            "In its seventh instalment, the fair will gather leather enthusiasts, designers, manufacturers, suppliers, and industry partners from across the globe to deliver a carefully curated experience that spotlights the diversity of African culture, creativity, and craftsmanship. Alongside its partners and sponsors, this year’s LLF will engage attendees with conversations and initiatives that aim to advance the leather ecosystem. These include improving socioeconomic impact, adopting sustainable and innovative practices, enhancing industry competition and global partnerships, and improving supply chain efficiency within the industry. Welcoming over 3,500 attendees in its previous edition, each year, LLF creates a unique and dynamic experience that showcases the talent of leather creatives, and diverse forms of African leather products.",
        moreImages: [moreImg1, moreImg2, moreImg1, moreImg2],
        price: 0,
    },
    {
        id: 4,
        image: eventImg4,
        title: "Lagos Leather Fair 2024",
        summary:
            "Lagos Leather Fair is an annual showcase of Africa’s Leather Industry with this year's theme - “Levelling Up”.",
        location: {
            venue: "Federal Palace Hotel and Casino",
            address: "6-8 Ahmadu Bello Way Lagos, LA 106104",
        },
        dateAndTime: {
            date: "Saturday, June 29, 2024",
            time: "9:00 AM - 6:00 PM",
        },
        description:
            "In its seventh instalment, the fair will gather leather enthusiasts, designers, manufacturers, suppliers, and industry partners from across the globe to deliver a carefully curated experience that spotlights the diversity of African culture, creativity, and craftsmanship. Alongside its partners and sponsors, this year’s LLF will engage attendees with conversations and initiatives that aim to advance the leather ecosystem. These include improving socioeconomic impact, adopting sustainable and innovative practices, enhancing industry competition and global partnerships, and improving supply chain efficiency within the industry. Welcoming over 3,500 attendees in its previous edition, each year, LLF creates a unique and dynamic experience that showcases the talent of leather creatives, and diverse forms of African leather products.",
        moreImages: [moreImg1, moreImg2, moreImg1, moreImg2],
        price: 6000,
    },
    {
        id: 5,
        image: eventImg5,
        title: "Lagos Leather Fair 2024",
        summary:
            "Lagos Leather Fair is an annual showcase of Africa’s Leather Industry with this year's theme - “Levelling Up”.",
        location: {
            venue: "Federal Palace Hotel and Casino",
            address: "6-8 Ahmadu Bello Way Lagos, LA 106104",
        },
        dateAndTime: {
            date: "Saturday, June 29, 2024",
            time: "9:00 AM - 6:00 PM",
        },
        description:
            "In its seventh instalment, the fair will gather leather enthusiasts, designers, manufacturers, suppliers, and industry partners from across the globe to deliver a carefully curated experience that spotlights the diversity of African culture, creativity, and craftsmanship. Alongside its partners and sponsors, this year’s LLF will engage attendees with conversations and initiatives that aim to advance the leather ecosystem. These include improving socioeconomic impact, adopting sustainable and innovative practices, enhancing industry competition and global partnerships, and improving supply chain efficiency within the industry. Welcoming over 3,500 attendees in its previous edition, each year, LLF creates a unique and dynamic experience that showcases the talent of leather creatives, and diverse forms of African leather products.",
        moreImages: [moreImg1, moreImg2, moreImg1, moreImg2],
        price: 0,
    },
    {
        id: 6,
        image: eventImg6,
        title: "Lagos Leather Fair 2024",
        summary:
            "Lagos Leather Fair is an annual showcase of Africa’s Leather Industry with this year's theme - “Levelling Up”.",
        location: {
            venue: "Federal Palace Hotel and Casino",
            address: "6-8 Ahmadu Bello Way Lagos, LA 106104",
        },
        dateAndTime: {
            date: "Saturday, June 29, 2024",
            time: "9:00 AM - 6:00 PM",
        },
        description:
            "In its seventh instalment, the fair will gather leather enthusiasts, designers, manufacturers, suppliers, and industry partners from across the globe to deliver a carefully curated experience that spotlights the diversity of African culture, creativity, and craftsmanship. Alongside its partners and sponsors, this year’s LLF will engage attendees with conversations and initiatives that aim to advance the leather ecosystem. These include improving socioeconomic impact, adopting sustainable and innovative practices, enhancing industry competition and global partnerships, and improving supply chain efficiency within the industry. Welcoming over 3,500 attendees in its previous edition, each year, LLF creates a unique and dynamic experience that showcases the talent of leather creatives, and diverse forms of African leather products.",
        moreImages: [moreImg1, moreImg2, moreImg1, moreImg2],
        price: 6000,
    },
    {
        id: 7,
        image: eventImg7,
        title: "Lagos Leather Fair 2024",
        summary:
            "Lagos Leather Fair is an annual showcase of Africa’s Leather Industry with this year's theme - “Levelling Up”.",
        location: {
            venue: "Federal Palace Hotel and Casino",
            address: "6-8 Ahmadu Bello Way Lagos, LA 106104",
        },
        dateAndTime: {
            date: "Saturday, June 29, 2024",
            time: "9:00 AM - 6:00 PM",
        },
        description:
            "In its seventh instalment, the fair will gather leather enthusiasts, designers, manufacturers, suppliers, and industry partners from across the globe to deliver a carefully curated experience that spotlights the diversity of African culture, creativity, and craftsmanship. Alongside its partners and sponsors, this year’s LLF will engage attendees with conversations and initiatives that aim to advance the leather ecosystem. These include improving socioeconomic impact, adopting sustainable and innovative practices, enhancing industry competition and global partnerships, and improving supply chain efficiency within the industry. Welcoming over 3,500 attendees in its previous edition, each year, LLF creates a unique and dynamic experience that showcases the talent of leather creatives, and diverse forms of African leather products.",
        moreImages: [moreImg1, moreImg2, moreImg1, moreImg2],
        price: 0,
    },
    {
        id: 8,
        image: eventImg8,
        title: "Lagos Leather Fair 2024",
        summary:
            "Lagos Leather Fair is an annual showcase of Africa’s Leather Industry with this year's theme - “Levelling Up”.",
        location: {
            venue: "Federal Palace Hotel and Casino",
            address: "6-8 Ahmadu Bello Way Lagos, LA 106104",
        },
        dateAndTime: {
            date: "Saturday, June 29, 2024",
            time: "9:00 AM - 6:00 PM",
        },
        description:
            "In its seventh instalment, the fair will gather leather enthusiasts, designers, manufacturers, suppliers, and industry partners from across the globe to deliver a carefully curated experience that spotlights the diversity of African culture, creativity, and craftsmanship. Alongside its partners and sponsors, this year’s LLF will engage attendees with conversations and initiatives that aim to advance the leather ecosystem. These include improving socioeconomic impact, adopting sustainable and innovative practices, enhancing industry competition and global partnerships, and improving supply chain efficiency within the industry. Welcoming over 3,500 attendees in its previous edition, each year, LLF creates a unique and dynamic experience that showcases the talent of leather creatives, and diverse forms of African leather products.",
        moreImages: [moreImg1, moreImg2, moreImg1, moreImg2],
        price: 6000,
    },
    {
        id: 9,
        image: eventImg9,
        title: "Lagos Leather Fair 2024",
        summary:
            "Lagos Leather Fair is an annual showcase of Africa’s Leather Industry with this year's theme - “Levelling Up”.",
        location: {
            venue: "Federal Palace Hotel and Casino",
            address: "6-8 Ahmadu Bello Way Lagos, LA 106104",
        },
        dateAndTime: {
            date: "Saturday, June 29, 2024",
            time: "9:00 AM - 6:00 PM",
        },
        description:
            "In its seventh instalment, the fair will gather leather enthusiasts, designers, manufacturers, suppliers, and industry partners from across the globe to deliver a carefully curated experience that spotlights the diversity of African culture, creativity, and craftsmanship. Alongside its partners and sponsors, this year’s LLF will engage attendees with conversations and initiatives that aim to advance the leather ecosystem. These include improving socioeconomic impact, adopting sustainable and innovative practices, enhancing industry competition and global partnerships, and improving supply chain efficiency within the industry. Welcoming over 3,500 attendees in its previous edition, each year, LLF creates a unique and dynamic experience that showcases the talent of leather creatives, and diverse forms of African leather products.",
        moreImages: [moreImg1, moreImg2, moreImg1, moreImg2],
        price: 6000,
    },
    {
        id: 10,
        image: eventImg10,
        title: "Lagos Leather Fair 2024",
        summary:
            "Lagos Leather Fair is an annual showcase of Africa’s Leather Industry with this year's theme - “Levelling Up”.",
        location: {
            venue: "Federal Palace Hotel and Casino",
            address: "6-8 Ahmadu Bello Way Lagos, LA 106104",
        },
        dateAndTime: {
            date: "Saturday, June 29, 2024",
            time: "9:00 AM - 6:00 PM",
        },
        description:
            "In its seventh instalment, the fair will gather leather enthusiasts, designers, manufacturers, suppliers, and industry partners from across the globe to deliver a carefully curated experience that spotlights the diversity of African culture, creativity, and craftsmanship. Alongside its partners and sponsors, this year’s LLF will engage attendees with conversations and initiatives that aim to advance the leather ecosystem. These include improving socioeconomic impact, adopting sustainable and innovative practices, enhancing industry competition and global partnerships, and improving supply chain efficiency within the industry. Welcoming over 3,500 attendees in its previous edition, each year, LLF creates a unique and dynamic experience that showcases the talent of leather creatives, and diverse forms of African leather products.",
        moreImages: [moreImg1, moreImg2, moreImg1, moreImg2],
        price: 6000,
    },
    {
        id: 11,
        image: eventImg11,
        title: "Lagos Leather Fair 2024",
        summary:
            "Lagos Leather Fair is an annual showcase of Africa’s Leather Industry with this year's theme - “Levelling Up”.",
        location: {
            venue: "Federal Palace Hotel and Casino",
            address: "6-8 Ahmadu Bello Way Lagos, LA 106104",
        },
        dateAndTime: {
            date: "Saturday, June 29, 2024",
            time: "9:00 AM - 6:00 PM",
        },
        description:
            "In its seventh instalment, the fair will gather leather enthusiasts, designers, manufacturers, suppliers, and industry partners from across the globe to deliver a carefully curated experience that spotlights the diversity of African culture, creativity, and craftsmanship. Alongside its partners and sponsors, this year’s LLF will engage attendees with conversations and initiatives that aim to advance the leather ecosystem. These include improving socioeconomic impact, adopting sustainable and innovative practices, enhancing industry competition and global partnerships, and improving supply chain efficiency within the industry. Welcoming over 3,500 attendees in its previous edition, each year, LLF creates a unique and dynamic experience that showcases the talent of leather creatives, and diverse forms of African leather products.",
        moreImages: [moreImg1, moreImg2, moreImg1, moreImg2],
        price: 6000,
    },
    {
        id: 12,
        image: eventImg12,
        title: "Lagos Leather Fair 2024",
        summary:
            "Lagos Leather Fair is an annual showcase of Africa’s Leather Industry with this year's theme - “Levelling Up”.",
        location: {
            venue: "Federal Palace Hotel and Casino",
            address: "6-8 Ahmadu Bello Way Lagos, LA 106104",
        },
        dateAndTime: {
            date: "Saturday, June 29, 2024",
            time: "9:00 AM - 6:00 PM",
        },
        description:
            "In its seventh instalment, the fair will gather leather enthusiasts, designers, manufacturers, suppliers, and industry partners from across the globe to deliver a carefully curated experience that spotlights the diversity of African culture, creativity, and craftsmanship. Alongside its partners and sponsors, this year’s LLF will engage attendees with conversations and initiatives that aim to advance the leather ecosystem. These include improving socioeconomic impact, adopting sustainable and innovative practices, enhancing industry competition and global partnerships, and improving supply chain efficiency within the industry. Welcoming over 3,500 attendees in its previous edition, each year, LLF creates a unique and dynamic experience that showcases the talent of leather creatives, and diverse forms of African leather products.",
        moreImages: [moreImg1, moreImg2, moreImg1, moreImg2],
        price: 0,
    },
];

export type whyTicketHiveType = {
    image: StaticImageData;
    title: string;
    text: string;
    bgColor: string;
};

export const whyTicketHive: whyTicketHiveType[] = [
    {
        image: whyTicketHiveImg1,
        title: "Seamless Ticket Purchasing",
        text: "Enjoy a quick and secure ticket purchasing experience. With our user-friendly platform, finding and buying tickets to your favorite events is a breeze. ",
        bgColor: "bg-[rgba(131,66,255,1)]",
    },
    {
        image: whyTicketHiveImg2,
        title: "Effortless Event Creation",
        text: "Bring your event ideas to life with ease. Our intuitive tools and comprehensive management features simplify the entire process, from setup to ticket sales tracking. ",
        bgColor: "bg-[rgba(162,113,255,1)]",
    },
    {
        image: whyTicketHiveImg3,
        title: "Stay Connected and Informed",
        text: "With our robust email marketing list, you'll receive timely updates on new events, exclusive deals, and personalized recommendations, ensuring you never miss out on an amazing experience.",
        bgColor: "bg-[rgba(197,167,255,1)]",
    },
];

export const footerLinks = [
    {
        title: "company",
        links: [
            {
                title: "create events",
                link: "",
            },
            {
                title: "get tickets",
                link: "",
            },
            {
                title: "about",
                link: "/about-us",
            },
        ],
    },
    {
        title: "policies",
        links: [
            {
                title: "refund policies",
                link: "",
            },
            {
                title: "privacy policies",
                link: "",
            },
            {
                title: "terms and conditions",
                link: "",
            },
        ],
    },
];
