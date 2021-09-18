import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route

// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether light mode is enable is not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#1b0003';
    showAlert("Dark Mode Has Been Enabled", "success");
    document.title = 'TextUtils - Dark';
    }
  
    else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode Has Been Enabled", "success");
    document.title = 'TextUtils - Light';

    }
  }

  return (
    <>
      {/* <Navbar/> */}
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
{/*         
          <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exct path="/"> */}
                <TextForm showAlert={showAlert} heading="Enter The Text To Analyse Below" mode={mode}/>
              {/* </Route>
          </Switch> */}
          
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
