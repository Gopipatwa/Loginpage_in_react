import React from 'react'
import FormInput from './FormInput'
import { useState } from 'react';

export const Loginpage = () => {

    const [Values, setValues] = useState({
        username: "",        
        password: "",
      });

    const inputs = [
        {
            id:1,
            name:"username",
            type:"text",
            placeholde:"Username",
            errorMessage:"Invalid username",
            label: "username",
            required:true
        },
        {
            id:2,
            name:"password",
            type:"password",
            placeholde:"password",
            errorMessage:"Invalid password",
            label: "Password",
            required:true
        }
    ];
    const handlesubmit = (e) => {
        e.preventDefault();
        // console.log(usernameRef);
        // const data = new FormData(e.target)
        // console.log(Object.fromEntries(data.entries()));
      };
    const onChange = (e) => {
        setValues({ ...Values, [e.target.name]: e.target.value });
      };
    
  return (
    <div className="app">
        <form onSubmit={handlesubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={Values[input.name]} onChange={onChange}/>
        ))
        }
        <button>Login</button>
        </form>
    </div>
  )
}

export default Loginpage;