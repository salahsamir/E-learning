import {   Link, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
 
     <Stack width={'100%'}  spacing={3} my={'10px'}  textAlign={'center'}  py={'10px'}>
     <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
     </Stack>
    
  
  )
}
