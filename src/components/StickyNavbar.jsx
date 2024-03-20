import React from 'react';
import { Box } from '@chakra-ui/react';
import NAV_ITEMS from "./Navbar"

const StickyNavbar = () => {
  return (
    <Box
      position="sticky"
      top="0"
    >
      Second Navbar
    </Box>
  );
};

export default StickyNavbar;