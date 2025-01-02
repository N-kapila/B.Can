import * as React from "react";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// components
import Page from "../components/Page";
import HomeHeader from "./Home/HomeHeader";

// ----------------------------------------------------------------------

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027F" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(6),
  textAlign: "left",
}));

// ----------------------------------------------------------------------

export default function RiskLevelPrediction() {
  return (
    <Page title="Risk Level Prediction">
      <Box sx={{ mb: 5 }}>
        <HomeHeader />
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        style={{ paddingTop: "50px" }}
      >
        <Grid item md={8}>
          <Item>
            <h1 style={{ fontSize: "50px" }}>
              Concerned <br /> About My Risk
            </h1>

            <h4 style={{ paddingBottom: "40px" }}>
              If you are uncertain about your own risk of breast cancer,it can
              help to learn about the known risk factors and steps you can take
              to lower your risk as much as possible.
            </h4>
            <p>
              Everyone has some risk of developing breast cancer,but there are
              many factors that can increase or decrease each individual
              person's breast cancer risk. <a href="#">Learn more</a>
            </p>
            <br />
            <p>
              If you are uncertain about your own risk of breast cancer, it can
              help to learn about the known risk factors and steps you can take
              to lower your risk as much as possible. Or if you know you have a
              higher risk of breast cancer due to factors such as a strong
              family cancer history or an inherited genetic mutation, you can
              learn more about those risk factors and risk reduction treatments
              that may be available to
            </p>

            <Box style={{ padding: "10px", textAlign: "right" }}>
              <Button
                variant="contained"
                href="/calculate-risk-form"
                style={{ textAlign: "center" }}
              >
                {" "}
                Calculate Risk Level{" "}
              </Button>
            </Box>
          </Item>
        </Grid>

        <Grid item md={3}>
          <Item>
            <img src="/assets/img8.svg" height={200} width={200} alt="img" />

            <Box style={{ padding: "20px" }}>
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Sections
              </a>
              <hr />
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                U.S breast cancer facts and statistics
              </a>
              <hr />
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Breast cancer risk factors
              </a>
              <hr />
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Understanding breast cancer risk
              </a>
              <hr />
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Exercise,nutrition and maintaining a healthy weight
              </a>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Page>
  );
}
