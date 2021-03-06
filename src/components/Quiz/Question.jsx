import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import question_json from '../../questions.json';
import { Typography, Button, Box, Container, TextField} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Link } from 'react-router-dom';
import Loading from './Loading'


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
    }
  },
  typography: {
    fontFamily: [
        'Poppins',
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

const Question = () => {

    const { ques_id } = useParams();

    // let question_arr = JSON.parse(JSON.stringify(question_json));
    let question_arr = [];

    const [questions, setQuestions] = useState(question_arr);
    const [force,setForce] = useState(true);

    // console.log("BEFORE USE STATE");

    useEffect(async () => {
        await fetch(
            "https://recportal-iete.herokuapp.com/auth/q/",
            {
                method: "POST",
                headers: { "Authorization":token, "Content-Type": "application/json" },
                body: JSON.stringify({
                    domain: 1
                }),
                
            }
        )
        .then(response => response.json())
        .then(json => {
            setQuestions([...json.data])
            // console.log("REACHED HERE: ",json.data)
        })

    },[])


    useEffect(() => {
        setForce(!force);
    }, [ques_id])
    // console.log("AFTER USE STATE");

    

    // console.log("QUESTIONS: ",questions);

    let ques = {}
    

    for (let i = 0; i< questions.length; i++){
        let q = questions[i];
        if (q.id == ques_id){
            ques = q;
        }
    }

    // console.log("QUES: ",ques);

    if (ques.ques_type === 0){
        if (ques.selected === undefined){
            ques.selected="blank";
        }
    } else {
        if (ques.answer === undefined){
            ques.answer = "";
        }
    }

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
        // console.log("GreenOption: ",greenOption);
    }
    // console.log("QUES_TYPE: ",ques.ques_type);

    // console.log(ques.answer);

    const handleChangeLQ = e => {
        console.log("Handle Change Called!");
        ques.answer = document.getElementById("longAnswer").value;
        console.log(ques.answer);
    }

    const handleFocusLQ = e => {
        console.log("In Handle Focus");
        document.getElementById("longAnswer").value = ques.answer;
    }
    
    return(
        // (!ques.ques_type)? 
        //     <h1 style={{ color: "white" }}>Loading...</h1>
        // : 

        (ques.ques_type == 0) ? 
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
                        {/* {
                            (greenOption === 0) &&
                            console.log("FIRST OPTION IS GREEN")
                            
                        } */}
                        {
                            (greenOption === 0) ?
                            OptCol = "greenUsed"
                            :
                            OptCol = "blackOptions"
                        }
                        <Button variant="contained" color={OptCol} sx={{ padding:"1% 4%", margin:"5% 8%", borderRadius: "10px", color: "white", width: "50%", borderColor: "green" }} style={{ boxShadow: '5px 5px 10px #009254'}} onClick={() => {
                            greenOption = 0;
                            // console.log("FIRST OPTION IS GREEN OPTION")
                            ques.selected = ques.options[0].option;
                            // console.log("Answer selected: "+ques.selected);
                            setForce(!force);
                        }}>
                            {ques.options[0].option}
                        </Button>

                        {/* {
                            (greenOption === 1) &&
                            console.log("SECOND OPTION IS GREEN")
                        } */}
                        {
                            (greenOption === 1) ?
                            OptCol = "greenUsed"
                            :
                            OptCol = "blackOptions"
                        }
                        <Button variant="contained" color={OptCol} sx={{ padding:"1% 4%", margin:"5% 8%", borderRadius: "10px", color: "white", width: "50%" }} style={{ boxShadow: '5px 5px 10px #009254'}} onClick={() => {
                            greenOption = 1;
                            // console.log("SECOND OPTION IS GREEN OPTION")
                            ques.selected = ques.options[1].option;
                            // console.log("Answer selected: "+ques.selected);
                            setForce(!force);
                        }}>
                            {ques.options[1].option}
                        </Button>
                    </Box>
                        
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        {/* {
                            (greenOption === 2) &&
                            console.log("THIRD OPTION IS GREEN")
                            
                        } */}
                        {
                            (greenOption === 2) ?
                            OptCol = "greenUsed"
                            :
                            OptCol = "blackOptions"
                        }
                        <Button variant="contained" color={OptCol} sx={{ padding:"1% 4%", margin:"5% 8%", borderRadius: "10px", color: "white", width: "50%" }} style={{ boxShadow: '5px 5px 10px #009254'}} onClick={() => {
                            greenOption = 2;
                            // console.log("THIRD OPTION IS GREEN OPTION")
                            ques.selected = ques.options[2].option;
                            // console.log("Answer selected: "+ques.selected);
                            setForce(!force);
                        }}>
                            {ques.options[2].option}
                        </Button>

                        {/* {
                            (greenOption === 3) &&
                            console.log("FOURTH OPTION IS GREEN")
                        } */}
                        {
                            (greenOption === 3) ?
                            OptCol = "greenUsed"
                            :
                            OptCol = "blackOptions"
                        }
                        <Button variant="contained" color={OptCol} sx={{ padding:"1% 4%", margin:"5% 8%", borderRadius: "10px", color: "white", width: "50%" }} style={{ boxShadow: '5px 5px 10px #009254'}} onClick={() => {
                            greenOption = 3;
                            // console.log("THIRD OPTION IS GREEN OPTION")
                            ques.selected = ques.options[3].option;
                            // console.log("Answer selected: "+ques.selected);
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

                        { (ques.id !== question_arr.length) &&
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
        : 
        (ques.ques_type == 1) ?
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
                        <TextField color="whiteUsed" variant="outlined" multiline rows={10} fullWidth  id="longAnswer" placeholder="Enter your answer here"  sx={{ background:"#212121", borderRadius: "10px", border: "none" }} onFocus={handleFocusLQ} onBlur={handleChangeLQ}></TextField>
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

                    { (ques.id !== question_arr.length) &&
                        (
                            <Link to={`/quiz/ques/${parseInt(ques_id) +1}`}>
                                <Button variant="contained" color="greenUsed" sx={{ color: "white" }}>
                                    NEXT QUESTION
                                </Button>
                            </Link>
                        )
                    }
                </Box>
            </Container>
        </ThemeProvider>
        : 
        <Loading />

        
    )
} 



export default Question