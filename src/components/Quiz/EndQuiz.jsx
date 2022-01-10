import React from 'react';
import { Typography, Button, Box, Container, TextField} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      greenUsed: {
        main: '#009254'
      },
      blackOptions: {
          main: '#4D4D4D'
      },
      whiteUsed: {
          main: "#ffffff"
      },
      finishButton: {
          main: "#22424D"
      }
    },
    typography: {
      fontFamily: [
          'Poppins',
        'Monument Extended'
      ].join(','),
    },
  });

const EndQuiz = () => {
    console.log("INSIDE ENDQUIZ");

    let ans=0;
    let not_ans=0;

    return (
        <ThemeProvider theme={ theme }>
            <Container sx={{ width: "90%" }}>
                
                <Typography variant="h3" fontFamily="Monument Extended" sx={{ textAlign: "center", color: "white", marginTop: "15%" }}>
                    THANK YOU FOR YOUR RESPONSE
                </Typography>

                <Typography variant="h4" fontFamily="Poppins" sx={{ textAlign: "center", color: "#009254", marginTop: "2%", marginBottom: "15%" }}>
                    Hope to see you in the next round
                </Typography>

                <Box sx={{ display: "inline", marginTop: "20%", backgroundColor: "#4D4D4D", boxShadow: "5px 5px 5px #009254", padding: "1.5%", margin: "5%", color:"white", borderRadius: "10px" }}>
                    4
                </Box>

                <Typography variant="h5" fontFamily="Poppins" sx={{ textAlign: "center", color: "white", marginTop: "2%", display: "inline", margin: "2%", marginRight: "5%" }}>
                    No of questions attempted
                </Typography>

                <Box sx={{ display: "inline", marginTop: "20%", backgroundColor: "#4D4D4D", boxShadow: "5px 5px 5px red", padding: "1.5%", margin: "5%", color:"white", borderRadius: "10px" }}>
                    2
                </Box>

                <Typography variant="h5" fontFamily="Poppins" sx={{ textAlign: "center", color: "white", marginTop: "2%", display: "inline" }}>
                    No of questions not attempted
                </Typography>

                <Button variant="contained" sx={{ backgroundColor: "#22424D", width: "25%", padding: "1%", marginLeft: "35%", marginTop: "15%", borderRadius: "10px" }}>
                    <Typography fontFamily="Monument Extended" sx={{  fontSize: "150%", letterSpacing: "7px" }}> FINISH </Typography>
                </Button>

            </Container>
        </ThemeProvider>
    )
}

export default EndQuiz