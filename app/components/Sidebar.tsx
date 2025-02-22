"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@/app/styles/components/sidebar.module.scss";
import getUsers from "../services/getUsers";

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem("users")) {
            getUsers();
        }
    }, []);

    return (
        <>
            {/* Sidebar */}
            <div className={`${styles.sidebar} ${isOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                </ul>
            </div>

            {/* Hamburger Menu */}
            <div className="hamburguer">
                <Image
                    src="/assets/img/icons/hamburger-menu.webp"
                    width={40}
                    height={40}
                    alt="Hamburger Icon"
                />
            </div>
        </>
    );
};

export default Sidebar;
