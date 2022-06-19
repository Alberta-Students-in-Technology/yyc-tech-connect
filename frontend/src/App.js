import './App.css';
import { amber, orange } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { Grid, Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { Button } from '@mui/material';
import { useTheme } from "@mui/material"
import { Box } from '@mui/system';
import ParticleBackground from './Components-Welcome/Particle';
import Icon from './Components-Welcome/EventbriteIcon.PNG'
import TechConnectTitle from './Components-Welcome/YYC-Tech-Connect.PNG'
import Theme from './Components-Welcome/Theme.js'

function App() {
  const theme = useTheme();
  console.log(theme.palette.main)
  const viewCal = () =>{
  window.location = "/view"
  }
  
  return (
    <ThemeProvider theme={Theme}>
      <header className='App-header'>
        <ParticleBackground></ParticleBackground>
        <Typography variant="h2" component="div" sx={{ position: "absolute", fontFamily: 'Source Code Pro', top: 50, color: amber[500] }}>
          Welcome!
        </Typography>
        <Typography variant="h4" component="div" sx={{ position: "absolute", width: 500, fontFamily: 'Source Code Pro', top: 160, color: amber[300], fontSize: 20 }}>
          Welcome to YYC-Tech-Connect - the place where all your Calgary tech events are organized.
          Sign in with Eventbrite and connect your Google Calendar below.
        </Typography>
        <div className="App">
          <Grid container
            justifyContent={"center"}>
            <Paper elevation={24} sx={{ borderRadius: 20, position: "absolute", top: 350 }} className={theme.palette.main}>
              <Paper style={{ height: 360, width: 350, borderRadius: 20, backgroundColor:amber[500] }}>
                <Box sx={{ height: 40, width: 40 }}>
                </Box>
                <img src={TechConnectTitle} height={75} width={310} />
                <Box sx={{ height: 30, width: 40 }}>
                </Box>
                <Box
                  justifyContent="center"
                  alignItems='center'
                  m={2}>
                          

        
                  <Button href='https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=SIPL2IVAEKK6BOEFS3&redirect_uri=https://yyc-tech-connect.herokuapp.com/home/'
                    variant='contained' color="secondary" sx={{ mt: 2, ml: 0, height: 60, width: 310, borderRadius: 8 }}>
                    <Box sx={{ position: "absolute", left: "3%", top: 13 }}>
                      <img src={Icon} height={30} width={35} />
                    </Box>
                    <Typography color={orange[900]} sx={{ fontWeight: 600 }}>
                      Sign in with Eventbrite
                    </Typography>
                    
                  </Button>
                  	
                  
            
        
                  <Button
                    variant='contained' color="secondary" sx={{ mt: 2, ml: 0, height: 45, width: 310, borderRadius: 8 }} onClick={viewCal}>
                    
                    
                    
                    
                    
                    <Typography color={orange[900]} sx={{ fontWeight: 600 }}>
                      Google Calendar
                    </Typography>
                  </Button>

                </Box>
              </Paper>
            </Paper>
          </Grid>
        </div >
      </header>
    </ThemeProvider >
  );
}

export default App;
