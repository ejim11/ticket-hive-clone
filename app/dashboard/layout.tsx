import DashboardHeader from "@/components/dashboard/DashboardHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ticket Hive | Dashboard",
    description: "Create and manage your events",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full flex h-screen">
            <DashboardHeader />
            {children}
        </div>
    );
}
