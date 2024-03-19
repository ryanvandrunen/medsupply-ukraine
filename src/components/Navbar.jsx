import logo from "../img/logo.png"
import React from 'react'
import { Box, Popover, PopoverTrigger, Flex, Text, Image, IconButton, useDisclosure, Stack, Collapse, Icon } from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { Link, useLocation } from "react-router-dom"

const NAV_ITEMS = [
    { label: 'Home', href: '' },
    { label: 'Team', href: 'team' },
    { label: 'Info', href: 'info' },
    { label: 'Donate', href: 'donate' }
  ]

export const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box>
            <Flex
            minH={'60px'}
            py={{ base: 6, md: 6, sm: 3 }}
            px={{ base: 10 }}
            align={'center'}>
                <Flex
                flex={{ base: 1, md: 'auto' }}
                ml={{ base: -2 }}
                mr={{ base: '-5rem', md: '-15rem' }}
                display={{ base: 'flex', md: 'none' }}>
                <IconButton
                    onClick={onToggle}
                    icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                />
                </Flex>
                <Flex w={{ base: "100%", md: "50%" }} ml={{ base: "100%", md: "0" }} flex={{ base: 1 }} justifyContent={{ base: 'flex-end', md: 'start' }}>
                    <Box m={2} mt={1} ml={{ base: -4, md: 0 }}>
                        <Image src={logo} maxH={75} maxW={75}/>
                    </Box>
                    <Flex display={{ base: 'none', md: 'flex' }} direction={"column"} mt={3} ml={2}>
                    <Text
                            fontWeight={600}
                            color="#0057B7">
                            Medsupply Ukraine
                        </Text>
                        <Text
                        color="#0057B7">
                        Queen's University
                        </Text>
                    </Flex>
                </Flex>

                <Stack
                flex={{ base: 1, md: 0 }}
                mr={8}
                justify={'flex-end'}
                direction={'row'}
                spacing={6}>
                <DesktopNav />
                </Stack>

            </Flex>

        <Collapse in={isOpen} animateOpacity>
            <MobileNav />
        </Collapse>
        </Box>
    )
}

const DesktopNav = () => {
    const location = useLocation()

    return (
        <Stack display={{ base: "none", md: "flex" }} direction={'row'} spacing={{ base: 4, md: 4, sm: 0}}>
            {NAV_ITEMS.map((navItem, i) => (
                <Box key={navItem.label} position="relative">
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                        <Link to={navItem.href}>
                            <Box
                            as="a"
                            href={navItem.href ?? '#'}
                            fontSize={"1.3rem"}
                            fontWeight={600}
                            color={
                                location.pathname === "/" + navItem.href
                                ? "#FFDD00"
                                : "#0057B7"
                            }
                            _after={
                                location.pathname === "/" + navItem.href
                                    ? {
                                        content: '""',
                                        width: "60%",
                                        height: "2px",
                                        background: "#FFDD00",
                                        position: "absolute",
                                        bottom: "-4px",
                                        left: "1px"
                                    }
                                    : {}
                            }
                            transition={"0.3s ease-in-out"}
                            _hover={{
                                textDecoration: 'none',
                                color: "#FFDD00",
                                _after:{
                                    content: '""',
                                    width: "60%",
                                    height: "2px",
                                    background: "#FFDD00",
                                    position: "absolute",
                                    bottom: "-4px",
                                    left: "1px"
                                }
                            }}>
                            {navItem.label}
                            </Box>
                        </Link>
                        </PopoverTrigger>
                    </Popover>
                </Box>
            ))}
        </Stack>
      )
}

const MobileNav = () => {
    return (
      <Stack p={4} mt={-6} display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    )
  }

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure()
    const location = useLocation()
    return (
      <Flex justifyContent={'center'} spacing={4} onClick={children && onToggle} key={label}>
        <Link to={href}>
        <Box
          py={2}
          justifyContent="space-between"
          alignItems="center"
          color={
            location.pathname === "/" + href
            ? "#FFDD00"
            : "#0057B7"
        }
          _hover={{
            textDecoration: 'none',
            color: "#FFDD00"
          }}>
          <Text fontWeight={600}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'0.3s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Box>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            align={'start'}>
            {children &&
              children.map((child) => (
                  <Box key={label} py={2}>
                    {child.label}
                  </Box>
              ))}
          </Stack>
        </Collapse>
        </Link>
      </Flex>
    )
}