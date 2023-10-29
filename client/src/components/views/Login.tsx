import { Avatar, Box } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react';
import AppLayout from '@/components/wrapper/AppLayout';


export const Login = () => {
    return (
        <AppLayout>
            <Box>
                <Heading as="h1">Login</Heading>

                <Avatar size="2xl" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas. Eaque, voluptatum. Quisquam, quas. Eaque, voluptatum.

                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas. Eaque, voluptatum. Quisquam, quas. Eaque, voluptatum.
                </Text>
                
            </Box>
        </AppLayout>
    )
}

export default Login;