import {
    Avatar,
    Box,
    Button,
    Card,
    Flex,
    Text,
} from "@radix-ui/themes";
import React from "react";
import DeleteUser from "./DeleteUser";

interface UserCardProps {
    userFirstNameLetter: string;
    userCompanyName: string;
}

const UserCard: React.FC<UserCardProps> = ({
    userFirstNameLetter,
    userCompanyName,
}) => {
    return (
        <Box maxWidth="300px">
            <Card className="w-64 shadow-xl">
                <Flex gap="3" align="center">
                    <Avatar
                        size="3"
                        src=""
                        radius="full"
                        fallback={userFirstNameLetter}
                    />
                    <Box>
                        <Text as="div" size="2" weight="bold">
                            Teodros Girmay
                        </Text>
                        <Text as="div" size="2" color="gray">
                            <b>Company: </b> {userCompanyName}
                        </Text>
                    </Box>
                </Flex>
                <Flex gap="3" justify="between" className="mt-5">
                    <Button>View Profile</Button>
                    <DeleteUser />
                </Flex>
            </Card>
        </Box>
    );
};

export default UserCard;
