import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, Typography } from '@mui/material';


export default function Assignment() {
  return (
    <div className='w-100  my-5 py-5 '>
    <div className=" container m-auto text-center">
     
    <FormControl className='border border-primary rounded-2 p-5' >
  <FormLabel id="demo-radio-buttons-group-label " className='fs-3 text-start'>what is mean HTML</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
   
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
  <Button className='my-3' variant='contained'>Send</Button>
</FormControl>
    </div>
    </div>
  )
}
