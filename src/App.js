import React, { useState } from "react";
import "./SCSS/main.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const [activeSection, setActiveSection] = useState("me");

  return (
    <div className="App">
      <Header setActiveSection={setActiveSection} />
      <Main activeSection={activeSection} />
    </div>
  );
}

export default App;
