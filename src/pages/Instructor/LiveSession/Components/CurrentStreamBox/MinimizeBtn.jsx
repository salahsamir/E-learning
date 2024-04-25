const { OpenInFull } = require("@mui/icons-material");
const { Box, IconButton } = require("@mui/material");

const MinimizeBtn = ({
  minimized,
  setMinimized,
  initialPosition,
  setPosition,
}) => {
  return (
    <IconButton
      aria-label="minimize"
      onClick={() => {
        setMinimized((old) => {
          if (!old) {
            setPosition({
              x: initialPosition.x,
              y: window.innerHeight - 40 - 8,
            });
          }
          return !old;
        });
      }}
      disableRipple
      sx={{
        position: "absolute",
        top: "8px",
        right: "8px",
        zIndex: 10001,
        padding: 0,
        width: "24px",
        height: "24px",
        backdropFilter: "blur(2px)",
        "&:hover": {
          span: {
            backgroundColor: "grey.400",
          },
          color: "grey.400",
        },
      }}
    >
      {minimized ? (
        <OpenInFull fontSize="small" />
      ) : (
        <Box
          component={"span"}
          sx={{
            display: "block",
            width: "12px",
            height: "2px",
            borderRadius: "2px",
            backgroundColor: "text.primary",
          }}
        />
      )}
    </IconButton>
  );
};

export default MinimizeBtn;
