import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      id='tab' sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs 
        id='labels'
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'red' }}
      >
        <Tab label="Display" {...a11yProps(0)} />
        <Tab label="Alerts" {...a11yProps(1)} />
        <Tab label="Account" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Light" />
                <FormControlLabel value="male" control={<Radio />} label="Dark" />
            </RadioGroup>
        </FormControl>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div id='chooseevent'>
            <h3>Choose an event</h3>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Event 1" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Event 2" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Event 3" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Event 4" />
        </div>
        <div id='choosealarm'>
            <h3>Set Alarms</h3>
            <FormControlLabel control={<Checkbox defaultChecked />} label="30 minutes" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="1 hour" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="12 hours" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="7 days" />
        </div>
        <Button variant="contained">
            Save Changes
        </Button>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TextField id="userform" label="Username" variant="outlined"/>
        <br/>
        <TextField id="passform" label="Password" variant="outlined"/>
        <br/>
        <Button id='signout' variant="Outlined">
            Sign Out
        </Button>
        <Button id='changeuser' variant="contained">
            Change User
        </Button>
      </TabPanel>
    </Box>
  );
}
