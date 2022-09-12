import type { NextPage } from 'next'
import { Center, Flex, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/login')
  })

  return (
    <Flex width='100vw' height='100vh' alignContent='center' justifyContent='center'>
      <Center>
        <Spinner thickness='8px' speed='0.65s' emptyColor='gray.200' color='blue.400' boxSize='32'/>
      </Center>
    </Flex>
  )
}

export default Home
