import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./styles/globals.css";
import "@radix-ui/themes/styles.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import { Theme } from "@radix-ui/themes";

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
                <Theme accentColor="lime" >
                    <div className="mx-auto min-h-screen flex flex-col">
                        <AppHeader />
                        <main className="flex-1 mx-auto">{children}</main>
                        <AppFooter />
                    </div>
                </Theme>
            </body>
        </html>
    );
}
