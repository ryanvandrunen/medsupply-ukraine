import React from "react";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { GoArrowRight } from "react-icons/go";

const FORMID =
  "https://docs.google.com/forms/d/e/1FAIpQLSeR41h5SKqWQybR5G0jpv4wdIwHCPHKhf6YmxDDEqcT3AqTXw/viewform?embedded=true";

const LINKS = [
  {
    href: "gofundme.com/example",
    title: "TOY DRIVE",
    desc: "All monetary donations go directly towards buying gifts for Ukrainian refugee children!",
    layout: "bottom",
  },
  {
    href: "gofundme.com/example",
    title: "TOY DRIVE",
    desc: "All monetary donations go directly towards buying gifts for Ukrainian refugee children!",
    layout: "bottom",
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

export default function Donate() {
  const top = (link) => (
    <Text
      color={"gray.700"}
      fontSize={{ base: "xl", sm: "xl", lg: "2xl" }}
      textAlign={"center"}
      px={4}
    >
      {link.desc}
    </Text>
  );

  const bottom = (link) => (
    <Box align="center">
      <Text
        as="a"
        p={2}
        paddingRight={4}
        fontSize={{ base: "xl", md: "2xl" }}
        href={link.href}
        color="blueCons"
        transition="0.5s ease-in-out"
        _hover={{
          color: "white",
          background: "blueCons",
        }}
      >
        {link.title}
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
    <Box background="greyCons">
      <Box height={{ base: "600px", md: "600px" }}>
        <iframe
          src={FORMID}
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </Box>
      <Box background="white" py={8}>
        <Heading
          lineHeight={1.1}
          fontWeight={"medium"}
          fontSize={"4xl"}
          align="center"
        >
          <Text
            as={"span"}
            position={"relative"}
            backgroundColor={"yellowCons"}
            px={2}
          >
            MONETARY DONATIONS
          </Text>
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="center"
          py={{ base: 10, md: 16 }}
          spacing={{ base: 8, md: 10 }}
        >
          {LINKS.length > 0 ? (
            LINKS.map((link, i) => (
              <Stack
                flex={1}
                key={i}
                direction={
                  link.layout === "top"
                    ? { base: "column-reverse", md: "column" }
                    : { base: "column", md: "column" }
                }
              >
                {link.layout === "bottom" ? top(link) : bottom(link)}
                {link.layout === "bottom" ? bottom(link) : top(link)}
              </Stack>
            ))
          ) : (
            <Text
              color={"gray.700"}
              fontSize={{ base: "xl", sm: "xl", lg: "2xl" }}
              textAlign={"center"}
              px={4}
            >
              There are currently no active links, please check again soon.
            </Text>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
