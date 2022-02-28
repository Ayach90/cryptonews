import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { signOut } from "firebase/auth";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "src/components/Logo";
import { MuiMenuItem, MuiMenuItemDark } from "src/Layout/Header/styles";
import { auth } from "src/firebase/firebaseConfig";
import { useAuth } from "src/contexts/AuthContext";

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
  const router = useRouter();
  const { user } = useAuth();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
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
                {user ? (
                  <>
                    <MuiMenuItemDark>
                      <Link href="/profile/">
                        <a>Profile</a>
                      </Link>
                    </MuiMenuItemDark>
                    <MuiMenuItemDark>
                      <Typography onClick={logout}>Logout</Typography>
                    </MuiMenuItemDark>
                  </>
                ) : (
                  <MuiMenuItemDark>
                    <Link href="/login/">
                      <a>Login</a>
                    </Link>
                  </MuiMenuItemDark>
                )}
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
              {user ? (
                <>
                  <MuiMenuItem>
                    <Link href="/profile/">
                      <a>Profile</a>
                    </Link>
                  </MuiMenuItem>
                  <MuiMenuItem>
                    <Typography onClick={logout}>Logout</Typography>
                  </MuiMenuItem>
                </>
              ) : (
                <MuiMenuItem>
                  <Link href="/login/">
                    <a>Login</a>
                  </Link>
                </MuiMenuItem>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
