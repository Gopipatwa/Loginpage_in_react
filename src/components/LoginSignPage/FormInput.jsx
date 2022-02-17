import React from 'react'
import './forminput.css'
import { useState } from 'react';

export const FormInput = (props) => {
    const {label,errorMessage,onChange,id,...inputProps}=props;
    const [focused,setFocused] = useState(false);
    const handleFocus=(e)=>{
        setFocused(true);
    };
  return (
    <div className='FormInput'>
        {/* <input name={props.name} placeholder={props.placeholder}/> */}
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} onFocus={()=>inputProps.name==="confirmPassword" && setFocused(true)} onBlur={handleFocus} focused={focused.toString()}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput;