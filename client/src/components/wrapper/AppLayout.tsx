import { Box, ChakraProvider, Container } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import MyHeader from './Myheader'

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
      <ChakraProvider>
        <Container minW={'container.xl'} p={8}>
          <MyHeader />
          <Box mt={4}>{children}</Box>
        </Container>
      </ChakraProvider>
  )
}
export default AppLayout