import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Header></Header>
      <main className="main">
        <Home></Home>
      </main>
    </div>
  );
}

export default App;
