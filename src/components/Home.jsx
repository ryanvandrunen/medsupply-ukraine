import React from 'react'
import { Box, Image, Flex, Text, Heading, Container, Stack } from '@chakra-ui/react'
import flag from "../img/flag.png"
import hero from "../img/hero.jpg"

export default function Home() {
  return (
    <Box backgroundColor="greyCons">
      <Container maxW={'8xl'}>
      <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 20 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
              lineHeight={1.1}
              fontWeight={'medium'}
              fontSize={{ base: '4xl', sm: '4xl', lg: '6xl' }}
              textAlign={'center'}>
              <Text as={'span'} position={'relative'} 
              backgroundColor={"yellowCons"} px={2}>
              OUR MISSION
              </Text>
              <br />
          </Heading>
          <Text color={'gray.700'} fontSize={{ base: 'xl', sm: 'xl', lg: '2xl'}} textAlign={"center"}>
          To collect <Text as="span" color="blueCons">medical supplies</Text> for the humanitarian crisis in Ukraine.
          </Text>
          </Stack>
      </Stack>
      <Box justifyContent={'center'} alignContent={'center'} alignItems={'center'} alignSelf={'center'}>
        <Image src={flag} maxH="1000px" w="100%"/>
      </Box>
  </Container>
    </Box>
  )
}      {/* <Flex flexDirection={{ base: 'column', md: 'row'}}>
        <Box flex={1} padding={{ base: 2, 'md': 20 }}>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Box mx={'auto'} textAlign={'center'} mt={14} display={"inline-block"} backgroundColor={'yellowCons'} px={2}>
              <Heading fontSize={{ base: '4xl', md: '5xl'}} color={'black'}>OUR MISSION</Heading>
            </Box>
          </Flex>
          <Box max={'auto'} textAlign={'center'} mt={5} fontSize={{ base: 'xl', md: '2xl'}} mt={14} mb={14}>
            <Text>To collect <Text as="span" color="blueCons">medical supplies</Text> for the </Text> 
            <Text>humanitarian crisis in Ukraine. </Text>
          </Box>
        </Box>
        <Box flex={2} display="flex" alignItems="flex-end">
          <Flex justifyContent="center" width="100%">
            <Image src={flag} maxH="500px" maxW="100%" />
          </Flex>
        </Box>
      </Flex> */}
