import React from 'react';
import { ButtonGroup, Container, IconButton, Stack, Text, Image, Box } from '@chakra-ui/react'
import { FaInstagram, FaRegEnvelope, FaEnvelope } from 'react-icons/fa'
import { FiLink } from 'react-icons/fi'
import logo from "../img/logo.png";

const SOCIAL_BUTTONS = [
    {href: "mailto:medsupply.ukraine@gmail.com", label:"Email", icon: FaRegEnvelope, hoverIcon: FaEnvelope},
    {href: "https://www.instagram.com/medsupply_ukraine/", label:"Instagram", icon: FaInstagram},
    {href: "https://linktr.ee/medsupply.ukraine", label:"Link", icon: FiLink}
]

const Footer = () => {
    return (
        <Box
            mt={6}
        >
            <Container
                as={Stack}
                maxW={'8xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Image src={logo}
                    boxSize='150px'
                    objectFit='contain'
                    alt='Logo'
                />
                <Text color="#0057B7" fontWeight="normal">&copy; {new Date().getFullYear()} Medsupply Ukraine. All rights reserved</Text>
                <ButtonGroup variant="ghost" color="white">
                    {SOCIAL_BUTTONS.map((item, i) => (
                        <IconButton
                        as="a"
                        href={item.href}
                        aria-label={item.label}
                        icon={<item.icon />}
                        color="#0057B7"
                        border="1px solid #0057B7"
                        borderRadius="50px"
                        transition="0.3s ease-in-out"
                        _hover={{ 
                            bg: "#0057B7",
                            color: "#FFDD00"
                        }}
                        />
                    ))}
                </ButtonGroup>
            </Container>
        </Box>
    );
};

export default Footer;
