import { Accordion, AccordionDetails, AccordionSummary, Box, Button, CircularProgress, Container, Stack, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BaseApi } from '../../util/BaseApi.js';

export default function Chapter() {
  const [chapter, setChapter] = useState([]);
  const [parts, setParts] = useState([]);
  const [chapterid, setChapterId] = useState('');

  const [loading, setLoading] = useState(true); // Added loading state
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAllChapter();
  }, []);

  const getAllChapter = async () => {
    try {
      const response = await axios.get(`${BaseApi}/course/${id}/chapter`);
      if (response && response.data) {
        setChapter(response.data.chapters);
        setLoading(false); // Set loading to false after fetching chapters
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllParts = async (chapterId) => {
    try {
      const response = await axios.get(`${BaseApi}/course/${id}/chapter/${chapterId}/curriculum/`);
      if (response && response.data) {
        setParts(response.data.curriculum);
       setChapterId(chapterId)
      }
    } catch (error) {
      console.log(error);
    }
  };
  let goToVideo=(curriculum)=>{
    navigate(`/video/${id}/${chapterid}/${curriculum}`)
}
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    if (isExpanded) {
      setParts([]); // Reset parts to an empty array when accordion is collapsed
    }
  };

  return (
    <Container>
      <Stack spacing={2} my={1} >
        <Typography variant="h3" py={1} color="primary" textAlign="center">
          Chapters
        </Typography>
        {loading ? (
           <div
           width={"100%"}
           height={"100%"}
           display={"flex"}
           justifyContent={"center"}
           alignItems={"center"}
         >
           <span class="loader"></span>
         </div> // Display loading indicator while fetching data
        ) : (
          <Box width="100%" display="flex" justifyContent="center" alignItems="center">
            <div>
              {chapter.map((item) => (
                <Accordion
                  key={item._id}
                  expanded={expanded === item._id}
                  onChange={handleChange(item._id)}
                  
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${item._id}-content`}
                    id={`panel${item._id}-header`}
                    onClick={() => getAllParts(item._id)}
                  >
                    <Typography variant="h5" sx={{ flexShrink: 0 ,width:'100%' }}>
                      {item.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {parts && parts.map((part) => (
                      <div key={part._id} onClick={() => goToVideo(part._id)}>
                        <Button>
                          <Typography variant="style">{part.title}</Typography>
                        </Button>
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </Box>
        )}
      </Stack>
    </Container>
  );
}