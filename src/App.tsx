import React from "react";
import logo from "./logo.svg";
import { RecoilRoot } from "recoil";

import "./App.css";
import {
  Sidebar,
  Dashboard,
  About,
  Resume,
  Contact,
  Homepage,
  NavBar,
  Personas,
  Development,
  Redesign,
  ConnectTheSpots,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Homepage />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="projects" element={<Dashboard />} />
              <Route path="projects/personas" element={<Personas />} />
              <Route path="projects/development" element={<Development />} />
              <Route
                path="projects/connectthespots"
                element={<ConnectTheSpots />}
              />
              <Route path="projects/redesign" element={<Redesign />} />

              {/* <Route path="resume" element={<Resume />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
