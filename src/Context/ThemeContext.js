import React, { createContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const themes = {
  light: {
    palette: {
      primary: { main: "#635bff" },
      secondary: { main: "#ff4081" },
      error: { main: "#f44336" },
      background: { default: "#f5f5f5" },
      text: { primary: "#333333", secondary: "#757575" },
    },
    cssVars: {
      "--primary-color": "#635bff",
      "--primary-gradient": "linear-gradient(90deg, #BB86FC, #3700B3)",
      "--secondary-color": "#ff4081",
      "--accent-color-1": "#ffb74d",
      "--accent-color-2": "#66bb6a",
      "--background-color": "#f5f5f5",
      "--sidebar-bg-color": "#121621",
      "--sidebar-bg-gradient": "linear-gradient(135deg, #121621, #121352)",
      "--paper-color": "#ffffff",
      "--text-primary-color": "#ffffff",
      "--text-secondary-color": "#757575",
      "--button-text-transform": "none",
      "--error-color": "#f44336",
      "--button-hover-color": "#4e4abf",
      "--primary-light-color": "#e2e0fc",
    },
  },
  dark: {
    palette: {
      primary: { main: "#3700B3" },
      secondary: { main: "#ff4081" },
      error: { main: "#cf6679" },
      background: { default: "#121212" },
      text: { primary: "#ffffff", secondary: "#bbbbbb" },
    },
    cssVars: {
      "--primary-color": "#3700B3",
      "--primary-gradient": "linear-gradient(90deg, #121621, #635bff)",
      "--secondary-color": "#ff4081",
      "--accent-color-1": "#ff8c42",
      "--accent-color-2": "#8bc34a",
      "--background-color": "#121212",
      "--sidebar-bg-color": "#1e1e1e",
      "--sidebar-bg-gradient": "linear-gradient(135deg, #1e1e1e, #272727)",
      "--paper-color": "#1e1e1e",
      "--text-primary-color": "#ffffff",
      "--text-secondary-color": "#bbbbbb",
      "--button-text-transform": "uppercase",
      "--error-color": "#cf6679",
      "--button-hover-color": "#635bff",
      "--primary-light-color": "#453f91",
    },
  },
  highContrast: {
    palette: {
      primary: { main: "#000000" },
      secondary: { main: "#ffff00" },
      error: { main: "#d32f2f" },
      background: { default: "#ffffff" },
      text: { primary: "#000000", secondary: "#333333" },
    },
    cssVars: {
      "--primary-color": "#000000",
      "--primary-gradient": "linear-gradient(90deg, #000000, #444444)",
      "--secondary-color": "#ffff00",
      "--accent-color-1": "#ff5722",
      "--accent-color-2": "#4caf50",
      "--background-color": "#ffffff",
      "--sidebar-bg-color": "#ffffff",
      "--sidebar-bg-gradient": "linear-gradient(135deg, #ffffff, #eeeeee)",
      "--paper-color": "#f5f5f5",
      "--text-primary-color": "#000000",
      "--text-secondary-color": "#333333",
      "--button-text-transform": "capitalize",
      "--error-color": "#d32f2f",
      "--button-hover-color": "#212121",
      "--primary-light-color": "#eeeeee",
    },
  },
  oceanBreeze: {
    palette: {
      primary: { main: "#1e88e5" }, // Blue
      secondary: { main: "#4caf50" }, // Green
      error: { main: "#d32f2f" }, // Red
      background: { default: "#e0f7fa" }, // Light Blue
      text: { primary: "#212121", secondary: "#757575" },
    },
    cssVars: {
      "--primary-color": "#1e88e5",
      "--primary-gradient": "linear-gradient(90deg, #4caf50, #1e88e5)",
      "--secondary-color": "#4caf50",
      "--accent-color-1": "#80e27e",
      "--accent-color-2": "#81d4fa",
      "--background-color": "#e0f7fa",
      "--sidebar-bg-color": "#ffffff",
      "--sidebar-bg-gradient": "linear-gradient(135deg, #ffffff, #b3e5fc)",
      "--paper-color": "#ffffff",
      "--text-primary-color": "#212121",
      "--text-secondary-color": "#757575",
      "--button-text-transform": "none",
      "--error-color": "#d32f2f",
      "--button-hover-color": "#0288d1",
      "--primary-light-color": "#81d4fa",
    },
  },
  sunsetGlow: {
    palette: {
      primary: { main: "#ff7043" }, // Orange
      secondary: { main: "#f50057" }, // Pink
      error: { main: "#d32f2f" }, // Red
      background: { default: "#fff3e0" }, // Light Yellow
      text: { primary: "#212121", secondary: "#757575" },
    },
    cssVars: {
      "--primary-color": "#ff7043",
      "--primary-gradient": "linear-gradient(90deg, #ff7043, #f50057)",
      "--secondary-color": "#f50057",
      "--accent-color-1": "#ff4081",
      "--accent-color-2": "#ba68c8",
      "--background-color": "#fff3e0",
      "--sidebar-bg-color": "#ffffff",
      "--sidebar-bg-gradient": "linear-gradient(135deg, #ffffff, #ffccbc)",
      "--paper-color": "#ffffff",
      "--text-primary-color": "#212121",
      "--text-secondary-color": "#757575",
      "--button-text-transform": "uppercase",
      "--error-color": "#d32f2f",
      "--button-hover-color": "#e64a19",
      "--primary-light-color": "#ffab91",
    },
  },
  forestRetreat: {
    palette: {
      primary: { main: "#388e3c" }, // Green
      secondary: { main: "#8d6e63" }, // Brown
      error: { main: "#d32f2f" }, // Red
      background: { default: "#f1f8e9" }, // Light Green
      text: { primary: "#212121", secondary: "#757575" },
    },
    cssVars: {
      "--primary-color": "#388e3c",
      "--primary-gradient": "linear-gradient(90deg, #388e3c, #8d6e63)",
      "--secondary-color": "#8d6e63",
      "--accent-color-1": "#81c784",
      "--accent-color-2": "#c8e6c9",
      "--background-color": "#f1f8e9",
      "--sidebar-bg-color": "#ffffff",
      "--sidebar-bg-gradient": "linear-gradient(135deg, #ffffff, #c5e1a5)",
      "--paper-color": "#ffffff",
      "--text-primary-color": "#212121",
      "--text-secondary-color": "#757575",
      "--button-text-transform": "none",
      "--error-color": "#d32f2f",
      "--button-hover-color": "#2c6e1f",
      "--primary-light-color": "#a5d6a7",
    },
  },
};

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("light");

  const theme = useMemo(() => {
    const selectedTheme = themes[themeName];
    Object.entries(selectedTheme.cssVars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    return createTheme(selectedTheme);
  }, [themeName]);

  const changeTheme = (newTheme) => setThemeName(newTheme);

  return (
    <ThemeContext.Provider value={{ themeName, changeTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
