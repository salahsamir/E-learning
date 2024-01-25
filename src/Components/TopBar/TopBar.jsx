
import {  Link as RouterLink } from "react-router-dom";


import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Stack } from "@mui/material";


export default function TopBar({ display }) {
  const [value, setValue] = React.useState('1');
   
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack
            justifyContent="center"
            direction="row"
            alignItems="center"
            height="40px"
            width="100%"
            position={"fixed"}
            zIndex={100}
            display={display}
            sx={{
              backgroundColor: (theme) => theme.palette.background.default,
            
            }}
          >
<Box sx={{ typography: 'body1',left:"40%"}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
           
            <Tab label=" Web Development"  component={RouterLink} to={`/course/WebDevelopment`} />
            <Tab label="Data Science"  component={RouterLink} to={`/course/DataScience`} />
            <Tab label=" Mobile Development"  component={RouterLink} to={`/course/MobileDevelopment`}/>
            <Tab label=" Database Design"  component={RouterLink} to={`/course/DatabaseDesign`} />
            <Tab label="Software Testing"  component={RouterLink} to={`/course/Software Testing`} />

          </TabList>
        </Box>
       
      </TabContext>
    </Box>
          </Stack>
    
  );
}
