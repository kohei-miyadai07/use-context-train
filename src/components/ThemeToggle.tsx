import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle: React.FC = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("ThemeToggle must be used within a ThemeProvider");
  }

  const { toggleTheme } = context;

  return (
    <button
      onClick={toggleTheme}
      style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
    >
      テーマ切り替え
    </button>
  );
};

export default ThemeToggle;
