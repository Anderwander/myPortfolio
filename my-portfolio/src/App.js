import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Qualification from "./components/Qualification/Qualification";

function App() {
  return (
    <div>
      <Header></Header>
      <main className="main">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Qualification></Qualification>
      </main>
    </div>
  );
}

export default App;
