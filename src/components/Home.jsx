import React from 'react'
import { Box, Image, Flex, Text } from '@chakra-ui/react'
import flag from "../img/flag.png"
import { LogoView } from "./LogoView"

export default function Home() {
  return (
    <Box>
      <Flex flexDirection={{ base: 'column', md: 'row'}}>
        <Box flex={1} backgroundColor="greyCons">
          <Box width={{ base: '50%', md: '40%' }} mx={'auto'} textAlign={'center'} mt={14}>
            <Text fontSize={{ base: '2xl', md: '5xl'}} color={'black'} backgroundColor={'yellowCons'}>OUR MISSION</Text>
          </Box>
          <Box max={'auto'} textAlign={'center'} mt={5} fontSize={{ base: 'xl', md: '2xl'}} mt={14} mb={14}>
            <Text>To collect <Text as="span" color="blueCons">medical supplies</Text> for the </Text> 
            <Text>humanitarian crisis in Ukraine. </Text>
          </Box>
          <Image src={flag} maxH="450px" maxW="100%"/>
        </Box>
        <Box flex={1} alignItems={"center"} alignContent={"center"}>
          {/* <LogoView/> */}
        </Box>
      </Flex>
    </Box>
  )
}
