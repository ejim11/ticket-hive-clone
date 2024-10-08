import type { Metadata } from "next";
import { Outfit, Nunito } from "next/font/google";
import "./globals.css";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReduxProviderWrapper from "@/components/ReduxProviderWrapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
    title: "Ticket Hive",
    description: "Get quick access to the latest shows",
};

const outfit: NextFontWithVariable = Outfit({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-outfit",
});

const nunito: NextFontWithVariable = Nunito({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-nunito",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${outfit.variable} ${nunito.variable} relative  bg-color-white-1`}
            >
                <ReduxProviderWrapper>
                    <Header />
                    {children}
                    <Footer />
                    <ToastContainer />
                </ReduxProviderWrapper>
            </body>
        </html>
    );
}
