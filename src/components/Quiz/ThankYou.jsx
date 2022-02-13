import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    greenUsed: {
      main: "#009254",
    },
    blackOptions: {
      main: "#4D4D4D",
    },
    whiteUsed: {
      main: "#ffffff",
    },
    finishButton: {
      main: "#22424D",
    },
  },
  typography: {
    fontFamily: ["Poppins", "Monument Extended"].join(","),
  },
});

// let token;

// try {
//   token = "Bearer " + JSON.parse(localStorage.getItem("token")).jwt;
// } catch (error) {
//   console.log(error);
// }

const ThankYou = () => {
  console.log("INSIDE THANKYOU");

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ width: "90%" }}>
        <Typography
          variant="h3"
          fontFamily="Monument Extended"
          sx={{ textAlign: "center", color: "white", marginTop: "15%" }}
        >
          THANK YOU FOR YOUR RESPONSE
        </Typography>

        <Typography
          variant="h4"
          fontFamily="Poppins"
          sx={{
            textAlign: "center",
            color: "#009254",
            marginTop: "2%",
            marginBottom: "15%",
          }}
        >
          Hope to see you in the next Round :)
        </Typography>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#22424D",
              width: "25%",
              padding: "1%",
              marginLeft: "35%",
              marginTop: "15%",
              borderRadius: "10px",
            }}
          >
            <Typography
              fontFamily="Monument Extended"
              sx={{ fontSize: "150%", letterSpacing: "7px" }}
            >
              HOME
            </Typography>
          </Button>
        </Link>
      </Container>
    </ThemeProvider>
  );
};

export default ThankYou;
