import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Link, Typography } from "@mui/material";
// routes
import { PATH_AUTH } from "../../routes/paths";
// hooks
import useResponsive from "../../hooks/useResponsive";
// components
import Page from "../../components/Page";
import { Grid, Box } from "@mui/material";
// sections
import { LoginForm } from "../../sections/auth/login";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 500,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

// ----------------------------------------------------------------------

export default function Login() {
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");

  return (
    <Page title="Login">
      <RootStyle>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <img src="/assets/loginLogo.png" alt="logo" height={"400px"} />
            </Box>
            <Typography variant="h2" sx={{ px: 5, mt: 3 }} textAlign="center">
              Log in to our <br /> community
            </Typography>
            Not a member of the community? {""}
            <Link
              variant="subtitle2"
              component={RouterLink}
              to={PATH_AUTH.register}
            >
              Join Now
            </Link>
          </Grid>

          <Grid item sm={12} md={6} sx={{ textAlign: "center" }}>
            <ContentStyle>
              <LoginForm />
            </ContentStyle>
          </Grid>
        </Grid>
      </RootStyle>
    </Page>
  );
}
