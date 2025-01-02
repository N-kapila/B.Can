import * as React from "react";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// components
import Page from "../components/Page";
import Image from "src/components/Image";

// ----------------------------------------------------------------------

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027F" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(6),
  textAlign: "left",
}));

// ----------------------------------------------------------------------

export default function SurvivalPrediction() {
  return (
    <Page title="Survival Prediction">
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        style={{ paddingTop: "40px" }}
      >
        <Grid item md={8}>
          <Item>
            <h1 style={{ fontSize: "50px" }}>
              In <br /> Treatment
            </h1>

            <h4 style={{ paddingBottom: "40px" }}>
              There are more breast cancer treatment options available today
              than ever before. While that's great news for your chances of
              successful treatment, going through treatment can be tough.
              Wherever you are in the process, we are here for you with
              information and support.
            </h4>
            <p>
              There are more breast cancer treatment options available today
              than ever before. While that's great news for your chances of
              successful treatment, going through treatment can be tough, to say
              the least.
            </p>
            <br />
            <p>
              You may be recovering from surgery or experiencing troubling
              treatment side effects. Perhaps you are dealing with the
              challenges of balancing treatment with family and work
              obligations, or trying to keep a brave face for your loved ones
              while you're not feeling very well. You are not alone. Whatever
              your treatment plan includes, and wherever you are in the process,
              we are here for you with information and support to help you get
              through this challenging time in your life. Here are some
              resources for those of you who are actively being treated for
              breast cancer right now.
            </p>

            <Box style={{ padding: "10px", textAlign: "right" }}>
              <Button
                variant="contained"
                href="/predict-survival-form"
                style={{ textAlign: "center" }}
              >
                {" "}
                Predict Survial{" "}
              </Button>
            </Box>
          </Item>
        </Grid>

        <Grid item md={3}>
          <Item>
            <Image src="/assets/img9.png" />

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
                Managing treatment side effects
              </a>
              <hr />
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Complementary therepies
              </a>
              <hr />
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Considering a clinical trial
              </a>
              <hr />
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Paying for your care
              </a>
              <hr />
              <a
                href="#"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Breast cancer and your job
              </a>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Page>
  );
}
