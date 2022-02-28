import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Logo from "src/components/Logo";
import Link from "next/link";
import { MenuHeader, MuiMenuItem, MuiMenuItemDark } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { StyledLink } from "src/components/StyledLink";

type Props = {
  title: string;
  description: string;
  ogtitle?: string;
  ogimage?: string;
};

const Header = ({
  title,
  description,
  ogtitle = undefined,
  ogimage = undefined,
}: Props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={ogtitle} />
        <meta property="og:image" content={ogimage} />
      </Head>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MuiMenuItemDark>
                  <Link href="/blog/">
                    <a>Blog</a>
                  </Link>
                </MuiMenuItemDark>
                <MuiMenuItemDark>
                  <Link href="/contact/">
                    <a>Contact</a>
                  </Link>
                </MuiMenuItemDark>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <MuiMenuItem>
                <Link href="/blog/">
                  <a>Blog</a>
                </Link>
              </MuiMenuItem>
              <MuiMenuItem>
                <Link href="/contact/">
                  <a>Contact</a>
                </Link>
              </MuiMenuItem>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
