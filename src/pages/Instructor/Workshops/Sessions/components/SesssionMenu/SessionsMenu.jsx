import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  alpha,
} from "@mui/material";
import { Delete, Edit, MoreVert, Visibility } from "@mui/icons-material";
import { useState } from "react";
import DeleteSession from "../DeleteSession/DeleteSession";
import EditSession from "../EditSession/EditSession";

const SessionsMenu = ({ sessionId, title, setItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [DeleteMenuIsShown, setDeleteMenuIsShown] = useState(false);
  const [editFormIsShown, setEditFormIsShown] = useState(false);

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
        <MenuItem
          onClick={() => {
            handleClose();
            setEditFormIsShown(true);
          }}
          aria-label="edit"
        >
          <Edit sx={{ fontSize: "1.3em" }} />
          <Typography variant="body2" sx={{ ml: "0.5em" }} fontSize="1em">
            Edit
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            setDeleteMenuIsShown(true);
          }}
          aria-label="delete"
        >
          <Delete sx={{ fontSize: "1.3em" }} color="error" />
          <Typography
            variant="body2"
            sx={{ ml: "0.5em" }}
            color="error"
            fontSize="1em"
          >
            Delete
          </Typography>
        </MenuItem>
      </Menu>
      <DeleteSession
        open={DeleteMenuIsShown}
        setOpen={setDeleteMenuIsShown}
        setItems={setItems}
        sessionId={sessionId}
      />
      <EditSession
        open={editFormIsShown}
        setOpen={setEditFormIsShown}
        sessionId={sessionId}
        title={title}
        setItems={setItems}
      />
    </Box>
  );
};
export default SessionsMenu;
