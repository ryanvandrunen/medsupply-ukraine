import React from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  Heading,
  Container,
  Stack,
} from "@chakra-ui/react";
import flag from "../img/flag.png";

export default function Home() {
  return (
    <Box backgroundColor="greyCons">
      <Container maxW={"8xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 20 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={"medium"}
              fontSize={{ base: "4xl", sm: "4xl", lg: "6xl" }}
              textAlign={"center"}
            >
              <Text
                as={"span"}
                position={"relative"}
                backgroundColor={"yellowCons"}
                px={2}
              >
                OUR MISSION
              </Text>
              <br />
            </Heading>
            <Text
              color={"gray.700"}
              fontSize={{ base: "xl", sm: "xl", lg: "2xl" }}
              textAlign={"center"}
            >
              To collect{" "}
              <Text as="span" color="blueCons">
                medical supplies
              </Text>{" "}
              for the humanitarian crisis in Ukraine.
            </Text>
          </Stack>
        </Stack>
        <Box
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
          alignSelf={"center"}
        >
          <Image src={flag} maxH="1000px" w="100%" />
        </Box>
      </Container>
    </Box>
  );
}
