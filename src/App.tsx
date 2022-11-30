import React from "react";
import logo from "./logo.svg";
import { RecoilRoot } from "recoil";

import "./App.css";
import { Sidebar, Dashboard, About, Resume, Contact } from "./components";
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <div className="sideBarApp">
          <Sidebar></Sidebar>
        </div>
        <div>
          <Dashboard></Dashboard>
        </div>
        <div>
          <Contact></Contact>
        </div>
        <div>
          <About></About>
        </div>
        <div>
          <Resume></Resume>
        </div>
      </RecoilRoot>
    </div>
  );
}

export default App;
