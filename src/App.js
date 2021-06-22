import React from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Widget from "./components/widget";
import Login from "./components/login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
          )
        </>
      )}
      ;
    </div>
  );
}
export default App;
