import "./NavbarStyles.css"
import logo from "../img/logo.png"
import React from 'react'
import { Box, Popover, PopoverTrigger, Flex, Text, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const NAV_ITEMS = [
    { label: 'Home', href: '' },
    { label: 'Team', href: 'team' },
    { label: 'Donate', href: 'donate' }
  ]

function Navbar() {
    return (
        <>
        <nav>
            <Flex alignItems="center">
                <Box>
                    <Image id="logo" src={logo} />
                </Box>

                <Box id="branding" ml={4} color="#0057B7">
                    <Text fontWeight={600}>Medsupply Ukraine</Text>
                    <Text>Queen's University</Text>
                </Box>
            </Flex>

            <Flex id="navbar">
                {NAV_ITEMS.map((navItem, i) => (
                    <Box key={navItem.label} position="relative">
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                        <Link to={navItem.href}>
                            <Box
                            as="a"
                            p={2}
                            href={navItem.href ?? '#'}
                            fontSize={"1.3rem"}
                            fontWeight={600}
                            color="#0057B7"
                            transition={"0.3s ease-in-out"}
                            _hover={{
                                textDecoration: 'none',
                                color: "#FFDD00",
                                _after:{
                                    content: '""',
                                    width: "50%",
                                    height: "2px",
                                    background: "#FFDD00",
                                    position: "absolute",
                                    bottom: "-4px",
                                    left: "10px"
                                }
                            }}>
                            {navItem.label}
                            </Box>
                        </Link>
                        </PopoverTrigger>
                    </Popover>
                    </Box>
                ))}
            </Flex>

            {/* <div id="mobile">
                <i className="fas fa-bars"></i>
                <i className="fas fa-times"></i>
            </div> */}
        </nav>
        </>
    )
}

export default Navbar;