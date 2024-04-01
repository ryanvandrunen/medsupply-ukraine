import React from "react";
import { Box, Image, Text, Heading, Container, Stack } from "@chakra-ui/react";
import flag from "../img/flag.png";
import { GoArrowRight } from "react-icons/go";

const SECTIONS = [
  {
    title: "TEAM",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    layout: "bottom",
    href: "team",
  },
  {
    title: "INFO",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    layout: "top",
    href: "info",
  },
  {
    title: "DONATE",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
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
      >
        {section.title}
        <span
          className="arrow"
          style={{
            display: "inline-block",
            marginLeft: "0.5rem",
            verticalAlign: "middle",
            animation: "glide 1.5s infinite",
          }}
        >
          <GoArrowRight />
        </span>
        <style>{glideAnim}</style>
      </Text>
    </Box>
  );

  return (
    <Box backgroundColor="greyCons">
      <Container maxW={"8xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 14 }}
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
        <Box
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
          alignSelf={"center"}
        >
          <Image src={flag} maxH="1000px" w="100%" />
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
