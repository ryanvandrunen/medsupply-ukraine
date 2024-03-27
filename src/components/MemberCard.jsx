import { Card, CardBody, Heading, Image, Link, Stack, Text, Box } from "@chakra-ui/react"
import React from "react"
import theme from "../theme.js"

export const MemberCard = ({member}) => {
    let { name, linkedIn, pfp, position } = member;

    return (
        <Card maxW="xs" boxShadow={`0 8px 8px ${theme.colors.yellowCons}5A`} mt={4} ml={4} mr={4} _hover={{boxShadow:`0 8px 8px ${theme.colors.blueCons}5A`}}>
            {/* <Box
        position="absolute"
        bottom="82%"
        right="78%"
        w="80px"
        h="80px"
        bg="black"
        zIndex="-1"
        borderRadius={10}
      />
      <Box
        position="absolute"
        top="82%"
        left="78%"
        w="80px"
        h="80px"
        bg={theme.colors.blueCons}
        zIndex="-1"
        borderRadius={10}
      /> */}
            <Link href={linkedIn} isExternal _hover={{textDecoration:"none"}}>
                <CardBody>
                    <Image src={pfp} alt="LinkedIn Profile" borderRadius='lg'/>
                    <Stack alignItems="center" mt={3} spacing={2} textAlign="center">
                        <Heading size='md'>{name}</Heading>
                        <Text fontWeight="medium" color="blueCons" fontSize="l">{position}</Text>
                    </Stack>
                </CardBody>
            </Link>

        </Card>
    )
}