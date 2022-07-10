import "../styles/globals.css";
import ThemeContext from "../context";
import { useState } from "react";

function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default App;
