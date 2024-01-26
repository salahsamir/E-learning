import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MenuList, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { Add, ArticleOutlined, QuizOutlined } from "@mui/icons-material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useNavigate } from "react-router-dom";
import { UploadContext } from "../../../../../context/upload-context";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={1} square {...props} />
))(({ theme }) => ({
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

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: theme.palette.background.b1,
}));
export default function NewTopic({ setItems }) {
  const [expanded, setExpanded] = React.useState(null);
  const navigate = useNavigate();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const { setUploadList, uploadList } = React.useContext(UploadContext);
  console.log("fileUploadList: ", uploadList);
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      TransitionProps={{ unmountOnExit: true }}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography fontWeight="400">New Topic</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        <MenuList
          disablePadding
          sx={{
            border: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <MenuItem key="new video">
            <label
              htmlFor="videos-input"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                cursor: "pointer",
              }}
            >
              <ListItemIcon>
                <PlayCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText>New Video</ListItemText>
            </label>
            <input
              type="file"
              name="videos-input"
              id="videos-input"
              multiple
              hidden
              accept="video/*"
              onChange={(e) => {
                setUploadList((prev) => [...prev, ...e.target.files]);
                e.target.value = null;
              }}
            />
          </MenuItem>
          <MenuItem key="new article" onClick={() => navigate("article/new")}>
            <ListItemIcon>
              <ArticleOutlined />
            </ListItemIcon>
            <ListItemText>New Article</ListItemText>
          </MenuItem>
          <MenuItem key="new quiz">
            <ListItemIcon>
              <QuizOutlined />
            </ListItemIcon>
            <ListItemText>New Quiz</ListItemText>
          </MenuItem>
        </MenuList>
      </AccordionDetails>
    </Accordion>
  );
}
