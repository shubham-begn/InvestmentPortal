import React, { useState } from 'react';
import './registerpage.css';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword:""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    fetch('http://localhost:8000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className='register-container'>
      <div className='register-left'>
        <img src='https://us.123rf.com/450wm/topvector/topvector2208/topvector220800065/190068059-financial-advisor-giving-advice-on-investment-money-market-analysis-management-planning-for-customer.jpg?ver=6'></img>
      </div>
      <div className='register-right'>
         <h2> Welcome User!!!</h2>
         <div className='input-wrapper'>
            <label>Name</label>
            <input type='text' name='name' value={formData.name} onChange={handleChange}></input>
         </div>
       
         <div className='input-wrapper'>
            <label>Email</label>
            <input type='email' name='email' value={formData.email} onChange={handleChange}></input>
         </div>

         <div className='input-wrapper'>
            <label>Password</label>
            <input type='password' name='password' value={formData.password} onChange={handleChange}></input>
         </div>
         <div className='input-wrapper'>
            <label>Confirm Password</label>
            <input type='password' name='cpassword' value={formData.cpassword} onChange={handleChange}></input>
         </div>
         
         <div>
            <button className='register-btn' onClick={handleSubmit}>Register</button>
         </div>
         <hr></hr>

         <div className='gAuth'>
          <h2>Continue with <span className="google-icon"><FcGoogle /></span></h2>
        </div>
      </div>

    </div>
  );
}

export default Register;
