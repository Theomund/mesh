import React from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Stack,
    useColorModeValue
} from "@chakra-ui/react";
import {GiMeshNetwork} from "react-icons/gi";
import {IconContext} from "react-icons";
import {FaEye, FaLock, FaUser} from "react-icons/fa";

function App() {
    return (
        <Container maxW="lg" py="24" px="8">
            <Stack textAlign="center" spacing="8">
                <Stack>
                    <IconContext.Provider value={{color: "#61DAFB", size: "md"}}>
                        <GiMeshNetwork/>
                    </IconContext.Provider>
                    <Heading>Mesh</Heading>
                </Stack>
                <Box py="8" px="10" bg="bg-surface" boxShadow={useColorModeValue("md", "md-dark")} borderRadius="xl">
                    <Stack spacing="8">
                        <Stack>
                            <FormControl>
                                <FormLabel htmlFor="username">Username</FormLabel>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none" children={<FaUser color="#A0AEC0"/>}/>
                                    <Input id="username" type="username"/>
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none" children={<FaLock color="#A0AEC0"/>}/>
                                    <Input id="password" type="password"/>
                                    <InputRightElement>
                                        <IconButton variant="link" aria-label="Mask password"
                                                    icon={<FaEye color="#A0AEC0"/>}/>
                                    </InputRightElement>
                                </InputGroup>
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
