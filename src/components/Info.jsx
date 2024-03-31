import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  VStack,
  Container,
  Stack,
  Heading,
  Flex,
  Image,
  keyframes,
} from "@chakra-ui/react";
import supplies from "../img/supplies.jpg";
import { GoArrowRight } from "react-icons/go";

const SUPPLIES_LINK =
  "https://docs.google.com/document/d/1usLbx0RIUc2VORAgZ-xizbkPlznNX7ljfmM3FZKGkaI";

const ITEMS = [
  {
    title: "ALLERGY RELIEF",
    supplies: ["Benadryl", "Claritin", "Allegra", "Zyrtec", "Xyzal"],
  },
  {
    title: "PAIN RELIEF",
    supplies: ["Tylenol", "Advil", "Ibuprofen", "Aleve", "High-dose Aspirin"],
  },
  { title: "EQUIPMENT", supplies: ["Masks", "Gloves", "Eye protection"] },
  {
    title: "COLD RELIEF",
    supplies: [
      "Anti-fever meds",
      "Cold medicine",
      "Neocitran meds",
      "Throat lozenges",
    ],
  },
  {
    title: "WOUND CARE",
    supplies: [
      "Anti-septic wipes",
      "Gauze (10x10, 20x20)",
      "Dressings",
      "Polysporin",
      "Thick elastic bandages",
      "Elastic fixing bandage",
      "Sterile bandages 10x14",
      "Non-woven adhesive tape",
      "Occlusive tape",
      "Soft gauze",
    ],
  },
  {
    title: "MISCELLANEOUS",
    supplies: [
      "First Aid Kits",
      "Imodium",
      "Muscle relaxants (Voltaren, A535)",
      "White active charcoal",
      "Waterproof markers",
    ],
  },
];

export default function Info() {
  return (
    <Box background="greyCons">
      <Container maxW="7xl">
        <Stack
          direction={{ base: "column", md: "row" }}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }} position="relative">
            <Heading
              lineHeight={1.1}
              fontWeight={"normal"}
              fontSize={{ base: "4xl", sm: "5xl", lg: "7xl" }}
            >
              <Text
                as={"span"}
                color={"black"}
                position={"relative"}
                background={"yellowCons"}
                px={2}
              >
                SUPPLIES
              </Text>
              <br />
            </Heading>
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
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "110%", lg: "115%" }}
                src={supplies}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
      <Box background="white">
        <Container maxW="7xl">
          <Stack
            direction={{ base: "column-reverse", md: "row" }}
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
          >
            <Accordion flex={1} allowToggle width="400px">
              {ITEMS.map((item, i) => (
                <AccordionItem key={i}>
                  <h2>
                    <AccordionButton
                      bg="blueCons"
                      _hover={{ bg: "blue.400" }}
                      color="white"
                      borderRadius="md"
                      p={4}
                      _focus={{ boxShadow: "none" }}
                    >
                      <Box flex="1" textAlign="left">
                        {item.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <VStack spacing={2}>
                      {item.supplies.map((supply, index) => (
                        <Text key={index} color="blueCons">
                          - {supply}
                        </Text>
                      ))}
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
            <Stack flex={1} spacing={{ base: 5, md: 10 }} position="relative">
              <Text
                color={"gray.700"}
                fontSize={{ base: "md", sm: "lg", lg: "xl" }}
                align={"center"}
              >
                All items listed are cleared for{" "}
                <Text as="span" color="blueCons">
                  air shipments.
                </Text>
                <br />
                <Text as="span" color="blueCons">
                  No
                </Text>{" "}
                sprays, liquids, or alcohol based First-Aid Kits. <br />
                Supplies must be{" "}
                <Text as="span" color="blueCons">
                  unopened
                </Text>
                . <br />
                Supplies cannot be{" "}
                <Text as="span" color="blueCons">
                  expired
                </Text>
                .
              </Text>
              <Box align="center">
                <Text
                  as="a"
                  position="relative"
                  background="yellowCons"
                  p={2}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={SUPPLIES_LINK}
                  width="fit-content"
                  display="flex"
                >
                  FULL LIST
                  <GoArrowRight />
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
