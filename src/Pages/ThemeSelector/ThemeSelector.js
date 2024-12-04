import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const ThemeSelectorPage = () => {
  const { themeName, changeTheme } = useContext(ThemeContext);

  return (
    <div style={{ padding: "1rem" }}>
      <label htmlFor="theme-selector">Choose Theme: </label>
      <select
        id="theme-selector"
        value={themeName}
        onChange={(e) => changeTheme(e.target.value)}
        style={{
          padding: "0.5rem",
          borderRadius: "5px",
        }}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="highContrast">High Contrast</option>
        <option value="forestRetreat">Forest Retreat</option>
        <option value="sunsetGlow">sunset Glow</option>
        <option value="oceanBreeze">Ocean Breeze</option>
      </select>
    </div>
  );
};

export default ThemeSelectorPage;
