import { Box, styled } from "@mui/material";

export const FullWidth = styled(Box)`
  width: 100%;
  padding: 30px;
`;

export const Boxed = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
`;

export const GridItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
}));
