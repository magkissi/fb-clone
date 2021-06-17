import React from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );

  /*app body in the center*/
  /*widgets on the right*/
}

export default App;
