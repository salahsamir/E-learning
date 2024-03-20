import { Box, IconButton, SvgIcon } from "@mui/material";
import { useState } from "react";
import { ReactComponent as MessageSvg } from "./assets/message.svg";
import { ReactComponent as GroupSvg } from "./assets/group.svg";
import { ReactComponent as LinkSvg } from "./assets/link.svg";
import LiveChat from "../LiveChat/LiveChat";
import ParticipantsPanel from "../ParticipantsPanel/ParticipantsPanel";
import { useChat } from "@livekit/components-react";
const IconButtonModified = ({ icon, active = false, onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        backgroundColor: (theme) =>
          active ? theme.palette.primary.main : theme.palette.background.b1,
        px: "1.1em",
        height: "35px",
        borderRadius: "2.2em",
        border: (theme) => `1px solid ${theme.palette.divider}`,
        "&:hover": {
          bgcolor: (theme) => theme.palette.primary.main,
          " & svg": {
            color: "white",
          },
        },
      }}
    >
      <SvgIcon
        sx={{
          color: active ? "grey.100" : "text.secondary",
          height: "0.9em",
        }}
      >
        {icon}
      </SvgIcon>
    </IconButton>
  );
};
function SidePanel() {
  const [currentActive, setCurrentActive] = useState("chat");
  const liveChat = useChat();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButtonModified
          icon={<MessageSvg />}
          active={currentActive === "chat"}
          onClick={() => setCurrentActive("chat")}
        />
        <IconButtonModified
          icon={<GroupSvg />}
          active={currentActive === "participants"}
          onClick={() => setCurrentActive("participants")}
        />
        <IconButtonModified
          icon={<LinkSvg />}
          active={currentActive === "options"}
          onClick={() => setCurrentActive("options")}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.b1,
          mt: "1em",
          height: "calc(100vh - 151px)",
          borderRadius: "8px",
          border: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        {currentActive === "chat" && <LiveChat liveChat={liveChat} />}
        {currentActive === "participants" && <ParticipantsPanel />}
        {currentActive === "options" && <div>Options</div>}
      </Box>
    </>
  );
}

export default SidePanel;
