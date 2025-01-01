import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography } from "@mui/material";
import SocialsButton from "src/components/SocialsButton";

function BottomLinks(props) {
  return (
    <Box>
      <li
        style={{
          float: "left",
          listStyle: "none",
          padding: "0 5px 10px 0",
        }}
      >
        <a
          href="#"
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          <strong> {props.name}</strong>
        </a>
      </li>
    </Box>
  );
}

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ backgroundColor: "#E2E2E2" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        minHeight="5px"
      >
        <Grid item sm={5} sx={{ p: 5 }}>
          <h2>
            <b>
              People with breastcancer need answers,guidance,and community.
              <br />
              You can help.
            </b>
          </h2>

          <Box sx={{ padding: "10px", textAlign: "left" }}>
            <Button variant="contained">Donate</Button>
          </Box>

          <Box sx={{ mt: 2 }}>
            <BottomLinks name="Polices |" />
            <BottomLinks name="Privacy  |" />
            <BottomLinks name="Term of Use  |" />
            <BottomLinks name="Site map" />
          </Box>
        </Grid>

        <Grid item sm={5} sx={{ pt: { xs: 1, sm: 5 }, p: 5 }}>
          <Box>
            <h2>
              <b>Stay informed mail with us</b>
            </h2>
            <p>
              <b>
                By submitting my email, I agree to receive newsletter from
                Breastcancer.org
              </b>
            </p>
          </Box>
          <Box display={"flex"}>
            <TextField
              sx={{ width: "80%" }}
              id="filled-multiline-flexible"
              label="Email"
              multiline
              maxRows={4}
              variant="standard"
            />
            <IconButton aria-label="submit">
              <ArrowForwardIcon />
            </IconButton>
          </Box>

          <SocialsButton sx={{ mx: 0.5 }} />

          <Typography
            component="p"
            variant="body2"
            sx={{
              paddingTop: "20px",
              fontSize: 13,
              textAlign: { xs: "left", md: "left" },
            }}
          >
            © 2022 Breastcancer.org- All rights reserved
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
