"use client";

import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import getUsers from "./services/getUsers";
import { Button, Flex, Section } from "@radix-ui/themes";
import IUser from "./@types/IUser";
import deleteUser from "./services/deleteUser";
import SearchBar from "./components/SearchBar";
import toast from "react-hot-toast";

export default function Home() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const localUsers = localStorage.getItem("users");

        if (localUsers) {
            const usersArray: IUser[] = JSON.parse(localUsers);
            if (usersArray.length) {
                setUsers(usersArray);
                setFilteredUsers(usersArray);
                return;
            }
        }

        const fetchUsers = async () => {
            const data = await getUsers();
            if (!data.success) {
               toast.error(data.err as string)
                return
            }
            setUsers(data.users);
            setFilteredUsers(data.users);
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id: number) => {
        const response = await deleteUser(id);

        if (response.success) {
            const updatedUsers = localStorage.getItem("users");

            if (updatedUsers) {
                const newUsers = JSON.parse(updatedUsers);
                setUsers(newUsers);
                setFilteredUsers(newUsers);
                return toast.success("User successfuly deleted!");
            }
        }
    };

    const handleSearch = (query: string) => {
        const lowercasedQuery = query.toLowerCase();
        const filtered = users.filter((user) =>
            user.name.toLowerCase().includes(lowercasedQuery)
        );
        setFilteredUsers(filtered);
    };

    return (
        <Section className="mx-auto">
            <h1 className="text-center text-4xl font-semibold mb-10">Cibra Front-end Test - Users</h1>
            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} />

            {/* Users Cards */}
            <div className="flex flex-wrap justify-center items-stretch max-w-2xl">
                {filteredUsers.map((user) => (
                    <div key={user.id} className="m-5 flex flex-col justify-center items-stretch">
                        <UserCard
                            name={user.name}
                            company={user.company}
                            id={user.id}
                            onDeleteUser={handleDelete}
                        />
                    </div>
                ))}
            </div>

            {/* Handle Empty Users */}
            {!filteredUsers.length && (
                <Flex
                    gap="3"
                    justify="center"
                    direction="column"
                    align="center"
                >
                    <p className="p-3 text-center">No users found! Try another search or reload the page.</p>
                    <Button
                        variant="classic"
                        onClick={() => {
                            window.location.reload();
                        }}
                        className="cursor-pointer"
                    >
                        Reload Page
                    </Button>
                </Flex>
            )}
        </Section>
    );
}
