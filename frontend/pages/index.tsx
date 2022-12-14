import type { NextPage } from 'next'
import {
  Box, Button, Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading, HStack, IconButton, Input,
  InputGroup,
  InputLeftElement, InputRightElement,
  Stack, useColorMode, useColorModeValue
} from '@chakra-ui/react'
import { GiMeshNetwork } from 'react-icons/gi'
import { FaEye, FaLock, FaMoon, FaUser } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Container maxW='lg' py='24' px='8'>
      <Stack textAlign='center' spacing='8'>
        <Stack>
          <IconContext.Provider value={{ color: '#61DAFB', size: 'md' }}>
            <GiMeshNetwork/>
          </IconContext.Provider>
          <Heading size='3xl'>Mesh</Heading>
        </Stack>
        <Box py='8' px='10' bg='bg-surface' boxShadow={ useColorModeValue('md', 'md-dark') } borderRadius='xl'>
          <Stack spacing='8'>
            <Stack>
              <FormControl>
                <FormLabel htmlFor='username'>Username</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <FaUser color='#A0AEC0'/>
                  </InputLeftElement>
                  <Input id='username' type='username'/>
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <FaLock color='#A0AEC0'/>
                  </InputLeftElement>
                  <Input id='password' type='password'/>
                  <InputRightElement>
                    <IconButton variant='link' aria-label='Mask password' icon={ <FaEye color='#A0AEC0'/> }/>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Stack>
            <HStack direction='row' justify='space-between'>
              <Checkbox>Remember Me</Checkbox>
              <IconButton aria-label='Change color mode' icon={ <FaMoon color='#A0AEC0'/> } onClick={ toggleColorMode }/>
            </HStack>
            <Button colorScheme='blue'>Login</Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

export default Home
