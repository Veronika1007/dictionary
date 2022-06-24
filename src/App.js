import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header>Dictionary</header>
      <Dictionary />
      <footer>
        {" "}
        Coded by Veronika, open-source on{" "}
        <a
          href="https://github.com/Veronika1007/dictionary"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
