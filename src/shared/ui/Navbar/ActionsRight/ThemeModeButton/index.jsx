import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useThemeContext } from "Context/theme-context.tsx";
import React from "react";

const ThemeModeButton = () => {
  const { theme: themeMode, toggleTheme } = useThemeContext();
  return (
    <IconButton
      sx={{ p: "4px" }}
      aria-label="theme mode"
      onClick={() => toggleTheme()}
    >
      {themeMode === "dark" && <DarkModeOutlined sx={{ fontSize: "24px" }} />}
      {themeMode !== "dark" && (
        <LightModeOutlined
          sx={{
            fontSize: "24px",
            color: (theme) => theme.palette.primary.svg,
          }}
        />
      )}
    </IconButton>
  );
};

export default ThemeModeButton;
