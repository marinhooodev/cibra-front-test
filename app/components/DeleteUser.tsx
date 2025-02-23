import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import React from 'react'
import { IoTrash } from 'react-icons/io5'

const DeleteUser = () => {
  return (
    <AlertDialog.Root>
                        <AlertDialog.Trigger>
                            <Button variant="outline" color="red">
                                <IoTrash />
                                Delete
                            </Button>
                        </AlertDialog.Trigger>
                        <AlertDialog.Content maxWidth="300px">
                            <AlertDialog.Title>Revoke access</AlertDialog.Title>
                            <AlertDialog.Description size="2">
                                Are you sure? This application will no longer be
                                accessible and any existing sessions will be
                                expired.
                            </AlertDialog.Description>

                            <Flex gap="3" mt="4" justify="end">
                                <AlertDialog.Cancel>
                                    <Button variant="soft" color="gray">
                                        Cancel
                                    </Button>
                                </AlertDialog.Cancel>
                                <AlertDialog.Action>
                                    <Button variant="solid" color="red">
                                        Revoke access
                                    </Button>
                                </AlertDialog.Action>
                            </Flex>
                        </AlertDialog.Content>
                    </AlertDialog.Root>
  )
}

export default DeleteUser