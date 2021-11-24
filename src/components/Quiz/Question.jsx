import React, { useState, useEffect} from 'react';
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
    const [force,setForce] = useState(true);

    var ques = questions[ques_id - 1];
    console.log("QUES : ",ques);


    if (ques.selected === undefined){
        ques.selected="blank";
    }

    console.log("Displaying all the selected answers: ");
    questions.forEach(x => {
        try {
            console.log(x.selected);
        } catch (error) {
            console.log(error);
        }
    });

    var OptCol="blackOptions"
    var greenOption = -1;
    if (ques.ques_type === 0)
    {
        if (ques.selected === ques.options[0].option){
            greenOption = 0;
        } else if (ques.selected === ques.options[1].option){
            greenOption = 1;
        } else if (ques.selected === ques.options[2].option){
            greenOption = 2;
        } else if (ques.selected === ques.options[3].option){
            greenOption = 3;
        }
        console.log("GreenOption: ",greenOption);
    }
    
    if (ques.ques_type === 0) {
        return(
            <ThemeProvider theme={theme}>
                <Container sx={{ width: "70%" }}>
                    <div style={{ background: "black"}}>
                        
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
                            {
                                (greenOption === 0) &&
                                console.log("FIRST OPTION IS GREEN")
                                
                            }
                            {
                                (greenOption === 0) ?
                                OptCol = "greenUsed"
                                :
                                OptCol = "blackOptions"
                            }
                            <Button variant="contained" color={OptCol} sx={{ padding:"1% 4%", margin:"5% 8%", borderRadius: "10px", color: "white", width: "50%", borderColor: "green" }} style={{ boxShadow: '5px 5px 10px #009254'}} onClick={() => {
                                greenOption = 0;
                                console.log("FIRST OPTION IS GREEN OPTION")
                                ques.selected = ques.options[0].option;
                                console.log("Answer selected: "+ques.selected);
                                setForce(!force);
                            }}>
                                {ques.options[0].option}
                            </Button>

                            {
                                (greenOption === 1) &&
                                console.log("SECOND OPTION IS GREEN")
                            }
                            {
                                (greenOption === 1) ?
                                OptCol = "greenUsed"
                                :
                                OptCol = "blackOptions"
                            }
                            <Button variant="contained" color={OptCol} sx={{ padding:"1% 4%", margin:"5% 8%", borderRadius: "10px", color: "white", width: "50%" }} style={{ boxShadow: '5px 5px 10px #009254'}} onClick={() => {
                                greenOption = 1;
                                console.log("SECOND OPTION IS GREEN OPTION")
                                ques.selected = ques.options[1].option;
                                console.log("Answer selected: "+ques.selected);
                                setForce(!force);
                            }}>
                                {ques.options[1].option}
                            </Button>
                        </Box>
                            
                        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                            {
                                (greenOption === 2) &&
                                console.log("THIRD OPTION IS GREEN")
                                
                            }
                            {
                                (greenOption === 2) ?
                                OptCol = "greenUsed"
                                :
                                OptCol = "blackOptions"
                            }
                            <Button variant="contained" color={OptCol} sx={{ padding:"1% 4%", margin:"5% 8%", borderRadius: "10px", color: "white", width: "50%" }} style={{ boxShadow: '5px 5px 10px #009254'}} onClick={() => {
                                greenOption = 2;
                                console.log("THIRD OPTION IS GREEN OPTION")
                                ques.selected = ques.options[2].option;
                                console.log("Answer selected: "+ques.selected);
                                setForce(!force);
                            }}>
                                {ques.options[2].option}
                            </Button>

                            {
                                (greenOption === 3) &&
                                console.log("FOURTH OPTION IS GREEN")
                            }
                            {
                                (greenOption === 3) ?
                                OptCol = "greenUsed"
                                :
                                OptCol = "blackOptions"
                            }
                            <Button variant="contained" color={OptCol} sx={{ padding:"1% 4%", margin:"5% 8%", borderRadius: "10px", color: "white", width: "50%" }} style={{ boxShadow: '5px 5px 10px #009254'}} onClick={() => {
                                greenOption = 3;
                                console.log("THIRD OPTION IS GREEN OPTION")
                                ques.selected = ques.options[3].option;
                                console.log("Answer selected: "+ques.selected);
                                setForce(!force);
                            }}>
                                {ques.options[3].option}
                            </Button>
                        </Box>
                            
                        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "5% 0%", width: "100%"}}>

                            { (ques.id !== 1) &&
                                (
                                    <Link to={`/quiz/ques/${ques_id -1}`}>
                                        <Button variant="text" color="greenUsed" sx={{ color: "white" }} >
                                            PREVIOUS QUESTION
                                        </Button>
                                    </Link>
                                )
                            }

                            <Button variant="contained" color="greenUsed" sx={{ color: "white"}} onClick={() => {
                                // API 
                            }}>
                                SUBMIT
                            </Button>

                            { (ques.id !== question_obj.length) &&
                                (
                                    <Link to={`/quiz/ques/${parseInt(ques_id) +1}`}>
                                        <Button variant="contained" color="greenUsed" sx={{ color: "white"}}>
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