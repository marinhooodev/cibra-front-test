"use client";

import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import getUsers from "./services/getUsers";
import { Section } from "@radix-ui/themes";
import IUser from "./@types/IUser";
import deleteUser from "./services/deleteUser";

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const localUsers = localStorage.getItem("users");

        if (localUsers) {
            const usersArray: [] = JSON.parse(localUsers);
            console.log(usersArray);

            if (usersArray.length) {
                setUsers(usersArray);
                return;
            }
        }

        const fetchUsers = async () => {
            const data = await getUsers();

            if (!data.success) {
            }

            setUsers(data.users);
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id: number) => {
        const response = await deleteUser(id);

        if (response.success) {
            const updatedUsers = localStorage.getItem("users");

            if (updatedUsers) {
                setUsers(JSON.parse(updatedUsers));
                return;
            }
        }
    };

    return (
        <Section>
            {users?.map((user: IUser) => (
                <div key={user.id} className="m-5">
                    <UserCard
                        name={user.name}
                        company={user.company}
                        id={user.id}
                        onDeleteUser={handleDelete}
                    />
                </div>
            ))}
        </Section>
    );
}
