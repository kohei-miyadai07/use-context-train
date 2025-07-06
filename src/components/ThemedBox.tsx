import React, { useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeBox: React.FC = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('ThemedBox must be used within a ThemeProvider');
    }

    const {theme} = context;

    const boxStyle: React.CSSProperties = {
    padding: '20px',
    margin: '20px',
    border: '1px solid gray',
    backgroundColor: theme === 'light' ? 'white' : 'black', // テーマに応じて背景色を変更
    color: theme === 'light' ? 'black' : 'white',          // テーマに応じて文字色を変更
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={boxStyle}>
        <p>このボックスはテーマによって色が変わります。</p>
        <p>現在のテーマ: **{theme === 'light' ? 'ライト' : 'ダーク'}**</p>
    </div>
  );
};

export default ThemeBox;
