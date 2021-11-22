import React, { useState} from 'react';
import { useParams } from 'react-router';
import question_json from '../../questions.json';
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



const Question = () => {

    const { ques_id } = useParams();
    const question_obj = JSON.parse(JSON.stringify(question_json));

    const [questions, setQuestions] = useState(question_obj);
    const [bkcolor1,setBkcolor1] = useState('blackOptions');
    const [bkcolor2,setBkcolor2] = useState('blackOptions');
    const [bkcolor3,setBkcolor3] = useState('blackOptions');
    const [bkcolor4,setBkcolor4] = useState('blackOptions');

    var ques = questions[ques_id - 1];
    console.log("QUES : ",ques)

    ques.selected="";
    console.log(questions);
    // try {
    //     ques.selected="";
    //     console.log(ques);
    // } catch (error) {
    //     console.log("Already visited!");
    // }
    

    console.log("Displaying all the selected answers: ");
    questions.forEach(x => {
        try {
            console.log(x.selected);
        } catch (error) {
            console.log(error);
        }
        
    });

    console.log("Ques ID: ",(ques.id))
    console.log("Length: ",(question_obj.length))

    // const setAllStates = () => {
    //     setBkcolor1("blackOptions");
    //     setBkcolor2("blackOptions");
    //     setBkcolor3("blackOptions");
    //     setBkcolor4("blackOptions");
    // } 


    if (ques.ques_type === 0) {
        
        return(
            <ThemeProvider theme={theme}>
                <Container sx={{ width: "70%" }}>
                    <div style={{ background: "black"}}>
                        {/* {setAllStates} */}
                        
                        <Typography fontFamily="Monument Extended" sx={{ color: "white", textAlign: "center", padding: "10% 0% 5% 0%", fontSize: "150%" }}> 
                            TEST YOUR KNOWLEDGE
                        </Typography>

                        <Typography variant="h5" fontFamily="Monument extended" color="white" sx={{ padding: "0% 2% 5% 2%" }}> Section 1</Typography>

                        <Typography fontFamily="Poppins" variant="h5" color="#009254" sx={{ display: "inline", margin: "5% 2%", padding: "2% 2%" }}>
                            Question: {ques_id} &nbsp;
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
                                    <Link to={`/quiz/ques/${ques_id -1}`}>
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

                            { (ques.id !== question_obj.length) &&
                                (
                                    <Link to={`/quiz/ques/${parseInt(ques_id) +1}`}>
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
    } else if (ques.ques_type === 1){
        return(
            <ThemeProvider theme={theme}>
                <Container sx={{ width: "70%", background: "black" }}>
                    <Box>
                        <Typography fontFamily="Monument Extended" sx={{ color: "white", textAlign: "center", padding: "10% 5% 5% 5%", fontSize: "150%" }}> 
                            TEST YOUR KNOWLEDGE
                        </Typography>

                        <Typography variant="h5" fontFamily="Monument extended" color="white" sx={{ padding: "0% 2% 5% 2%" }}> Section 2</Typography>

                        <Typography fontFamily="Poppins" variant="h5" color="#009254" sx={{ display: "inline", margin: "5% 2%", padding: "2% 2%" }}>
                            Question: {ques_id} &nbsp;
                        </Typography> 

                        <Typography fontFamily="Poppins" variant="h5" sx={{ display: "inline", margin: "2% 0%", color: "white" }} >
                            {ques.ques_main}
                        </Typography>
                        <Box sx={{ padding: "4%" }}>
                            <TextField sx={{ background:"#212121", borderRadius: "10px", width: "75%", height: "250px" }} id="longAnswer" placeholder="Enter your answer here"></TextField>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex",flexWrap: "wrap", justifyContent: "space-around", padding: "5% 0%"}}>

                        { (ques.id !== 1) &&
                            (
                                <Link to={`/quiz/ques/${ques_id -1}`}>
                                    <Button variant="text" color="greenUsed" sx={{ color: "white" }}>
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

                        { (ques.id !== question_obj.length) &&
                            (
                                <Link to={`/quiz/ques/${ques_id +1}`}>
                                    <Button variant="contained" color="greenUsed" sx={{ color: "white" }}>
                                        NEXT QUESTION
                                    </Button>
                                </Link>
                            )
                        }
                    </Box>

                </Container>
            </ThemeProvider>
        )
    }
}



export default Question