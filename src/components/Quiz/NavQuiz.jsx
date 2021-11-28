import React, { Component } from 'react';
// import '../../style/Quiz/NavQuiz.css';
import {Link} from 'react-router-dom';
import { Box, Button, Typography, Container } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Questions from '../../questions.json';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    darkGrey: {
      main: '#303030'
    },
  },
  typography: {
    fontFamily: [
      'Monument Extended'
    ].join(','),
  },
});

let token = "";

try{
    token="Bearer "+JSON.parse(localStorage.getItem('token')).jwt;
} catch (error) {
    console.log(error);
}

let questions;

// fetch(
//     "https://recportal-iete.herokuapp.com/auth/q/",
//     {
//         method: "POST",
//         headers: { "Authorization":token, "Content-Type": "application/json" },
//         body: JSON.stringify({
//             domain: 1
//         }),
        
//     }
// )
// .then(response => response.json())
// .then(json => {
//     questions = 
// })

console.log("QUESTIONS: ",questions);

const NavQuiz = () => {
    return (
        <ThemeProvider theme={theme}>

            <Container className="container" maxWidth="xl" sx={{ height: "100%", background: "black", width: "100%", padding: "2%", margin: "2%" }}>
                
                <Box className="heading" sx={{ color: "white", padding: "5%" }} >
                    <Typography>
                        QUESTIONS: 
                    </Typography> 
                </Box>

                <Box className="quesContainer" sx={{ display: "flex", padding: "2%", flexWrap: "wrap", justifyContent: "space-around" }}>

                    {
                    Questions.map(ques => {
                        
                        return(
                            <Link key={ques.id} to={`/quiz/ques/${ques.id}`} style={{ margin: "10% 2%" }}>
                                <Button color="darkGrey" variant="contained" sx={{ width: "10%", height: "180%", borderRadius: "10px"}} > 
                                    <Typography color="white"> {ques.id} </Typography>
                                </Button>
                            </Link>
                        )
                    })
                    }
                    
                    {/* <Link to="/quiz/ques/1" style={{ margin: "10% 2%" }}>
                        <Button color="darkGrey" variant="contained" sx={{ width: "10%", height: "180%", borderRadius: "10px"}} > 
                           <Typography color="white"> 1 </Typography>
                        </Button>
                    </Link>

                    <Link to="/quiz/ques/2" style={{ margin: "10% 2%" }}>
                        <Button color="darkGrey" variant="contained" sx={{ width: "25%", height: "180%", borderRadius: "10px"}}> 
                           <Typography color="white"> 2 </Typography>
                        </Button>
                    </Link>

                    <Link to="/quiz/ques/3" style={{ margin: "10% 2%" }}>
                        <Button color="darkGrey" variant="contained" sx={{ width: "25%", height: "180%", borderRadius: "10px"}}> 
                           <Typography color="white"> 3 </Typography>
                        </Button>
                    </Link>

                    <Link to="/quiz/ques/4" style={{ margin: "10% 2%" }}>
                        <Button color="darkGrey" variant="contained" sx={{ width: "25%", height: "180%", borderRadius: "10px"}}> 
                           <Typography color="white"> 4 </Typography>
                        </Button>
                    </Link>

                    <Link to="/quiz/ques/1" style={{ margin: "10% 2%" }}>
                        <Button color="darkGrey" variant="contained" sx={{ width: "25%", height: "180%", borderRadius: "10px"}}> 
                           <Typography color="white"> 1 </Typography>
                        </Button>
                    </Link>

                    <Link to="/quiz/ques/2" style={{ margin: "10% 2%" }}>
                        <Button color="darkGrey" variant="contained" sx={{ width: "25%", height: "180%", borderRadius: "10px"}}> 
                           <Typography color="white"> 2 </Typography>
                        </Button>
                    </Link>

                    <Link to="/quiz/ques/3" style={{ margin: "10% 2%" }}>
                        <Button color="darkGrey" variant="contained" sx={{ width: "25%", height: "180%", borderRadius: "10px"}}> 
                           <Typography color="white"> 3 </Typography>
                        </Button>
                    </Link>

                    <Link to="/quiz/ques/4" style={{ margin: "10% 2%" }}>
                        <Button color="darkGrey" variant="contained" sx={{ width: "25%", height: "180%", borderRadius: "10px"}}> 
                           <Typography color="white"> 4 </Typography>
                        </Button>
                    </Link> */}
                    
                </Box>
            </Container>
        </ThemeProvider>
    )

}

export default NavQuiz