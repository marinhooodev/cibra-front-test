import { Avatar, Box, Button, Card, Flex, Text } from '@radix-ui/themes'
import React, { ReactNode } from 'react'

interface UserCardProps {
    userFirstNameLetter: string
}

const UserCard: React.FC<UserCardProps> = ({userFirstNameLetter,}) => {
  return (

<Box maxWidth="240px">
	<Card>
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
					Engineering
				</Text>
			</Box>
		</Flex>
        <Flex gap="3" className='mt-5'>
            <Button >Ver perfil</Button>
        </Flex>
	</Card>
</Box>

  )
}

export default UserCard