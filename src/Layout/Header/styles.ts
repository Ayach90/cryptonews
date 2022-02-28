import { MenuItem, MenuItemProps } from "@mui/material";
import { Box, styled } from "@mui/material";

export const MenuHeader = styled(Box)`
  margin: 0 20px;
  display: flex;
  gap: 15px;
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #d5d5d5;
    }
  }
`;

export const MuiMenuItem = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  textDecoration: "none",
  a: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export const MuiMenuItemDark = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  textDecoration: "none",
  a: {
    color: "#333",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));
