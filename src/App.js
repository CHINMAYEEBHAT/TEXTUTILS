import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
{/*let name="CHINMAYEE BHAT";*/}
function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500)
  }

  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled","success");
      document.title='Textutils-Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success");
      document.title='Textutils-Light Mode';
    }
  }
  return (
    <>
    {/*<nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga beatae magnam error earum, necessitatibus delectus non illum voluptatem, accusamus aliquam sunt inventore aspernatur cumque, commodi blanditiis dolor dolorum nisi. Minus temporibus asperiores illum quae.</p>
    </div>*/}
    
<Navbar aboutText="About Textutils" mode={mode} toggleMode={toggleMode}></Navbar>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}></TextForm> 
<About mode={mode}></About>
</div>
</>
  );
}

export default App;
