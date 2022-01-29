import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState} from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {


  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Navbar/>
        </header>
      </div>
    </Router>
    
  );
}

export default App;
