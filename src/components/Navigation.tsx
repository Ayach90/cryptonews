import {
  Box,
  Pagination,
  PaginationItem,
  Button,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { StyledLink } from "./StyledLink";

const Navigation = ({ totalPages, currentPage }) => {
  if (currentPage > 1 && currentPage < totalPages) {
    return (
      <Box marginY={5}>
        <Button variant="contained">
          <StyledLink>
            <Link href={`http://localhost:3000/blog/page/${currentPage - 1}/`}>
              <a>
                <Typography color="#fff">Prev</Typography>
              </a>
            </Link>
          </StyledLink>
        </Button>
        <Button variant="contained">
          <StyledLink>
            <Link href={`http://localhost:3000/blog/page/${currentPage + 1}/`}>
              <a>
                <Typography color="#fff">Next</Typography>
              </a>
            </Link>
          </StyledLink>
        </Button>
      </Box>
    );
  } else if (currentPage === 1) {
    return (
      <Box marginY={5}>
        <Button variant="contained">
          <StyledLink>
            <Link href={`http://localhost:3000/blog/page/${currentPage + 1}/`}>
              <a>
                <Typography color="#fff">Next</Typography>
              </a>
            </Link>
          </StyledLink>
        </Button>
      </Box>
    );
  } else if (currentPage === totalPages) {
    return (
      <Box marginY={5}>
        <Button variant="contained">
          <StyledLink>
            <Link href={`http://localhost:3000/blog/page/${currentPage - 1}/`}>
              <a>
                <Typography color="#fff">Prev</Typography>
              </a>
            </Link>
          </StyledLink>
        </Button>
      </Box>
    );
  }
};

export default Navigation;
