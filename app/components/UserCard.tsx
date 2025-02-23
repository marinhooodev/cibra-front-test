import { Avatar, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import React from "react";
import DeleteUser from "./DeleteUser";
import IUser from "../@types/IUser";
import Link from "next/link";

const UserCard: React.FC<Partial<IUser> & {onDeleteUser: (id: number) => void}> = ({ name, company, id, onDeleteUser }) => {
    return (
        <Box maxWidth="300px">
            <Card className="w-64 shadow-xl">
                <Flex gap="3" align="center">
                    <Avatar
                        size="3"
                        src=""
                        radius="full"
                        fallback={name?.slice(0, 1) as string}
                    />
                    <Box>
                        <Text as="div" size="2" weight="bold">
                            {name}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            <b>Company: </b> {company?.name}
                        </Text>
                    </Box>
                </Flex>
                <Flex gap="3" justify="between" className="mt-5">
                    <Button><Link href={`/user/${id}`}>View Profile</Link></Button>
                    <DeleteUser id={id as number} onDeleteUser={onDeleteUser} />
                </Flex>
            </Card>
        </Box>
    );
};

export default UserCard;
