import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./styles/globals.css";
import "@radix-ui/themes/styles.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";

const dm_sans = DM_Sans({
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
        "1000",
    ],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cibra - Front-end Test",
    description: "Cibra - Front-end Test",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${dm_sans.className}`}>
                <Theme accentColor="lime" panelBackground="solid">
                    <div className={`${dm_sans.className} mx-auto min-h-screen flex flex-col bg-gray-100`}>
                        <AppHeader />
                        <main className="flex-1 mx-auto">
                            {children}
                        </main>
                        <AppFooter />
                    </div>
                    <Toaster />
                </Theme>
            </body>
        </html>
    );
}
