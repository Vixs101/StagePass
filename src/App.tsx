// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Tickets from "./pages/Tickets";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/event-details" element={<EventDetails/>}/>
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
    </>
  );
}

export default App;
