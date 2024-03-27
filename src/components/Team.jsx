import { Box, Container, Stack, Text, Image, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import logo from "../img/medsupply_logo.png"
import { MemberCard } from './MemberCard'

const TEAM = [
    { name: 'Placeholder', linkedIn: 'https://www.linkedin.com/in/ryan-vandrunen/', pfp: logo, position: "Lead" },
    { name: 'Placeholder', linkedIn: 'https://www.linkedin.com/in/ryan-vandrunen/', pfp: logo, position: "Co-Lead"},
    { name: 'Placeholder', linkedIn: "https://www.linkedin.com/in/ryan-vandrunen/", pfp: logo, position: "Operations Manager"}
]

const landing = () => (
  <Container maxW={'7xl'}>
      <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
              lineHeight={1.1}
              fontWeight={'normal'}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text as={'span'} color={'black'} position={'relative'} background={"blueCons"} px={2}>
              CORE TEAM
              </Text>
              <br />
          </Heading>
          <Text color={'gray.700'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel rhoncus ante. 
          Integer in augue vel eros porttitor gravida id ac risus. Vivamus non vestibulum arcu. 
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </Text>
          
          </Stack>
              <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              w={'full'}>
              <Box
                  position={'relative'}
                  height={'330px'}
                  rounded={'2xl'}
                  boxShadow={'2xl'}
                  width={'full'}
                  overflow={'hidden'}>
                  {/* <Image
                  alt={'Hero Image'}
                  fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={{ base: '100%', sm: '110%', lg: '115%' }}
                  src={gdscGroupPic}
                  /> */}
              </Box>
          </Flex>
      </Stack>
  </Container>
)

export default function Team() {
  return (
    <Box background="greyCons" mb={12}>
          <Text fontSize={"xxx-large"} fontWeight={"bold"} textAlign={"center"}></Text>
          {landing()}

          <Heading
              lineHeight={1.1}
              fontWeight={'medium'}
              fontSize={'xx-large'}
              textAlign={'center'}>
              <Text as={'span'} position={'relative'} 
              backgroundColor={"yellowCons"} px={2}>
                CLUB LEADS
              </Text>
          </Heading>
          <Flex direction={{ base:'column', md: 'row'}} wrap="wrap" justify="center" align="center">
            {[TEAM[0], TEAM[1]].map(lead => <MemberCard member={lead} />)}
          </Flex>

          <Heading
            mt={8}
              lineHeight={1.1}
              fontWeight={'medium'}
              fontSize={'xx-large'}
              textAlign={'center'}>
              <Text as={'span'} position={'relative'} 
              backgroundColor={"yellowCons"} px={2}>
                OPERATION LEADS
              </Text>
          </Heading>
          <Flex direction={{ base: 'column', md: 'row' }} wrap="wrap" justify="center" align="center">
            {[TEAM[2], TEAM[2]].map(lead => <MemberCard member={lead} />)}
          </Flex>

          {/* <Text textAlign={"center"} fontSize={"xx-large"} fontWeight={"bold"}>Club Leads</Text>
          <Flex direction={{ base: 'column', md: 'row' }} wrap="wrap" justify="center" align="center">
              {[members[0], members[1]].map(lead => <MemberCard member={lead} />)}
          </Flex>

          <Text mt={8} textAlign={"center"} fontSize={"xx-large"} fontWeight={"bold"}>Tech Leads</Text>
          <Flex direction={{ base: 'column', md: 'row' }} wrap="wrap" justify="center" align="center">
              {[members[2], members[3]].map(lead => <MemberCard member={lead} color={colors.blue500} />)}
          </Flex>

          <Text mt={8} textAlign={"center"} fontSize={"xx-large"} fontWeight={"bold"}>Operation, Partnership, Marketing Leads</Text>
          <Flex direction={{ base: 'column', md: 'row' }} wrap="wrap" justify="center" align="center">
              {[{m:members[4], c:colors.red500}, {m:members[5], c:colors.green500}, {m:members[6], c:colors.yellow600}, {m:members[7], c:colors.blue500}].map(lead => 
                  <MemberCard member={lead.m} color={lead.c} />)}
          </Flex> */}
      </Box>
  )
}