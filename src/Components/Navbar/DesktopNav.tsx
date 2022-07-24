import { Link } from "react-router-dom";
import { Nav_Items, NavItemType } from "./navItems";
import { navItemLabelStyle } from "./navStyle";
import { Box, Flex } from "@chakra-ui/react";

export const DesktopNav = () => {
  return (
    <Flex alignItems="center">
      {Nav_Items.map((navItem: NavItemType): JSX.Element => {
        return (
          <Link to={navItem.href} key={navItem.href}>
            <Box {...navItemLabelStyle}>{navItem.label}</Box>
          </Link>
        );
      })}
    </Flex>
  );
};
