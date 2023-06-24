import './style.css'
import * as React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

export default function App() {
  const[mode, setMode] = useState('dark');
  const[alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=> {
  if(mode === 'dark'){
    setMode('light');
    document.body.style.backgroundColor = "#2B547E";
    showAlert("Dark Mode has been enabled", "success");
    document.title = "Placements with Rohit - Dark";
  //   setInterval(()=>{
  //     document.title = "Placements with Rohit - Dark";
  //   }, 2000);
  //   setInterval(()=>{
  //     document.title = " View Placements with Rohit - Videos";
  //   }, 1500);
  }
  else{
    setMode('dark');
    document.body.style.backgroundColor = "white";
    showAlert("Light Mode has been enabled", "success");
    document.title = "Placements with Rohit - Light";
  }
}

  return (
  <>
    <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        <About/>
      </div>
    {/* <Router>
      <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
        <Route path="/about">
            <About/>
        </Route>
        <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
      </Switch> 
      </div>
    </Router>  */}
  </>
  );
}
