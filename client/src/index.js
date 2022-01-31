import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import "./index.css"
// import Page1 from "./Page1";
// import Page2 from "./Page2";
// import App from './App';
// ;


//  const rootElement = document.getElementById("root");
//  ReactDOM.render(
//    <BrowserRouter>
//     <Switch>
//      <Route exact path="/" component={App} />
//      <Route exact path="/page1" component={Page1} />
//      <Route exact path="/page2" component={Page2} />
//    </Switch>
//    </BrowserRouter>,
//    rootElement
//  );