import * as React from "react";
import { useState } from "react";
import * as Yup from "yup";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import {
  Box,
  Button,
  IconButton,
  Typography,
  styled,
  Grid,
  Paper,
  Link,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Alert,
} from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { LoadingButton } from "@mui/lab";
// components
import Page from "../components/Page";
import { FormProvider, RHFTextField } from "src/components/hook-form";

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

export default function CalculateRiskForm() {
  const RegisterSchema = Yup.object().shape({
    age: Yup.mixed()
      .required()
      .oneOf(
        [
          "35-39",
          "40-44",
          "45-49",
          "50-54",
          "55-59",
          "60-64",
          "65-69",
          "70-74",
          "75-79",
          "80-84",
        ],
        "Invalid Age"
      ),
  });

  const defaultValues = {
    age: "",
  };
  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (input) => {
    try {
      console.log(input);
    } catch (error) {
      setError("afterSubmit", { ...error, message: error.message });
    }
  };

  const [age, setAge] = React.useState();
  const [race, setRace] = React.useState("");
  const [history, setHistory] = React.useState("");
  const [ageMenarche, setAgeMenarche] = React.useState("");
  const [ageFBirth, setAgeFBirth] = React.useState("");
  const [bIRads, setBIRads] = React.useState("");
  const [hormone, setHormone] = React.useState("");
  const [monopausal, setMonopausal] = React.useState("");
  const [BMI, setBMI] = React.useState("");
  const [preBreast, setPreBreast] = React.useState("");
  const [priBreast, setPriBreast] = React.useState("");

  return (
    <Page title="Calculate Risk Form">
      <ContentStyle>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {" "}
            <IconButton>
              <ArrowCircleLeftOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h3" paragraph>
              Calculate Risk Level
            </Typography>
          </Grid>
        </Grid>
      </ContentStyle>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
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
                  {/* <RHFTextField name="age" label="First name" /> */}

                  <h3 style={{ paddingTop: "20px" }}>Age Group</h3>
                  <FormControl fullWidth>
                    <InputLabel>Age</InputLabel>
                    <Select
                      name="age"
                      value={age}
                      label="Age"
                      onChange={(event) => setAge(event.target.value)}
                      sx={{ backgroundColor: "white" }}
                    >
                      <MenuItem value={1}> 35-39</MenuItem>
                      <MenuItem value={2}> 40-44</MenuItem>
                      <MenuItem value={3}> 45-49</MenuItem>
                      <MenuItem value={4}> 50-54</MenuItem>
                      <MenuItem value={5}> 55-59</MenuItem>
                      <MenuItem value={6}> 60-64</MenuItem>
                      <MenuItem value={7}> 65-69</MenuItem>
                      <MenuItem value={8}> 70-74</MenuItem>
                      <MenuItem value={9}> 75-79</MenuItem>
                      <MenuItem value={10}> 80-84</MenuItem>
                    </Select>
                  </FormControl>

                  <h3 style={{ paddingTop: "20px" }}>Race/Ethicity</h3>
                  <FormControl fullWidth>
                    <InputLabel>Select your age race...</InputLabel>
                    <Select
                      value={race}
                      label="Select your age race..."
                      onChange={(event) => setRace(event.target.value)}
                      sx={{ backgroundColor: "white" }}
                    >
                      <MenuItem value={1}> White</MenuItem>
                      <MenuItem value={2}> Asian/Pacific Islander</MenuItem>
                      <MenuItem value={3}> Black</MenuItem>
                      <MenuItem value={4}> Native American</MenuItem>
                      <MenuItem value={5}> Other/mixed</MenuItem>
                      <MenuItem value={9}> Unknown</MenuItem>
                    </Select>
                  </FormControl>

                  <h3 style={{ paddingTop: "20px" }}>
                    History of breast cancer in a first degree relative
                  </h3>
                  <FormControl fullWidth>
                    <InputLabel>Select your history</InputLabel>
                    <Select
                      value={history}
                      label="Select your history"
                      onChange={(event) => setHistory(event.target.value)}
                      sx={{ backgroundColor: "white" }}
                    >
                      <MenuItem value={9}> Unknown</MenuItem>
                    </Select>
                  </FormControl>

                  <h3 style={{ paddingTop: "20px" }}>
                    Age (years) at menarche
                  </h3>
                  <FormControl fullWidth>
                    <InputLabel>Select your age...</InputLabel>
                    <Select
                      value={ageMenarche}
                      label="Select your age..."
                      onChange={(event) => setAgeMenarche(event.target.value)}
                      sx={{ backgroundColor: "white" }}
                    >
                      <MenuItem value={9}> Unknown</MenuItem>
                    </Select>
                  </FormControl>

                  <h3 style={{ paddingTop: "20px" }}>
                    Age (years) at first birth
                  </h3>
                  <FormControl fullWidth>
                    <InputLabel>Select your age...</InputLabel>
                    <Select
                      value={ageFBirth}
                      label="Select your age..."
                      onChange={(event) => setAgeFBirth(event.target.value)}
                      sx={{ backgroundColor: "white" }}
                    >
                      <MenuItem value={0}> {"Age < 30"}</MenuItem>
                      <MenuItem value={1}> Age 30 or greater</MenuItem>
                      <MenuItem value={2}> Nulliparous</MenuItem>
                      <MenuItem value={9}> Unknown</MenuItem>
                    </Select>
                  </FormControl>

                  <h3 style={{ paddingTop: "20px" }}>BI-RADS breast density</h3>
                  <FormControl fullWidth>
                    <InputLabel>Select your breast density...</InputLabel>
                    <Select
                      value={bIRads}
                      label="Select your breast density..."
                      onChange={(event) => setBIRads(event.target.value)}
                      sx={{ backgroundColor: "white" }}
                    >
                      <MenuItem value={1}> Almost entirely fat</MenuItem>
                      <MenuItem value={2}>
                        {" "}
                        Scattered fibroglandular densities
                      </MenuItem>
                      <MenuItem value={3}> Heterogeneously dense</MenuItem>
                      <MenuItem value={4}> Extremely dense</MenuItem>
                      <MenuItem value={9}>
                        {" "}
                        Unknown or different measurement system
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item sm={5}>
                  <h3 style={{ paddingTop: "20px" }}>
                    Use of hormone replacement therapy
                  </h3>
                  <FormControl fullWidth>
                    <InputLabel>Select value...</InputLabel>
                    <Select
                      value={hormone}
                      label="Select value..."
                      onChange={(event) => setHormone(event.target.value)}
                      sx={{ backgroundColor: "white" }}
                    >
                      <MenuItem value={0}> No</MenuItem>
                      <MenuItem value={1}> Yes</MenuItem>
                      <MenuItem value={9}>
                        {" "}
                        Unknown or not menopausal (menopaus=0 or menopaus=9)
                      </MenuItem>
                    </Select>
                  </FormControl>

                  <h3 style={{ paddingTop: "20px" }}>Monopausal status</h3>
                  <FormControl fullWidth>
                    <InputLabel>Select your monopausal status...</InputLabel>
                    <Select
                      value={monopausal}
                      label="Select your monopausal status..."
                      onChange={(event) => setMonopausal(event.target.value)}
                      sx={{ backgroundColor: "white" }}
                    >
                      <MenuItem value={0}> Premenopausal</MenuItem>
                      <MenuItem value={1}>
                        {" "}
                        {"postmenopausal or age>=55"}
                      </MenuItem>
                      <MenuItem value={9}>Unknown</MenuItem>
                    </Select>
                  </FormControl>

                  <h3 style={{ paddingTop: "20px" }}>BMI Group</h3>
                  <FormControl fullWidth>
                    <InputLabel>Select your BMI Group</InputLabel>
                    <Select
                      value={BMI}
                      label="Select your BMI Group"
                      onChange={(event) => setBMI(event.target.value)}
                      sx={{ backgroundColor: "white" }}
                    >
                      <MenuItem value={1}> 10-24.99</MenuItem>
                      <MenuItem value={2}> 25-29.99</MenuItem>
                      <MenuItem value={3}> 30-34.99</MenuItem>
                      <MenuItem value={4}> 35 or more</MenuItem>
                      <MenuItem value={9}>Unknown</MenuItem>
                    </Select>
                  </FormControl>

                  <h3 style={{ paddingTop: "20px" }}>
                    Previous breast biopsy or aspiration
                  </h3>
                  <FormControl fullWidth>
                    <InputLabel>Select your status...</InputLabel>
                    <Select
                      value={preBreast}
                      label="Select your status..."
                      onChange={(event) => setPreBreast(event.target.value)}
                      sx={{ backgroundColor: "white" }}
                    >
                      <MenuItem value={0}> No</MenuItem>
                      <MenuItem value={1}> Yes</MenuItem>
                      <MenuItem value={9}>Unknown</MenuItem>
                    </Select>
                  </FormControl>

                  <h3 style={{ paddingTop: "20px" }}>
                    Prior breast cancer diagnosis
                  </h3>
                  <FormControl fullWidth>
                    <InputLabel>Select your status...</InputLabel>
                    <Select
                      value={priBreast}
                      label="Select your status..."
                      onChange={(event) => setPriBreast(event.target.value)}
                      sx={{ backgroundColor: "white" }}
                    >
                      <MenuItem value={0}> No</MenuItem>
                      <MenuItem value={1}> Yes</MenuItem>
                      <MenuItem value={9}>Unknown</MenuItem>
                    </Select>
                  </FormControl>

                  <Box sx={{ padding: "40px", textAlign: "center" }}>
                    <LoadingButton
                      size="large"
                      type="submit"
                      variant="contained"
                      loading={isSubmitting}
                    >
                      Calculate Risk Level{" "}
                    </LoadingButton>
                  </Box>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </FormProvider>
      <Link href="#" underline="hover" color="error" padding={"0 0 50px 120px"}>
        <b>{"Result :"} </b>
      </Link>
    </Page>
  );
}
