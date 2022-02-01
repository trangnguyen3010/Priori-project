import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


import Navbar from "./components/Navbar";

function App() {
  
  // NEED TO SAVE JWT TOKEN IN LOCALSTORAGE OR SOMETHING
  const [token, setToken] = useState(null);

  function loginToken(tok){
    console.log("Accessing loginToken func")
    setToken(tok);
  }

  useEffect(() => {
    console.log("Main app token: ");
    console.log(token);
  })

  return (
    <div className="App">
        <Router>
          <header className="App-header">
          <Navbar auth={setToken}/>
          </header>
        </Router>
      </div>
    
  );
}

export default App;
