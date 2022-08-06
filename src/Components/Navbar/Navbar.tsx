import React from "react";
import { Link } from "react-router-dom";
import {
  Text,
  Box,
  Flex,
  IconButton,
  Collapse,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  iconWrapperStyle,
  navWrapperStyle,
  navLogoStyle,
  avatarStyle,
  avatarWrapperStyle,
} from "./navStyle";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="sticky" top="0" zIndex={3}>
      <Flex {...navWrapperStyle}>
        <Flex alignItems="center">
          <Flex {...iconWrapperStyle}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={4} h={4} />
                ) : (
                  <HamburgerIcon w={6} h={6} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Link to="/">
            <Text {...navLogoStyle}>Front-Quiz</Text>
          </Link>
          <Flex justify={{ base: "center", md: "start" }}>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
        </Flex>
        <Link to="/profile">
          <Box as="span" {...avatarWrapperStyle}>
            <Avatar
              as="span"
              {...avatarStyle}
              src="https://bit.ly/broken-link"
            />
          </Box>
        </Link>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};
