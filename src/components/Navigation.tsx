import Link from "next/link";
import {
  Box,
  Pagination,
  PaginationItem,
  Button,
  Typography,
} from "@mui/material";
import { StyledLink } from "src/components/StyledLink";

type Props = {
  totalPages: number;
  currentPage: number;
};

const Navigation = ({ totalPages, currentPage }: Props) => {
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
