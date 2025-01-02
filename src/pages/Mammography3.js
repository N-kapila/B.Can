import { m } from "framer-motion";
import * as React from "react";
// @mui
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
// components
import Page from "../components/Page";
import Image from "src/components/Image";

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(6, 0, 2, 0),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027F" : "#E1E4E6",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  justifyContent: "center",
}));

// ----------------------------------------------------------------------

export default function Mammography3() {
  return (
    <Page title="Mammography 3">
      <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
        <m.div>
          <Typography variant="h3" paragraph>
            BCSC MAMOGRAPHY DATA
          </Typography>
        </m.div>
      </ContentStyle>

      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={10} md={5}>
          <Item>
            <h1 style={{ color: "blue", paddingBottom: "20px" }}>
              Do I need a <br />
              mammogram?
            </h1>

            <Stack
              direction={{ xs: "column", sm: "column", lg: "row" }}
              spacing={2}
            >
              <Item sx={{ display: "flex" }}>
                <Image
                  style={{ width: 200, height: 200, borderRadius: "50%" }}
                  src="/assets/img11.jpg"
                />
              </Item>
              <Item>
                <p style={{ fontSize: "20px" }}>
                  Clarifying the <br />
                  confusion about who <br />
                  should be screened and how often.
                </p>
                <br />
                <Button variant="contained" href="#">
                  {" "}
                  Read More
                </Button>
              </Item>
            </Stack>
          </Item>
        </Grid>

        <Grid item xs={10} md={5}>
          <Item>
            <h1 style={{ color: "blue", paddingBottom: "20px" }}>
              Your first <br />
              mammogram
            </h1>

            <Stack
              direction={{ xs: "column", sm: "column", lg: "row" }}
              spacing={2}
            >
              <Item sx={{ display: "flex" }}>
                <Image
                  style={{ width: 200, height: 200, borderRadius: "50%" }}
                  src="/assets/img12.png"
                />
              </Item>
              <Item>
                <p style={{ fontSize: "20px" }}>
                  What to expect and how to prepare
                  <br /> for your first screening mammogram.
                </p>
                <br />
                <Button variant="contained" href="#">
                  {" "}
                  Test Your Mammography{" "}
                </Button>
              </Item>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Page>
  );
}
