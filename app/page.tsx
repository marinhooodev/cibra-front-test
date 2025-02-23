"use client";

import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import getUsers from "./services/getUsers";
import { Button, Flex, Section } from "@radix-ui/themes";
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
            return
        }
    };

    return (
        <Section className="mx-auto">
            {/* Users Cards */}
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
           
           {/* Handle Empty Users */}
           {!users.length && <Flex gap="3" justify="center" direction="column" align="center"> 
                <p>No users found! Reload the page to get users</p>
                <Button variant="classic" onClick={() => {
                    window.location.reload()
                }}>
                    Reload Page
                </Button>
            </Flex> }
        </Section>
    );
}
