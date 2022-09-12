import { NextPage } from "next";
import { Center, Flex, Heading } from "@chakra-ui/react";

const Dashboard: NextPage = () => {
  return (
    <Flex width='100vw' height='100vh' alignContent='center' justifyContent='center'>
      <Center>
        <Heading>Dashboard</Heading>
      </Center>
    </Flex>
  )
}

export default Dashboard
