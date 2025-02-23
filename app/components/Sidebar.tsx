"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "@/app/styles/components/sidebar.module.scss";
import { IoAdd, IoClose, IoHome, IoTrash } from "react-icons/io5";
import Link from "next/link";

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Sidebar */}
            <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
                <div className={`${styles.content} `}>
                    <div className={`${styles.header} shadow-2xl`}>
                        <Image
                            src="/assets/img/cibra-logo.webp"
                            width={150}
                            height={60}
                            alt="Cibra Logo"
                        />
                        <div className="flex justify-center cursor-pointer">
                            <IoClose  className="text-4xl" onClick={() => {
                    setIsOpen(!isOpen);
                }} />
                        </div>
                    </div>
                    <div className={`${styles.menu} flex-1 flex justify-center`}>
                        <nav className="mt-10">
                            <ul>
                                <li>
                                    <IoHome className="text-4xl text-primary-400 mr-2" />
                                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                                </li>
                                <li>
                                    <IoAdd className="text-4xl text-primary-500 mr-2" />
                                    <Link href="/create-user" onClick={() => setIsOpen(false)}>Create Users</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={`${styles.footer}`}>
                        <p>&copy; 2021 Cibra - All rights reserved</p>
                    </div>
                </div>
            </div>

            {/* Hamburger Menu */}
            <div
                className="hamburguer cursor-pointer"
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
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
