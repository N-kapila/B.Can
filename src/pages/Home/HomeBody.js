import { m } from "framer-motion";
import * as React from "react";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// components
import Image from "src/components/Image";

// ----------------------------------------------------------------------

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text,
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0, 2, 0),
}));

function Textf(props) {
  return (
    <Box
      sx={{
        backgroundColor: "#e6bdf4  ",
        borderRadius: "5%",
        textAlign: "center",
        p: 1,
      }}
    >
      <Box item sm={5}>
        <h2 style={{ padding: "10px" }}> {props.sub}</h2>
      </Box>
      <Box
        item
        sm={3}
        xs={0}
        sx={{
          display: { sm: "block" },
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {props.image && (
          <img
            src={props.image}
            alt="Description"
            style={{
              maxWidth: "100%",
              borderRadius: "5%",
              height: "100px",
              display: "block", // Ensures the image behaves like a block element
              marginLeft: "auto", // Center image horizontally
              marginRight: "auto", // Center image horizontally
            }}
          />
        )}
      </Box>

      <Box style={{ textAlign: "center" }}>
        <p>{props.des}</p>
      </Box>
      <Box style={{ textAlign: "right" }}>
        <IconButton aria-label="submit" style={{ padding: "10px" }}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

export default function HomeBody() {
  return (
    <container>
      <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
        <m.div style={{ width: "80%" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              paddingBottom: "100px",
            }}
          >
            <Grid item sm={6}>
              <Item>
                <h1>
                  We Are Ready To Help {"&"} Take Care Your Breast Canser Health{" "}
                </h1>
                <p>
                  {" "}
                  Trusted guidance when us most. Because no one should face
                  breast cancer alone.
                </p>
                <Box
                  sx={{
                    pt: "20px",
                  }}
                >
                  <Button variant="outlined" href="#">
                    {" "}
                    About us
                  </Button>
                </Box>
              </Item>
            </Grid>
            <Grid item sm={6}>
              <Item>
                <Image src="/assets/img1.jpg" />
              </Item>
            </Grid>
          </Grid>

          <Grid
            container
            direction={{ xs: "row", sm: "row-reverse" }}
            justifyContent="center"
            alignItems="center"
            style={{ paddingBottom: "100px" }}
          >
            <Grid item sm={6}>
              <Item>
                <h1>
                  We Are Ready To Help {"&"} Take Care Your Breast Canser Health{" "}
                </h1>
                <p>
                  {" "}
                  Marisa C. Weiss, MD, founded Breastcancer.org because cancer
                  patients need more time to ask critical questions about their
                  care than what's typically provided during a doctor's
                  appointment. Today, Breastcancer.org is an education and
                  support lifeline for millions of people affected by breast
                  cancer. As a digital resource, we're here for everyone, in all
                  corners of the world, at any time of the day or night. We help
                  people find reliable answers to questions about their risk,
                  diagnosis, treatment plan, surgical options, and more so they
                  can live a full life beyond breast cancer.
                </p>

                <Box sx={{ textAlign: "left", padding: "20px" }}>
                  <Button variant="contained" href="#">
                    {" "}
                    Learn More
                  </Button>
                </Box>
              </Item>
            </Grid>
            <Grid item sm={6}>
              <Item>
                <Stack spacing={2}>
                  <Item>
                    <Image
                      sx={{ width: "100%", height: 200 }}
                      src="/assets/img2.png"
                    />
                  </Item>
                  <Item>
                    {" "}
                    <Image
                      sx={{ width: "100%", height: 200 }}
                      src="/assets/img3.png"
                    />
                  </Item>
                </Stack>
              </Item>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ paddingBottom: "20px" }}
          >
            <Grid item sm={6}>
              <Item>
                <h3 style={{ color: "purple" }}>About You</h3>

                <h1>We Are Provide Modern Service Care... </h1>
                <p>
                  {" "}
                  After skin cancer, breast cancer is the most common cancer
                  diagnosed in women in the United States. Breast cancer can
                  occur in both men and women, but it's far more common in
                  women.
                </p>
              </Item>
            </Grid>
            <Grid item sm={6}>
              <Item>
                <Image
                  sx={{ width: "100%", height: 200 }}
                  src="/assets/img4.webp"
                />
              </Item>
            </Grid>
          </Grid>

          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={2}
          >
            <Item>
              <Textf
                sub="Concerned about my risk "
                des=" A variety of factors can contribute to an individual's breast cancer risk. Learn about your risk leveland how you can take to lower your risk."
                image="/assets/img8.svg"
              />
            </Item>
            <Item>
              <Textf
                sub="In treatment "
                des="Learn how to effectively work with your doctors, manage potential side effects, and navigate the many changes in your daily life while undergoing "
                image="/assets/img9.png"
              />
            </Item>
            <Item>
              <Textf
                sub="Hope chat"
                des=" Hope is a chat-bot based on Knowledge Based designed to prescreen women for female breast cancer symptoms via a textual question answer   "
                image="/assets/img10.png"
              />
            </Item>
          </Stack>
        </m.div>
      </ContentStyle>
    </container>
  );
}
