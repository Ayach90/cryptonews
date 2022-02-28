import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import Logo from "src/components/Logo";
import { StyledLink } from "src/components/StyledLink";
import { Boxed, GridItem } from "src/Layout/styles";
import { FooterWrapper } from "src/Layout/Footer/styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <Boxed>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <GridItem>
              <Logo />
              <Typography variant="h6" color="#fff">
                CryoptosNews
              </Typography>
            </GridItem>
          </Grid>
          <Grid item xs={12} md={6}>
            <GridItem>
              <Typography variant="body1" color="#fff">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sagittis eros eget dolor faucibus, ac cursus justo tempor.
                Aenean vel purus risus. Vivamus fermentum urna ut arcu faucibus,
                non laoreet neque pellentesque.
              </Typography>
            </GridItem>
          </Grid>
          <Grid item xs={12} md={3}>
            <GridItem>
              <StyledLink>
                <Link href="http://localhost:3000/blog/">
                  <a>
                    <Typography color="#fff">Blog</Typography>
                  </a>
                </Link>
              </StyledLink>
              <StyledLink>
                <Link href="http://localhost:3000/contact/">
                  <a>
                    <Typography color="#fff">Contact</Typography>
                  </a>
                </Link>
              </StyledLink>
            </GridItem>
          </Grid>
        </Grid>
      </Boxed>
    </FooterWrapper>
  );
};

export default Footer;
