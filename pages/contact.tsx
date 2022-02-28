import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Layout from "src/Layout";
import { Boxed } from "src/Layout/styles";

const Contact = () => {
  return (
    <Layout
      title="Contact - CryptosNews"
      description="Contact with us in this form"
    >
      <Boxed>
        <Typography variant="h5">Contact form</Typography>
        <Typography variant="body1">
          Complete this form to contact with us. We will contact you in the next
          24h.
        </Typography>
        <Box marginY={5}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField id="name" label="Name" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="email"
                label="Email"
                fullWidth
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="message"
                label="Message"
                fullWidth
                multiline
                rows={10}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained">Send</Button>
            </Grid>
          </Grid>
        </Box>
      </Boxed>
    </Layout>
  );
};

export default Contact;
