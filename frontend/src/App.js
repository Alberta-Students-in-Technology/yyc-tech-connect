import './App.css';
import { amber, orange } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { Grid, Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { Button } from '@mui/material';
import { useTheme } from "@mui/material"
import { Box } from '@mui/system';
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

          <div className="App">
            <Grid container
              justifyContent={"center"}>
              <Paper elevation={24} sx={{ borderRadius: 20, position: "absolute", top: 50 }} className={theme.palette.main}>
                <Paper style={{ height: 500, width: 600, borderRadius: 50, backgroundColor:'#BE2424' }}>
                  <Box sx={{ height: 40, width: 40 }}>
                  </Box>
                  <img id="maintitle" src={TechConnectTitle} height={75} width={400} />
                  <Box sx={{ height: 30, width: 40 }}>
                  </Box>
                  <Box
                    justifyContent="center"
                    alignItems='center'
                    m={2}>
                            

          

                    <Button href='https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=3HTNJKGME32RPZDRJL &redirect_uri=https://yyc-tech-connect.herokuapp.com/home'

                      variant='contained' color="secondary" sx={{ mt: 0, ml: 0, height: 80, width: 400, borderRadius: 50 }}>
                      <Box sx={{ position: "absolute", left: "1%", top: 6 }}>
                        <img src={Icon} height={70} width={70} />
                      </Box>
                      <Typography variant="h3" component='div' color={'#C24B4B'} sx={{ ml: 5, fontWeight: 800, fontSize: 30, fontFamily: 'Roboto', textTransform: 'none'}}>
                        Sign in with Eventbrite
                      </Typography>
                      
                    </Button>
                      
                    
              
          
                    <Button
                      variant='contained' color="secondary" sx={{ mt: 3, ml: 0, height: 70, width: 400, borderRadius: 50 }} onClick={viewCal}>
                      
                      
                      
                      
                      
                      <Typography variant="h3" component='div' color={'#C24B4B'} sx={{ fontWeight: 800, fontSize: 30, fontFamily: 'Roboto', textTransform: 'none'}}>
                        Google Calendar
                      </Typography>
                    </Button>

                  </Box>
                  <Typography variant="h4" component="div" sx={{ position: "absolute", width: '90%', fontFamily: 'Source Code Pro', color: 'white', fontSize: 15, marginLeft: '5%',  }}>
                    <br></br>Welcome to YYC-Tech-Connect - <br></br>Where all your Calgary tech events are organized
                    <br></br><br></br>Sign in with Eventbrite and connect your Google Calendar to continue
                  </Typography>
                </Paper>
              </Paper>
            </Grid>
          </div >
          
        </header>
        <div id='credits'>
          Made by ASIT<br></br>2022 - Rumeza Fatima, Peter Rojkovski, Kevin Salazar, Aliyah Merritt, and Jack Peplinski
        </div>

        
        <div id='backgroundimage'>
        </div>
      
    </ThemeProvider >
  );
}

export default App;
