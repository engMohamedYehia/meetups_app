import React from "react";
import "./App.css";
import AllMeetings from "./pages/Allmeetings";
import NewMeetings from "./pages/NewMeetings";
import Favourities from "./pages/Favourities";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/layout/Navigation";


function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<AllMeetings />} />
        <Route exact path="/new" element={<NewMeetings />} />
        <Route exact path="/fav" element={<Favourities />} />
      </Routes>
    </div>
  );
}

export default App;
