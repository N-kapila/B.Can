import PropTypes from "prop-types";
import { m } from "framer-motion";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  LinearProgress,
} from "@mui/material";
// hooks
import useResponsive from "../../hooks/useResponsive";
// utils
import { fPercent } from "../../utils/formatNumber";
// _mock_
import { _skills } from "../../_mock";
// components
import Image from "../../components/Image";
import Iconify from "../../components/Iconify";
import { MotionViewport, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

// ----------------------------------------------------------------------

export default function AboutWhat() {
  const theme = useTheme();

  const isDesktop = useResponsive("up", "md");

  const isLight = theme.palette.mode === "light";

  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.48
  )}`;

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Grid container spacing={3}>
          {isDesktop && (
            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="our office 1"
                      src="assets/img15.avif"
                      ratio="3/4"
                      sx={{
                        borderRadius: 2,
                        boxShadow: shadow,
                      }}
                    />
                  </m.div>
                </Grid>
                <Grid item xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="our office 2"
                      src="assets/img16.avif"
                      ratio="1/1"
                      sx={{ borderRadius: 2 }}
                    />
                  </m.div>
                </Grid>
              </Grid>
            </Grid>
          )}

          <Grid item xs={12} md={6} lg={5}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                What is breastcancer.org?
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? "text.secondary"
                      : "common.white",
                }}
              >
                Breast cancer is the world's most common cancer. Together, we
                can make a difference in the lives of millions. You can
                help.Breastcancer.org is easy to use, unbiased and reassuring. I
                trust that the information is accurate and that as a nonprofit,
                they act in the best interest of people who need reliable
                information in order to make important decisions. I am proud to
                be a donor that supports their efforts. Breastcancer.org was
                there when I needed them most.
              </Typography>
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

function ProgressItem({ progress }) {
  const { label, value } = progress;

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: "flex", alignItems: "center" }}>
        <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {fPercent(value)}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          "& .MuiLinearProgress-bar": { bgcolor: "grey.700" },
          "&.MuiLinearProgress-determinate": { bgcolor: "divider" },
        }}
      />
    </Box>
  );
}
