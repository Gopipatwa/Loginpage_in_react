import './App.css';
import React from 'react';
import Signup from './components/LoginSignPage/Signup'
import { Loginpage } from './components/LoginSignPage/Loginpage';


function App() {
  return (
    <div>
      <Signup/>
      <Loginpage/>
    </div>
  );
}

export default App;
