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
} from "@chakra-ui/react";

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
    title: "COLD/FLU RELIEF",
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
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
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
            <Text
              color={"gray.700"}
              fontSize={{ base: "md", sm: "lg", lg: "xl" }}
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
          </Stack>
          <Accordion flex={1} allowToggle width="400px">
            {ITEMS.map((item, i) => (
              <AccordionItem key={i}>
                <h2>
                  <AccordionButton
                    bg="blueCons"
                    _hover={{ bg: "blue.400" }}
                    color="white"
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
        </Stack>
      </Container>
    </Box>
  );
}
