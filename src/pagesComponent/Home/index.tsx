import { Dialog, Grid, Typography, CircularProgress, Box } from "@mui/material";
import Image from "next/image";
import Layout from "src/Layout";
import { Boxed, FullWidth, GridItem } from "src/Layout/styles";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import useSWR from "swr";
import { useState } from "react";
import { SvgIcon } from "@mui/material";

const fetcher = (apiUrl: string) => fetch(apiUrl).then((res) => res.json());

const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogInfo, setDialogInfo] = useState(undefined);
  const { data, error } = useSWR(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false",
    fetcher
  );

  const handleOpenDialog = (e: GridRowParams<{ [key: string]: any }>) => {
    setIsDialogOpen(true);
    setDialogInfo(e);
  };

  const columns: GridColDef[] = [
    { field: "market_cap_rank", headerName: "Rank" },
    { field: "name", headerName: "Name" },
    { field: "symbol", headerName: "Symbol" },
    { field: "current_price", headerName: "Price" },
    { field: "price_change_percentage_24h", headerName: "Change % 24h" },
    { field: "high_24h", headerName: "High 24h" },
    { field: "low_24h", headerName: "Low 24h" },
  ];

  return (
    <>
      <Layout
        title="CryptosNews - Your site about cryptos"
        description="Here you will find most recent news and information about cryptos."
      >
        <FullWidth sx={{ background: "#d5d5d5" }}>
          <Boxed>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
                <GridItem sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography variant="h3" component="h1">
                    CryptosNews
                  </Typography>
                  <Typography variant="subtitle1">
                    All you need to know about cryptos
                  </Typography>
                </GridItem>
              </Grid>
              <Grid item xs={12} md={6}>
                <GridItem
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/images/homeFeaturedImage.jpg"
                    alt="people working"
                    width={540}
                    height={327}
                  />
                </GridItem>
              </Grid>
            </Grid>
          </Boxed>
        </FullWidth>
        <Boxed
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!data ? (
            <Box sx={{ display: "flex", gap: "20px" }}>
              <CircularProgress />
              <Typography variant="h6">Loading Crypto info...</Typography>
            </Box>
          ) : (
            <DataGrid
              rows={data}
              columns={columns}
              rowsPerPageOptions={[10]}
              autoHeight
              checkboxSelection
              disableSelectionOnClick
              pageSize={10}
              onRowClick={(e) => handleOpenDialog(e)}
            />
          )}
        </Boxed>
      </Layout>
      <Dialog
        open={isDialogOpen}
        onBackdropClick={() => setIsDialogOpen(false)}
      ></Dialog>
    </>
  );
};

export default Home;
