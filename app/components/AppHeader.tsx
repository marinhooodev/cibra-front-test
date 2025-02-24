import Image from "next/image";
import React from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";

const AppHeader: React.FC = () => {
    return (
        <header className="w-full shadow-2xl p-3 bg-white">
            <div className="w-full flex justify-around items-center">
                <Link href="/" className="!cursor-pointer">
                    <Image
                        src="/assets/img/cibra-logo.webp"
                        width={150}
                        height={60}
                        alt="Cibra Logo"
                    />
                </Link>
                <Sidebar />
            </div>
        </header>
    );
};

export default AppHeader;
