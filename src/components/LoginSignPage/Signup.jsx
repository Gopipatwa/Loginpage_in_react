import React, { useState } from 'react'
import { FormInput } from './FormInput'
import "./app.css"
import { useRef } from 'react'
export const Signup = () => {
  // const [username,setUsername] = useState("");
  const [Values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage: "Inavalid username",
      label: "username",
      pattern: "[A-Za-z0-9]{3,16}$",
      required: true
    }, {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "",
      label: "Email",
      required:true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "",
      label: "Birthday",
      required:true
    }, {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage: "more..",
      label: "password",
      required:true
    }, {
      id: 5,
      name: "ConfirmPassword",
      type: "password",
      placeholder: "ConfirmPassword",
      errorMessage: "not matched",
      pattern:Values.password,
      label: "ConfirmPassword",
      required:true
    }
  ]
  // const usernameRef = useRef()
  console.log("re-rendered");

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(usernameRef);
    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()));
  };
  const onChange = (e) => {
    setValues({ ...Values, [e.target.name]: e.target.value });
  };

  console.log(Values);
  return (
    <div className="app">
      <form onSubmit={handlesubmit}>
        {/* <FormInput placeholder="Username" refer={usernameRef}/> */}
        {/* <FormInput name="username" placeholder="Username" /> */}
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={Values[input.name]} onChange={onChange} />
        ))
        }
        <button>Submit</button>
      </form>

    </div>
  )
}
export default Signup;