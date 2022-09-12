import { NextPage } from "next";
import {
  Box, Button, Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading, HStack, Icon, IconButton, Input, InputGroup, InputLeftElement, InputRightElement,
  Stack,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { GiMeshNetwork } from 'react-icons/gi'
import { FaEye, FaEyeSlash, FaLock, FaMoon, FaUser } from 'react-icons/fa'
import React from 'react'

const Login: NextPage = () => {
  const { toggleColorMode } = useColorMode()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Container py='24' px='16'>
      <Stack spacing='8'>
        <Stack align='center'>
          <Icon as={ GiMeshNetwork } boxSize='512px' color='blue.400'/>
          <Heading size='3xl'>Mesh</Heading>
        </Stack>
        <Box py='8' px='10' boxShadow={ useColorModeValue('md', 'md-dark') } borderRadius='xl'>
          <Stack spacing='8'>
            <Stack>
              <FormControl>
                <FormLabel htmlFor='username'>Username</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <Icon as={ FaUser } color='gray.400'/>
                  </InputLeftElement>
                  <Input id='username' type='username'/>
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <Icon as={ FaLock } color='gray.400'/>
                  </InputLeftElement>
                  <Input id='password' type={ show ? 'text' : 'password' }/>
                  <InputRightElement>
                    <IconButton variant='link' color='gray.400' aria-label='Mask password' icon={ show ? <FaEyeSlash/> : <FaEye/> } onClick={ handleClick }/>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Stack>
            <HStack direction='row' justify='space-between'>
              <Checkbox>Remember Me</Checkbox>
              <IconButton aria-label='Change color mode' color='gray.400' icon={ <FaMoon /> } onClick={ toggleColorMode }/>
            </HStack>
            <Button colorScheme='blue'>Login</Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

export default Login
