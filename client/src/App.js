import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState} from "react";

import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {



  // function testFn(){
  //   fetch("/api/test")
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }
  // function sendData(){
  //   fetch("/api/newData", {
  //     method: "POST",
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({testData: "hello", info: "cool string"})
  //   })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  // }

  function sendRegisterData(obj){
    fetch("/register", {
      method: "POST",
      headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
    .then((res) => res.json())
    .then(data => console.log(data))
  }




  return (
    <div className="App">
      <header className="App-header">
        {/* <p>Open browser console and click the button below. Console should print "testing stuff" on click</p>
        <button className="btn btn-primary" onClick={testFn}>Test button</button> */}
        {/* <button onClick={sendData}>Click to send data to back end</button> */}




        {/* <LoginForm></LoginForm> */}
        <RegistrationForm handleReg={sendRegisterData}></RegistrationForm>
        
      </header>
    </div>
  );
}

export default App;
