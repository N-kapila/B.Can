import { m } from "framer-motion";
import * as React from "react";
import { styled } from "@mui/material/styles";
// @mui
import { Button, Typography, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
// components
import Page from "../components/Page";
import HomeHeader from "./Home/HomeHeader";

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(6, 0, 2, 0),
}));

// ----------------------------------------------------------------------

export default function Mammography2() {
  return (
    <Page title="Mammography 2">
      <Box sx={{ mb: 5 }}>
        <HomeHeader />
      </Box>
      <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
        <m.div>
          <Typography variant="h3" paragraph>
            BCSC MAMOGRAPHY DATA
          </Typography>
        </m.div>
      </ContentStyle>

      <Box sx={{ width: "100%" }}>
        <div style={{ padding: "50px" }}>
          <h3>
            SENSITIVITY AND SPECIFICITY OF SCREENING DIGITAL MAMMOGRAPHY BY
            BI-RADS DENSITY, WOMEN 40-74 YEARS,2005-2010
          </h3>
          <br />
          <h5> N = 585,993 SCREENING EXAMS</h5>
        </div>
      </Box>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <img src="assets/chart1.png" alt="data chart" />
        </Container>
      </React.Fragment>
      <div style={{ padding: "50px" }}>
        <h6>The following must be cited when reproducing his data:</h6>
        <br />
        <p>
          "The Breast Cancer Surveillance Consortium and its data collection and
          sharing activities are funded by grants from the National Cancer
          Institute (PO1CA154292, U54CA163303), Patient-Centered Outcomes
          Research Institute (PCS-1504-30370), and Agency for Health Research
          and Quality (R01 HSO18366-01A1). Downloaded xx/xx/xxxx from the Breast
          Cancer Surveillance Consortium Web site -
          http://www.bcsc-research.org/. More information regarding the BCSC is
          available at:{" "}
          <a href="http://bcsc-research.org/"> http://bcsc-research.org/</a>."
        </p>
        <div style={{ padding: "20px", textAlign: "right" }}>
          <Button variant="contained" href="#" style={{ textAlign: "center" }}>
            {" "}
            Get Started to Test Your Mammography{" "}
          </Button>
        </div>
      </div>
    </Page>
  );
}
