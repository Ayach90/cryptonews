import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import Navigation from "src/components/Navigation";
import { StyledLink } from "src/components/StyledLink";
import { Boxed } from "src/Layout/styles";

type Props = {};

const Archive = ({ posts, totalPages, currentPage = 1 }) => {
  return (
    <Boxed>
      <Grid container spacing={2}>
        {posts.map((post) => {
          const { title, link, featured_image_src, id, excerpt } = post;
          const newLink = link.split("https://cryptosnews.angelayach.com/");
          return (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <Card sx={{ maxWidth: 345 }}>
                <Link href={`http://localhost:3000/${newLink[1]}`}>
                  <a>
                    <CardMedia
                      component="img"
                      height="140"
                      image={featured_image_src}
                      alt={title.rendered}
                    />
                  </a>
                </Link>
                <CardContent>
                  <StyledLink>
                    <Link href={`http://localhost:3000/${newLink[1]}`}>
                      <a>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          color="#333"
                        >
                          {title.rendered}
                        </Typography>
                      </a>
                    </Link>
                  </StyledLink>
                  <Box sx={{ fontSize: "14px", lineHeight: "24px" }}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: excerpt.rendered,
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Navigation totalPages={totalPages} currentPage={currentPage} />
    </Boxed>
  );
};

export default Archive;
