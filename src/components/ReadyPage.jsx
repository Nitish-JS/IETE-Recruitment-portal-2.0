import React from 'react';
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

const ReadyPage = () => {
    return (
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
                        TIME: 45.00 MIN
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
                    {/* <ListItemText sx={{ padding: "2%" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus provident, temporibus commodi id quam nobis. Sit ab impedit voluptatibus, laboriosam rerum neque et nulla eveniet!
                    </ListItemText> */}
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