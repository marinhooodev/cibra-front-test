"use client";

import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import getUsers from "./services/getUsers";
import { Button, Flex, Section } from "@radix-ui/themes";
import IUser from "./@types/IUser";
import deleteUser from "./services/deleteUser";
import SearchBar from "./components/SearchBar";

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
            if (data.success) {
                setUsers(data.users);
                setFilteredUsers(data.users);
            }
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
                return;
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
            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} />

            {/* Users Cards */}
            {filteredUsers.map((user) => (
                <div key={user.id} className="m-5">
                    <UserCard
                        name={user.name}
                        company={user.company}
                        id={user.id}
                        onDeleteUser={handleDelete}
                    />
                </div>
            ))}

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
                    >
                        Reload Page
                    </Button>
                </Flex>
            )}
        </Section>
    );
}
