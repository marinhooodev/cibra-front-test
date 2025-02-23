"use client";

import IUser from "@/app/@types/IUser";
import getUsers from "@/app/services/getUsers";
import { Avatar, Box, Card, Flex, Section, Text } from "@radix-ui/themes";
import { useRouter, useParams } from "next/navigation";
import React, { useEffect } from "react";
import { IoBusiness, IoLocation, IoMail } from "react-icons/io5";

const UserProfile: React.FC = () => {
    const router = useRouter();
    const params = useParams();
    const id = parseInt(params?.id as string, 10);

    useEffect(() => {
        if (isNaN(id)) {
            router.push("/404");
        }
    }, [id, router]);

    const localUsers = localStorage.getItem("users");

    if (!localUsers) {
        getUsers();
        window.location.reload();
        return;
    }

    const usersArray = JSON.parse(localUsers);

    const user: IUser = usersArray.find((user: IUser) => user.id == id);

    return (
        <Section>
            <Box width="300px" className="">
                <Card size="3" className="text-center bg-white">
                    <Flex
                        gap="4"
                        direction="column"
                        justify="center"
                        align="center"
                    >
                        <Avatar
                            size="5"
                            radius="full"
                            fallback={user.name.slice(0, 1)}
                            color="lime"
                        />
                        <Box>
                            <Text
                                as="div"
                                size="4"
                                weight="bold"
                                className="text-center"
                            >
                                
                                {user.name}
                            </Text>
                            <Text
                                as="div"
                                size="3"
                                color="gray"
                                className="text-center flex gap-2 justify-center items-center !mt-5"
                            >
                                <IoLocation className="text-2xl" />
                                {user.address.street}
                            </Text>
                            <Text
                                as="div"
                                size="3"
                                color="gray"
                                className="text-center flex gap-2 justify-center items-center !mt-5"
                            >
                                <IoBusiness className="text-2xl" />
                                {user.company.name}
                            </Text>
                            <Text
                                as="div"
                                size="3"
                                color="gray"
                                className="text-center flex gap-2 justify-center items-center !mt-5"
                            >
                                <IoMail className="text-2xl" />
                                {user.email}
                            </Text>
                        </Box>
                    </Flex>
                </Card>
            </Box>
        </Section>
    );
};

export default UserProfile;
