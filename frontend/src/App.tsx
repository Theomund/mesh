import React from 'react';
import logo from './logo.svg';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue
} from "@chakra-ui/react";

function App() {
    return (
        <Container maxW="lg" py="24" px="8">
            <Stack textAlign="center" spacing="8">
                <Stack>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Heading>Mesh</Heading>
                </Stack>
                <Box
                    py="8"
                    px="10"
                    bg="bg-surface"
                    boxShadow={useColorModeValue('md', 'md-dark')}
                    borderRadius="xl"
                >
                    <Stack spacing="8">
                        <Stack>
                            <FormControl>
                                <FormLabel htmlFor="username">Username</FormLabel>
                                <Input id="username" type="username"/>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Input id="password" type="password"/>
                            </FormControl>
                        </Stack>
                        <Button colorScheme="blue">Login</Button>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
}

export default App;
