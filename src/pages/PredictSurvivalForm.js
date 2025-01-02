import * as React from "react";
// @mui
import {
  Box,
  Button,
  Typography,
  styled,
  Grid,
  Paper,
  Link,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
// components
import Page from "../components/Page";
import HomeHeader from "./Home/HomeHeader";

// ----------------------------------------------------------------------
const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(6, 0, 3, 0),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F1F1F1",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

export default function PredictSurvivalForm() {
  const [age, setAge] = React.useState("");
  const [surgery, setSergery] = React.useState("");
  const [cancerType, setCancerType] = React.useState("");
  const [cellularity, setCellularity] = React.useState("");
  const [chemotherapy, setChemotherapy] = React.useState("");
  const [ER, setER] = React.useState("");
  const [HER2, setHER2] = React.useState("");
  const [hormone, setHormone] = React.useState("");
  const [radio, setRadio] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [tumorSize, setTumorSize] = React.useState("");
  const [tumorStage, setTumorStage] = React.useState("");

  return (
    <Page title="Predict Survival Form">
      <Box sx={{ mb: 5 }}>
        <HomeHeader />
      </Box>
      <ContentStyle>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ textAlign: "center" }}></Grid>
          <Grid item xs={8}>
            <Typography variant="h3" paragraph>
              Predict Survival
            </Typography>
          </Grid>
        </Grid>
      </ContentStyle>

      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        style={{ paddingBottom: "40px" }}
      >
        <Grid item sm={10}>
          <Item>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="flex-start"
            >
              <Grid item sm={5} style={{ paddingBottom: "20px" }}>
                <h3 style={{ paddingTop: "20px" }}>Age at Diadnosis</h3>
                <FormControl fullWidth>
                  <InputLabel>Select your age...</InputLabel>
                  <Select
                    value={age}
                    label="Select your age..."
                    onChange={(event) => setAge(event.target.value)}
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value={9}> Unknown</MenuItem>
                  </Select>
                </FormControl>

                <h3 style={{ paddingTop: "20px" }}>Type of Breast Surgery</h3>
                <FormControl fullWidth>
                  <InputLabel>Select your type of breast surgery...</InputLabel>
                  <Select
                    value={surgery}
                    label="Select your type of breast surgery..."
                    onChange={(event) => setSergery(event.target.value)}
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value={9}> Unknown</MenuItem>
                  </Select>
                </FormControl>

                <h3 style={{ paddingTop: "20px" }}>Cancer Type Surgery</h3>
                <FormControl fullWidth>
                  <InputLabel>Select your type detailed...</InputLabel>
                  <Select
                    value={cancerType}
                    label="Select your type detailed..."
                    onChange={(event) => setCancerType(event.target.value)}
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value={9}> Unknown</MenuItem>
                  </Select>
                </FormControl>

                <h3 style={{ paddingTop: "20px" }}>Cellularity form</h3>
                <FormControl fullWidth>
                  <InputLabel>Select cellularity...</InputLabel>
                  <Select
                    value={cellularity}
                    label="Select cellularity..."
                    onChange={(event) => setCellularity(event.target.value)}
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value={9}> Unknown</MenuItem>
                  </Select>
                </FormControl>

                <h3 style={{ paddingTop: "20px" }}>
                  Has chemotherapy been done?
                </h3>
                <FormControl fullWidth>
                  <InputLabel>Select...</InputLabel>
                  <Select
                    value={chemotherapy}
                    label="Select..."
                    onChange={(event) => setChemotherapy(event.target.value)}
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value={9}> Unknown</MenuItem>
                  </Select>
                </FormControl>

                <h3 style={{ paddingTop: "20px" }}>ER status</h3>
                <FormControl fullWidth>
                  <InputLabel>Select ER status...</InputLabel>
                  <Select
                    value={ER}
                    label="Select ER status..."
                    onChange={(event) => setER(event.target.value)}
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value={9}> Unknown</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item sm={5}>
                <h3 style={{ paddingTop: "20px" }}>HER2 Status</h3>
                <FormControl fullWidth>
                  <InputLabel>Select HER2 Status...</InputLabel>
                  <Select
                    value={HER2}
                    label="Select HER2 Status..."
                    onChange={(event) => setHER2(event.target.value)}
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value={9}> Unknown</MenuItem>
                  </Select>
                </FormControl>

                <h3 style={{ paddingTop: "20px" }}>
                  Has Hormone Therapy been done?
                </h3>
                <FormControl fullWidth>
                  <InputLabel>Select...</InputLabel>
                  <Select
                    value={hormone}
                    label="Select..."
                    onChange={(event) => setHormone(event.target.value)}
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value={9}> Unknown</MenuItem>
                  </Select>
                </FormControl>

                <h3 style={{ paddingTop: "20px" }}>
                  Has Radio Therapy been done?
                </h3>
                <FormControl fullWidth>
                  <InputLabel>Select...</InputLabel>
                  <Select
                    value={radio}
                    label="Select..."
                    onChange={(event) => setRadio(event.target.value)}
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value={9}> Unknown</MenuItem>
                  </Select>
                </FormControl>

                <h3 style={{ paddingTop: "20px" }}>Sex</h3>
                <FormControl fullWidth>
                  <InputLabel>Select sex...</InputLabel>
                  <Select
                    value={sex}
                    label="Select sex..."
                    onChange={(event) => setSex(event.target.value)}
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value={9}> Unknown</MenuItem>
                  </Select>
                </FormControl>

                <h3 style={{ paddingTop: "20px" }}>Tumor Size</h3>
                <FormControl fullWidth>
                  <InputLabel>Select tumor size...</InputLabel>
                  <Select
                    value={tumorSize}
                    label="Select tumor size..."
                    onChange={(event) => setTumorSize(event.target.value)}
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value={9}> Unknown</MenuItem>
                  </Select>
                </FormControl>

                <h3 style={{ paddingTop: "20px" }}>Tumor Stage</h3>
                <FormControl fullWidth>
                  <InputLabel>Select tumor stage...</InputLabel>
                  <Select
                    value={tumorStage}
                    label="Select tumor stage..."
                    onChange={(event) => setTumorStage(event.target.value)}
                    sx={{ backgroundColor: "white" }}
                  >
                    <MenuItem value={9}> Unknown</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Box style={{ padding: "20px", textAlign: "center" }}>
              <Button
                variant="contained"
                href="#"
                style={{ textAlign: "center" }}
              >
                {" "}
                Predict Survial{" "}
              </Button>
            </Box>
          </Item>
        </Grid>
      </Grid>
      <Link href="#" underline="hover" color="error" padding={"0 0 50px 120px"}>
        <b>{"Result :"} </b>
      </Link>
    </Page>
  );
}
