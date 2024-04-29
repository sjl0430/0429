import { useState } from "react";
import "./App.css";
import Page from "./components/Page";
import { ThemeContext } from "./context/ThemeContext";
function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    // 📌
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />
    </ThemeContext.Provider>
  );
}
export default App;
// src/App.js에 붙여넣기
