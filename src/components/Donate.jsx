import React from "react";
import { AspectRatio, Box, Container, Heading, Text } from "@chakra-ui/react";

const FORMID =
  "https://docs.google.com/forms/d/e/1FAIpQLSeR41h5SKqWQybR5G0jpv4wdIwHCPHKhf6YmxDDEqcT3AqTXw/viewform?embedded=true";

const LINKS = [
  {
    href: "gofundme.com/example",
    title: "Toy Drive",
    desc: "All monetary donations go directly towards buying gifts for Ukrainian refugee children!",
  },
];

export default function Donate() {
  return (
    <Box background="greyCons">
      <AspectRatio height={{ base: "700px", md: "600px" }}>
        <iframe
          src={FORMID}
          width="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </AspectRatio>
      <Box background="white" py={8}>
        <Container max="7xl">
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
        </Container>
      </Box>
    </Box>
  );
}
