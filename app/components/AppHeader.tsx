import Image from "next/image";
import React from "react";
import Sidebar from "./Sidebar";

const AppHeader: React.FC = () => {
    return (
        <header className="w-full shadow-2xl p-3 bg-white">
            <div className="w-full flex justify-around items-center">
                <Image
                    src="/assets/img/cibra-logo.webp"
                    width={150}
                    height={60}
                    alt="Cibra Logo"
                />
                <Sidebar />
            </div>
        </header>
    );
};

export default AppHeader;
