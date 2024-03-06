import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  alpha,
} from "@mui/material";
import { MoreVert, Visibility } from "@mui/icons-material";
import { useState } from "react";
import DeleteChapter from "../DeleteChapter/DeleteChapter";
import EditChapter from "../EditChapter/EditChapter";

const ChapterMenu = ({ chapterId, title }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ p: "4px" }}
      >
        <MoreVert sx={{ fontWeight: "16px" }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={{
          "& >.MuiPaper-root": {
            backgroundColor: (theme) => alpha(theme.palette.background.b1, 0.7),
            backdropFilter: "blur(3px)",
            borderRadius: "8px",
            overflow: "hidden",
          },
        }}
      >
        <MenuItem onClick={handleClose} aria-label="preview">
          <Visibility sx={{ fontSize: "1.3em" }} />
          <Typography variant="body2" sx={{ ml: "0.5em" }} fontSize="1em">
            Preview
          </Typography>
        </MenuItem>
        <EditChapter
          chapterId={chapterId}
          title={title}
          closeParentMenu={handleClose}
        />
        <DeleteChapter chapterId={chapterId} closeParentMenu={handleClose} />
      </Menu>
    </Box>
  );
};
export default ChapterMenu;
