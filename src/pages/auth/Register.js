import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Link, Typography } from "@mui/material";
// hooks
import useResponsive from "../../hooks/useResponsive";
// routes
import { PATH_AUTH } from "../../routes/paths";
// components
import Page from "../../components/Page";
// sections
import { RegisterForm } from "../../sections/auth/register";
import { Icon } from "@iconify/react";

import Grid from "@mui/material/Grid";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");

  return (
    <Page title="Register">
      <RootStyle>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid
            item
            sm={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{ px: 5, mt: 10, mb: 3 }}
              textAlign="center"
            >
              Join our <br />
              community
            </Typography>

            <Box>
              <img src="/assets/loginLogo.png" alt="logo" height={"300px"} />
            </Box>

            <Box>
              <ul>
                <Icon icon="arcticons:nrf-connect" inline={true} /> Connect with
                community members for support and practical information{" "}
              </ul>{" "}
              <br />
              <ul>
                <Icon icon="ic:outline-saved-search" inline={true} /> Get
                answers to your questions from people with shared experience{" "}
              </ul>
              <br />
              <ul>
                <Icon icon="mdi:paper-text-outline" inline={true} /> Information
                peronalized for you. delivered directly to you
              </ul>
              <br />
              Already member of the community? {""}
              <Link
                variant="subtitle2"
                component={RouterLink}
                to={PATH_AUTH.login}
              >
                Log in Now
              </Link>
            </Box>
          </Grid>

          <Grid item sm={6} sx={{ padding: "40px 0 20px 0" }}>
            <RegisterForm />
          </Grid>
        </Grid>
      </RootStyle>
    </Page>
  );
}
