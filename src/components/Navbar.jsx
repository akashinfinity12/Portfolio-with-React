import React from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import "../css/navbar.css";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const width = window.innerWidth;
  console.log(width);
  return (
    <>
      {width > 480 ? (
        <Flex flexDirection={"row"} justifyContent="flex-end">
          <Box className="navbarButtons">
            <Text>Home</Text>
          </Box>
          <Box className="navbarButtons">
            <Text>About</Text>
          </Box>
          <Box className="navbarButtons">
            <Text>Skills</Text>
          </Box>
          <Box className="navbarButtons">
            <Text>Hobbies</Text>
          </Box>
          <Box style={{ marginRight: 20 }}>
            <Text>Contact</Text>
          </Box>
        </Flex>
      ) : (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Skills</MenuItem>
            <MenuItem>Hobbies</MenuItem>
            <MenuItem>Contact</MenuItem>
          </MenuList>
        </Menu>
      )}
    </>
  );
}
