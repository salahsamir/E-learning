import * as React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import { Stack } from '@mui/material';


export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  
    <Stack spacing={2} top={"30%"} sx={{display:{xs:"none",md:"block",margin:"auto"}}}   position={'fixed'}>
    
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 2, borderColor: 'divider' }}
      >
        <Tab label="All" />
        <Tab label="Java script"  />
        <Tab label="React js" />
        <Tab label="Next js"  />
        <Tab label="Tailwind" />
        <Tab label="Node js" />
        <Tab label="Node js" />

      </Tabs>
    
    </Stack>
   
  );
}