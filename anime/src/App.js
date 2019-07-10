import React from "react";
import "./App.css";

import Head from "./components/header/Header";
import SummerAnime from "./components/anime/SummerAnime";

function App() {
  return (
    <div className="App">
      <Head />
      <SummerAnime />
    </div>
  );
}

export default App;
