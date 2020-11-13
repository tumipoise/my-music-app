import React from "react";
import "./App.css";
import MusicHeader from "./components/MusicHeader";
import MusicList from "./components/MusicList";

function App() {
  return (
    <div className="App">
      <MusicHeader />
      <MusicList />
    </div>
  );
}

export default App;
