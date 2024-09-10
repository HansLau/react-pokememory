import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { toggle_theme } from "./utils/color-scheme";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") as "light" | "dark" | null
  );

  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Document</title>
        </head>
        <body>
          <header>
            <div className="widthContainer header">
              <img src={viteLogo} className="logo" alt="Vite logo" />
              <h1>Pokemon Memory Game</h1>
              <button
                onClick={() => {
                  toggle_theme();
                  setTheme((t) => (t === "dark" ? "light" : "dark"));
                }}
              >
                {theme === "dark" ? `Toggle light` : `Toggle dark`}
              </button>
            </div>
          </header>
          <div className="widthContainer contentContainer">
            <div>
              <a href="https://vitejs.dev" target="_blank"></a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </div>
          <footer>
            <div className="widthContainer footer">@Han 2024</div>
          </footer>
        </body>
      </html>
    </>
  );
}

export default App;
