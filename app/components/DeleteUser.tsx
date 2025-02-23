"use client"

import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import React from "react";
import { IoTrash } from "react-icons/io5";

const DeleteUser = ({id, onDeleteUser}: {id: number, onDeleteUser: (id: number) => void}) => {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button variant="outline" color="red" className="cursor-pointer">
                    <IoTrash />
                    Delete
                </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content maxWidth="300px">
                <AlertDialog.Title>Delete User</AlertDialog.Title>
                <AlertDialog.Description size="2">
                   Are you sure? The user will be deleted permanently!
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                        <Button variant="soft" color="gray" className="cursor-pointer">
                            Cancel
                        </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                        <div className="cursor-pointer">
                            <Button variant="solid" color="red" className="!cursor-pointer" onClick={() => {
                                onDeleteUser(id)
                            }}>
                                Delete
                            </Button>
                        </div>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
};

export default DeleteUser;
