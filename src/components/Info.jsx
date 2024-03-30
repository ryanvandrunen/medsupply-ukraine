import React from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text, VStack, Container, Stack } from "@chakra-ui/react"
import { MdExpandMore } from "react-icons/md"

const ITEMS = [
  {title: 'Allergy Relief', supplies: ['Benadryl', 'Claritin', 'Allegra', 'Zyrtec', 'Xyzal']},
  {title: 'Pain Relief', supplies: ['Tylenol', 'Advil', 'Ibuprofen', 'Aleve', 'High-dose Aspirin']},
  {title: 'Equipment', supplies: ['Masks', 'Gloves', 'Eye protection']},
  {title: 'Cold/Flu Relief', supplies: ['Anti-fever meds', 'Cold medicine', 'Neocitran meds', 'Throat lozenges']},
  {title: 'Wound Care', supplies:['Anti-septic wipes', 'Gauze (10x10, 20x20)', 'Dressings', 'Polysporin', 'Thick elastic bandages', 'Elastic fixing bandage', 'Sterile bandages 10x14', 'Non-woven adhesive tape', 'Occlusive tape', 'Soft gauze']},
  {title: 'Miscellaneous', supplies:['First Aid Kits', 'Imodium', 'Muscle relaxants (Voltaren, A535)', 'White active charcoal', 'Waterproof markers']}
]

export default function Info() {
  return (
    <Box background="greyCons">
      <Stack direction={{base: 'column', md:'row'}}>
        <Text flex={1}>Hello</Text>
          <Accordion flex={1} allowToggle>
            {ITEMS.map((item, i) => (
              <AccordionItem>
                <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack align="stretch" spacing={2}>
                    {item.supplies.map(supply =>
                      <Text>- {supply}</Text>
                    )}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
      </Stack>
    </Box>
    
  )
}
