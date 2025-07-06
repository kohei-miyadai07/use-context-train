import ThemeProvider from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";
import ThemedBox from "./components/ThemedBox";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1>テーマ切り替えアプリ</h1>
        <div className="card">
          <ThemeToggle />
          <ThemedBox />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
