// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import StepContent from '@mui/material/StepContent';
// import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { BaseApi } from 'util/BaseApi';



// export default function VerticalLinearStepper() {
//   // let { id, chapter, curriculum } = useParams();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [step, setStep] = React.useState([]); // Initialize step as an empty array
//   let [video, setVideo] =React.useState({});
//   React.useEffect(() => {
//     const getAllVideo = async () => {
//       try {
//         const response = await axios.get(
//           `${BaseApi}/course/${id}/chapter/${chapter}/curriculum/${curriculum}`
//         );
//         if (response && response.data) {
//           setVideo(response.data.video); 
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     const getAllParts = async () => {
//       try {
//         const response = await axios.get(
//           `${BaseApi}/course/${id}/chapter/${chapter}/curriculum/`
//         );
//         if (response && response.data) {
//           setStep(response.data.curriculum);
//           getAllVideo(); // Call getAllVideo after setting the step state
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     getAllParts();
  
//   }, [id, chapter, curriculum]);
  
//   React.useEffect(() => {
//     // Find the index of the video inside the step array
//     const index = step.findIndex(stepItem => stepItem.video === video._id);
//     setActiveStep(index);
//   }, [step, video]);
  
//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
    
//   );
// }

import React from 'react'

export default function VerticalLinearSteppe() {
  return (
    <div>VerticalLinearSteppe</div>
  )
}
