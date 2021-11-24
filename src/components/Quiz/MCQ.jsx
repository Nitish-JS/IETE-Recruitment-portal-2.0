import React, { useState} from 'react';
import { useParams } from 'react-router';
import { Typography, Button, Box, Container, TextField } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Link } from 'react-router-dom';


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
    typography: {
      fontFamily: [
          'Poppins',
        'Monument Extended'
      ].join(','),
    },
  });


export default function MCQ(props) {
    var { ques, bkcolor1, bkcolor2, bkcolor3, bkcolor4, len } = props
    var setQuestions, setBkcolor1, setBkcolor2, setBkcolor3, setBkcolor4;
    [ques, setQuestions] = useState(ques);
    [bkcolor1,setBkcolor1] = useState('blackOptions');
    [bkcolor2,setBkcolor2] = useState('blackOptions');
    [bkcolor3,setBkcolor3] = useState('blackOptions');
    [bkcolor4,setBkcolor4] = useState('blackOptions');

    return (
        <ThemeProvider theme={theme}>
            <Container sx={{ width: "70%" }}>
                <div style={{ background: "black"}}>
                    {/* {setAllStates} */}
                    
                    <Typography fontFamily="Monument Extended" sx={{ color: "white", textAlign: "center", padding: "10% 0% 5% 0%", fontSize: "150%" }}> 
                        TEST YOUR KNOWLEDGE
                    </Typography>

                    <Typography variant="h5" fontFamily="Monument extended" color="white" sx={{ padding: "0% 2% 5% 2%" }}> Section 1</Typography>

                    <Typography fontFamily="Poppins" variant="h5" color="#009254" sx={{ display: "inline", margin: "5% 2%", padding: "2% 2%" }}>
                        Question: {ques.id} &nbsp;
                    </Typography> 

                    <Typography fontFamily="Poppins" variant="h5" sx={{ display: "inline", margin: "2% 0%", color: "white" }} >
                        {ques.ques_main}
                    </Typography>


                    <Box sx={{ display: "flex", justifyContent: "space-around", padding: "5% 0%" }}>
                        <Button variant="contained" color={bkcolor1} sx={{ padding:"1% 4%", margin:"5% 8%", borderRadius: "10px", color: "white", width: "20%", borderColor: "green" }} onClick={() => {
                            ques.selected = ques.options[0].option;

                            if (ques.options[0].option === ques.selected) {
                                setBkcolor1("greenUsed");
                                
                            } else {
                                setBkcolor1("blackOptions");
                            }

                            console.log("Answer selected: "+ques.selected);
                        }}>
                            {ques.options[0].option}
                        </Button>

                        <Button variant="contained" color={bkcolor2} sx={{ padding:"1% 4%", margin:"5% 8%", borderRadius: "10px", color: "white", width: "20%" }} onClick={() => {
                            ques.selected = ques.options[1].option;

                            if (ques.options[1].option === ques.selected) {
                                setBkcolor2("greenUsed");
                            } else {
                                setBkcolor2("blackOptions");

                            }
                            
                            console.log("Answer selected: "+ques.selected);
                        }}>
                            {ques.options[1].option}
                        </Button>
                    </Box>
                        
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Button variant="contained" color={bkcolor3} sx={{ padding:"1% 4%", margin:"5% 8%", borderRadius: "10px", color: "white", width: "20%" }} onClick={() => {
                            ques.selected = ques.options[2].option;

                            if (ques.options[2].option === ques.selected) {
                                setBkcolor3("greenUsed");
                            } else {
                                setBkcolor3("blackOptions");
                            }
                            
                            console.log("Answer selected: "+ques.selected);
                        }}>
                            {ques.options[2].option}
                        </Button>

                        <Button variant="contained" color={bkcolor4} sx={{ padding:"1% 4%", margin:"5% 8%", borderRadius: "10px", color: "white", width: "20%" }} onClick={() => {
                            ques.selected = ques.options[3].option;

                            if (ques.options[3].option === ques.selected) {
                                setBkcolor4("greenUsed");
                            } else {
                                setBkcolor4("blackOptions");
                            }
                            
                            console.log("Answer selected: "+ques.selected);
                        }}>
                            {ques.options[3].option}
                        </Button>
                    </Box>
                        
                    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "5% 0%"}}>

                        { (ques.id !== 1) &&
                            (
                                <Link to={`/quiz/ques/${ques.id -1}`}>
                                    <Button variant="text" color="greenUsed" sx={{ color: "white" }} >
                                        PREVIOUS QUESTION
                                    </Button>
                                </Link>
                            )
                        }

                        <Button variant="contained" color="greenUsed" sx={{ color: "white" }} onClick={() => {
                            // API 
                        }}>
                            SUBMIT
                        </Button>

                        { (ques.id !== len) &&
                            (
                                <Link to={`/quiz/ques/${parseInt(ques.id) +1}`}>
                                    <Button variant="contained" color="greenUsed" sx={{ color: "white" }}>
                                        NEXT QUESTION
                                    </Button>
                                </Link>
                            )
                        }
                    </Box>
                        
                </div>

            </Container>
        </ThemeProvider>
    )
}


