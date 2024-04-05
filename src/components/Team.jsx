import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { MemberCard } from "./MemberCard";
import logo from "../img/medsupply_logo.png";
import team from "../img/team.jpg";

const TEAMS = [
  {
    section: "CLUB LEADS",
    members: [
      {
        name: "Placeholder",
        linkedIn: "https://www.linkedin.com/in/ryan-vandrunen/",
        pfp: logo,
        position: "Lead",
      },
      {
        name: "Placeholder",
        linkedIn: "https://www.linkedin.com/in/ryan-vandrunen/",
        pfp: logo,
        position: "Co-Lead",
      },
    ],
  },
  {
    section: "OPERATION LEADS",
    members: [
      {
        name: "Placeholder",
        linkedIn: "https://www.linkedin.com/in/ryan-vandrunen/",
        pfp: logo,
        position: "Operations Manager",
      },
      {
        name: "Placeholder",
        linkedIn: "https://www.linkedin.com/in/ryan-vandrunen/",
        pfp: logo,
        position: "Operations Manager",
      },
      {
        name: "Placeholder",
        linkedIn: "https://www.linkedin.com/in/ryan-vandrunen/",
        pfp: logo,
        position: "Operations Manager",
      },
    ],
  },
];

const landing = () => (
  <Container maxW={"7xl"}>
    <Stack
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: "column", md: "row" }}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={"normal"}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          <Text
            as={"span"}
            color={"black"}
            position={"relative"}
            background={"blueCons"}
            px={2}
          >
            CORE TEAM
          </Text>
          <br />
        </Heading>
        <Text fontSize="lg" color={"gray.700"}>
          Introducing the dedicated core team of our club, all hailing from
          various faculties and academic years at Queen's University. <br />
          <br />
          Explore below to connect with our team!
        </Text>
      </Stack>
      <Flex
        flex={1}
        justify={"center"}
        align={"center"}
        position={"relative"}
        w={"full"}
      >
        <Box
          position={"relative"}
          height={"330px"}
          rounded={"2xl"}
          boxShadow={"2xl"}
          width={"full"}
          overflow={"hidden"}
        >
          <Image
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "110%", lg: "115%" }}
            src={team}
          />
        </Box>
      </Flex>
    </Stack>
  </Container>
);

export default function Team() {
  return (
    <Box background="greyCons" paddingBottom={20}>
      <Text
        fontSize={"xxx-large"}
        fontWeight={"bold"}
        textAlign={"center"}
      ></Text>
      {landing()}

      {TEAMS.map((team, i) => (
        <>
          <Heading
            lineHeight={1.1}
            mt={10}
            fontWeight="medium"
            fontSize="4xl"
            textAlign="center"
          >
            <Text
              as="span"
              position="relative"
              backgroundColor="yellowCons"
              px={2}
            >
              {team.section}
            </Text>
          </Heading>
          <Flex
            direction={{ base: "column", md: "row" }}
            wrap="wrap"
            justify="center"
            align="center"
          >
            {team.members.map((lead) => (
              <MemberCard member={lead} />
            ))}
          </Flex>
        </>
      ))}
    </Box>
  );
}
