import React,{useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import { Typography, Container, Box, List, ListItemText } from '@mui/material';
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
      }
    },
    fontFamily: [
        'Poppins',
        'Monument Extended'
    ].join(','),
});

let token = "";
let duration = 0;

try{
    token="Bearer "+JSON.parse(localStorage.getItem('token')).jwt;
} catch (error) {
    console.log(error);
}

const ReadyPage = () => {

    const [submitted, setSubmitted] = useState(false);
    const [duration, setDuration] = useState(false);

    useEffect( async () => {
        await fetch(
            "https://recportal-iete.herokuapp.com/auth/q/",
            {
                method: "POST",
                headers: { "Authorization":token, "Content-Type": "application/json" },
                body: JSON.stringify({
                    domain: localStorage.getItem("domain")
                }),
            }
        )
        .then(response => response.json())
        .then(json => {
            console.log(json);
            console.log(json.message)
            console.log("SUBMITTED: ",submitted);
            if (json.message === "Test Submitted"){
                console.log("Inside Submitted");
                setSubmitted(true);
            } else {
                setDuration(json.totalduration);
            }           
            console.log("SUBMITTED: ",submitted);
        })
    })

    return (
        
        (submitted === true) ? 
            <ThemeProvider theme= {theme}>
                <Typography variant="h3" align="center" gutterBottom color="white" sx={{ fontFamily: "Monument Extended", margin: "15% 0% 5% 0%" }}>
                    THANK YOU FOR YOUR RESPONSE
                </Typography>

                <Typography variant="h4" align="center" color="#4ECB71" gutterBottom sx={{ fontFamily: "Poppins", margin: "5% 0% 5% 0%" }}>
                    Hope to see you in the next round ;)
                </Typography>
            </ThemeProvider>
        :
        <ThemeProvider theme= {theme}>
            
            <Container maxWidth="xxl" sx={{ background: "black", padding: "5% 3% 2% 3%", width: "100%"}}>

                <Typography variant="h3" align="center" gutterBottom color="white" sx={{ fontFamily: "Monument Extended", margin: "0% 0% 5% 0%" }}>
                    QUIZ INSTRUCTIONS
                </Typography>

                <Box sx={{display: 'flex', justifyContent: 'space-between', color: 'white', margin: "2% 5%"}}>
                    <Typography variant="h6" gutterBottom sx={{ fontFamily: "Monument Extended" }}>
                        Instructions
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontFamily: "Monument Extended" }}>
                        TIME: {duration} MIN
                    </Typography> 
                </Box>

                <List sx={{ width: "75%", mx: "12.5%", color: "white", fontSize: 20 }}>
                    <ListItemText sx={{ padding: "2%" }}>
                        <Typography sx={{ fontFamily: "Poppins" }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus provident, temporibus commodi id quam nobis. Sit ab impedit voluptatibus, laboriosam rerum neque et nulla eveniet!
                        </Typography> 
                    </ListItemText>
                    <ListItemText sx={{ padding: "2%" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus provident, temporibus commodi id quam nobis. Sit ab impedit voluptatibus, laboriosam rerum neque et nulla eveniet!
                    </ListItemText>
                    <ListItemText sx={{ padding: "2%" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus provident, temporibus commodi id quam nobis. Sit ab impedit voluptatibus, laboriosam rerum neque et nulla eveniet!
                    </ListItemText>
                    <ListItemText sx={{ padding: "2%" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus provident, temporibus commodi id quam nobis. Sit ab impedit voluptatibus, laboriosam rerum neque et nulla eveniet!
                    </ListItemText>
                </List>

                <Link to="/quiz/ques/1" >

                    <Button variant="contained" underline="none" sx={{ textDecoration: "none", background: "#009254", padding: "1%", margin: "5% 42% 0% 42%", fontFamily: "Monument Extended" }}>
                        START QUIZ
                    </Button>

                </Link>

            </Container>
        </ThemeProvider>
    )
}

export default ReadyPage;