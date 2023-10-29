import { Box } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react';
import AppLayout from '@/components/wrapper/AppLayout';


export const AboutPage = () => {
    return (
        <AppLayout>
            <Box>
                <Heading as="h1">About</Heading>

                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas. Eaque, voluptatum. Quisquam, quas. Eaque, voluptatum.
                </Text>
                
            </Box>
        </AppLayout>
    )
}

export default AboutPage;