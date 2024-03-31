import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from 'react'

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    });
  
  setTimeout(() =>{
    setAlert(null);
  }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#03152f';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
   <Navbar title="TextUtility" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
   <div className="container my-3">
   <Textform showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>
   {/* <About/> */}
  
   </div>
  </>
  );
}

export default App;
