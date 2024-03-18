import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import {
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  AccordionDetails,
  CircularProgress,
} from "@mui/material";
import { Add, ArticleOutlined, QuizOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import NewVideo from "./NewVideoButton.jsx";
import { useAddQuiz } from "api/instructor/quiz.tsx";
import { useAddArticle } from "api/instructor/article.tsx";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={1} square {...props} />
))(() => ({
  position: "absolute",
  right: "0",
  top: "0",
  zIndex: "100",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<Add />} {...props} />
))(({ theme }) => ({
  height: "36px",
  minHeight: "auto",
  backgroundColor: theme.palette.primary.dark,
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

export default function NewTopicButton() {
  const [expanded, setExpanded] = React.useState(null);
  const { mutate: addQuiz, isPending: quizLoading } = useAddQuiz({
    onSuccess: (quiz) => navigate(`quiz/${quiz.id}`),
  });
  const { mutate: addArticle, isPending: articleLoading } = useAddArticle({
    onSuccess: (article) => navigate(`article/${article.curriculum}`),
  });
  const navigate = useNavigate();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      TransitionProps={{ unmountOnExit: true }}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography fontWeight="400">New Topic</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{ p: 0, backgroundColor: (theme) => theme.palette.background.b1 }}
      >
        <MenuList
          disablePadding
          sx={{
            border: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <NewVideo />
          <MenuItem onClick={() => addArticle()} disabled={articleLoading}>
            <ListItemIcon>
              {articleLoading ? (
                <CircularProgress size={20} />
              ) : (
                <ArticleOutlined />
              )}
            </ListItemIcon>
            <ListItemText>New Article</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => addQuiz()} disabled={quizLoading}>
            <ListItemIcon>
              {quizLoading ? <CircularProgress size={20} /> : <QuizOutlined />}
            </ListItemIcon>
            <ListItemText>New Quiz</ListItemText>
          </MenuItem>
        </MenuList>
      </AccordionDetails>
    </Accordion>
  );
}
