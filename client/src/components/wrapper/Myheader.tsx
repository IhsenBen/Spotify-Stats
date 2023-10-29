import {
  Box,
  Button,
  FormControl,
  HStack,
  Link,
  Switch,
} from '@chakra-ui/react'
import React from 'react'

const MyHeader = () => {
  const [mode, setMode] = React.useState(false)

  const menu = [
    { name: 'Login', href: '/' },
    { name: 'About', href: '/about/' },
  ]

  return (
    <HStack justifyContent={'space-between'}>
      <Box fontSize={'4xl'} fontWeight={'bold'}>
        Site Logo
      </Box>
      <HStack justifyContent={'flex-end'}>
        {menu.map((i) => {
          return (
            <Link key={i.href} href={i.href}>
              <Button colorScheme={'teal'}>{i.name}</Button>
            </Link>
          )
        })}
        <FormControl ml={4}>
          <Switch
            colorScheme='teal'
            onChange={(e) => {
              setMode(e.target.checked)
            }}
          />
          {JSON.stringify({ mode })}
        </FormControl>
      </HStack>
    </HStack>
  )
}

export default MyHeader