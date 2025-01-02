import React from "react";
import { Box, Grid, Typography, Stack, Link, CardMedia } from "@mui/material";

import Image from "src/components/Image";

export default function ForYou() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        spacing={2}
        item
        xs={12}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        style={{ paddingTop: "50px" }}
      >
        <Grid item md={6}>
          <Image src="/assets/img13.jpeg" />
        </Grid>

        <Grid item md={4}>
          <Typography variant="h2" paragraph>
            Get Start with <br />
            your prediction
          </Typography>
          <Box sx={{ paddingTop: "20px" }}>
            <p>
              We provide services for medical expertise to predict <br />
              Patient risk and survival through our system.{" "}
            </p>
          </Box>

          <Box sx={{ width: "100%", paddingTop: "50px" }}>
            <Stack spacing={2}>
              <Box sx={{ display: "flex" }}>
                <Link
                  href="#"
                  underline="hover"
                  color="inherit"
                  sx={{ paddingRight: "100px" }}
                >
                  <h2>
                    Concerned <br /> About My Risk{" "}
                  </h2>
                </Link>
                <CardMedia sx={{ width: 70 }} image="/assets/img8.svg" />
              </Box>
              <hr />
              <Box sx={{ display: "flex" }}>
                <Link
                  href="#"
                  underline="hover"
                  color="inherit"
                  sx={{ paddingRight: "145px" }}
                >
                  <h2>
                    In <br /> Treatment{" "}
                  </h2>
                </Link>
                <CardMedia sx={{ width: 100 }} image="/assets/img9.png" />
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
