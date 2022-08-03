export const navWrapperStyle = {
  bg: "white",
  color: "secondary.800",
  minH: "60px",
  py: { base: 2 },
  px: { base: "1.5rem" },
  borderBottom: 1,
  borderStyle: "solid",
  borderColor: "secondary.200",
  align: "center",
  justifyContent: "space-between",
};

export const navLogoStyle = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "primary.700",
  ml: "1rem",
};

export const iconWrapperStyle = {
  flex: { base: 1, md: "auto" },
  ml: { base: -2 },
  display: { base: "flex", md: "none" },
};

export const avatarWrapperStyle: any = {
  as: "span",
  _hover: {
    bg: "secondary.100",
  },
  p: 0,
};

export const avatarStyle = {
  size: "sm",
  bg: "secondary.900",
  _hover: {
    bg: "primary.800",
  },
};

export const mobileNavItemWrapperStyle = {
  py: 2,
  justify: "space-between",
  align: "center",
  _hover: {
    textDecoration: "none",
  },
};

export const navItemLabelStyle: any = {
  as: "span",
  fontSize: "1.1rem",
  p: "2",
  color: "secondary.900",
  _hover: {
    textDecoration: "none",
    color: "primary.500",
  },
};
