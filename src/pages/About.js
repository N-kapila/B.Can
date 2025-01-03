// @mui
import { styled } from "@mui/material/styles";
import { Divider, Box } from "@mui/material";
// components
import Page from "../components/Page";
import { AboutHero, AboutWhat, AboutVision } from "../sections/about";
import HomeHeader from "./Home/HomeHeader";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function About() {
  return (
    <Page title="About us">
      <Box>
        <HomeHeader />
      </Box>
      <RootStyle>
        <AboutHero />

        <AboutWhat />

        <AboutVision />

        <Divider
          orientation="vertical"
          sx={{ my: 10, mx: "auto", width: 2, height: 40 }}
        />
      </RootStyle>
    </Page>
  );
}
