import { m } from "framer-motion";
import React from "react";
import NavbarVertical from "src/layouts/dashboard/navbar/NavbarVertical";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography, Link } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// components
import Image from "src/components/Image";
import Page from "src/components/Page";

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
}));

export default function AdminMammography3() {
  return (
    <Page title="Mommography 3">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <NavbarVertical />
          </Grid>

          <Grid item xs={8}>
            <Typography variant="h3" sx={{ padding: "50px" }}>
              Prediction of benign and malignant breast cancer
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              // sx={{ backgroundColor: "ThreeDFace" }}
              sm={12}
            >
              <Grid item sm={5}>
                <Item>
                  <h1 style={{ color: "blue", paddingBottom: "20px" }}>
                    Do I need a <br />
                    mammogram?
                  </h1>

                  <Stack direction="row" spacing={2}>
                    <Item>
                      <Image
                        style={{ width: 100, height: 100, borderRadius: "50%" }}
                        src="/assets/illustrations/illustration_login.png"
                      />
                    </Item>
                    <Item>
                      <p>
                        Clarifying the <br />
                        confusion about who <br />
                        should be screened and how often.
                      </p>
                    </Item>
                  </Stack>
                  <Button variant="contained" href="#">
                    {" "}
                    Read More
                  </Button>
                </Item>
              </Grid>

              <Grid item sm={5}>
                <Item>
                  <h1 style={{ color: "blue", paddingBottom: "20px" }}>
                    Your first <br />
                    mammogram
                  </h1>

                  <Stack direction="row" spacing={2}>
                    <Item>
                      <Image
                        style={{ width: 100, height: 100, borderRadius: "50%" }}
                        src="/assets/illustrations/illustration_login.png"
                      />
                    </Item>
                    <Item>
                      <p>
                        What to expect and how to prepare
                        <br /> for your first screening mammogram.
                      </p>
                    </Item>
                  </Stack>
                  <Button variant="contained" href="#">
                    {" "}
                    Read More{" "}
                  </Button>
                </Item>
              </Grid>
            </Grid>
            <Box sx={{ textAlign: "center", padding: "50px" }}>
              <CloudUploadIcon />
              <br />
              <Link href="#" underline="hover">
                <b>{"Upload file"} </b>
              </Link>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button variant="contained" href="#">
                {" "}
                Predict{" "}
              </Button>
            </Box>

            <Link href="#" underline="hover" color="error">
              <b>{"Result"} </b>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
}
