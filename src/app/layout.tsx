import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "@/app/globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import {ReactNode} from "react";

const geistSans = Geist({ subsets:["latin"], variable:"--font-geist-sans" });
const geistMono = Geist_Mono({ subsets:["latin"], variable:"--font-geist-mono" });

export const metadata: Metadata = {
    title: "Tiago Ferraz – Portfolio",
    description: "Junior Java Developer · Software Engineering Student @ ISEP",
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="pt" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* mobile topbar */}
        <Topbar className="lg:hidden sticky top-0 z-50" />
        <div id="theme-overlay" />

        <div className="lg:grid lg:grid-cols-[300px_1fr] min-h-screen">
            {/* sidebar fixa (>= lg) */}
            <aside className="hidden lg:block sticky top-0 h-screen border-r border-black/10 dark:border-white/10">
                <Sidebar />
            </aside>

            {/* conteúdo */}
            <main className="min-h-screen pb-16">
                <div className="container-xxl pt-8 lg:pt-14">
                    {children}
                </div>
            </main>
        </div>
        </body>
        </html>
    );
}
