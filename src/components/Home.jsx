import React from "react";
import { Box, Image, Text, Heading, Container, Stack } from "@chakra-ui/react";
import flag from "../img/flag.png";
import { GoArrowRight } from "react-icons/go";

const SECTIONS = [
  {
    title: "TEAM",
    desc: "Check out the brilliant students responsible for the club's operations!",
    layout: "bottom",
    href: "team",
  },
  {
    title: "INFO",
    desc: "See a comprehensive list of what supplies you can donate!",
    layout: "top",
    href: "info",
  },
  {
    title: "DONATE",
    desc: "Get more information on how you can contribute today!",
    layout: "bottom",
    href: "donate",
  },
];

const glideAnim = `
  @keyframes glide {
    0% {
      transform: translateX(0);
    }
    70% {
      transform: translateX(0.5rem);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export default function Home() {
  const top = (section) => (
    <Text
      color={"gray.700"}
      fontSize={{ base: "xl", sm: "xl", lg: "2xl" }}
      textAlign={"center"}
      px={4}
    >
      {section.desc}
    </Text>
  );

  const bottom = (section) => (
    <Box align="center">
      <Text
        as="a"
        p={2}
        paddingRight={4}
        fontSize={{ base: "xl", md: "2xl" }}
        href={section.href}
        color="blueCons"
        transition="0.5s ease-in-out"
        _hover={{
          color: "white",
          background: "blueCons",
        }}
      >
        {section.title}
        <Box
          as="span"
          className="arrow"
          display="inline-block"
          ml="0.5rem"
          verticalAlign={"middle"}
          animation="glide 1.5s infinite"
        >
          <GoArrowRight />
        </Box>
        <style>{glideAnim}</style>
      </Text>
    </Box>
  );

  return (
    <Box backgroundColor="greyCons">
      <Container maxW="8xl">
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 24, md: 16 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 20, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={"medium"}
              fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
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
              fontSize={{ base: "2xl", sm: "2xl", lg: "3xl" }}
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
        <Box overflow="hidden">
          <Image src={flag} maxWidth={{ base: "120%", md: "100%" }} />
        </Box>
      </Container>
      <Box background="white">
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="center"
          py={{ base: 10, md: 16 }}
          spacing={{ base: 8, md: 10 }}
        >
          {SECTIONS.map((section, i) => (
            <Stack
              flex={1}
              key={i}
              direction={
                section.layout === "top"
                  ? { base: "column-reverse", md: "column" }
                  : { base: "column", md: "column" }
              }
            >
              {section.layout === "bottom" ? top(section) : bottom(section)}
              {section.layout === "bottom" ? bottom(section) : top(section)}
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
