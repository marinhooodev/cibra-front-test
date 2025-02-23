"use client";

import { useState } from "react";
import { Flex, TextField } from "@radix-ui/themes";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [query, setQuery] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <div className="mb-4">
            <Flex justify="center" align="stretch">
                <div className="p-2 border-1 border-r-0 border-gray-300 flex justify-center items-center rounded-ss-xl rounded-es-xl">
                    <IoSearch className="text-2xl" />
                </div>
                <input
                    placeholder="Search users..."
                    value={query}
                    onChange={handleChange}
                    className="border-1 border-l-0 border-gray-300 rounded-se-xl rounded-ee-xl px-2 py-1"
                />
            </Flex>
        </div>
    );
}
