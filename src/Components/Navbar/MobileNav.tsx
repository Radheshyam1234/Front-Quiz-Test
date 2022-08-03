import React from "react";
import { Link } from "react-router-dom";
import { Flex, Text, Stack } from "@chakra-ui/react";
import { Nav_Items, NavItemType } from "./navItems";
import { mobileNavItemWrapperStyle, navItemLabelStyle } from "./navStyle";

export const MobileNav = () => {
  return (
    <Stack
      align="stretch"
      px={6}
      py={4}
      display={{ md: "none" }}
      boxShadow="md"
    >
      {Nav_Items.map((navItem: NavItemType) => {
        return (
          <Link to={navItem.href} key={navItem.href}>
            <Stack>
              <Flex {...mobileNavItemWrapperStyle}>
                <Text {...navItemLabelStyle}>{navItem.label}</Text>
              </Flex>
            </Stack>
          </Link>
        );
      })}
    </Stack>
  );
};
