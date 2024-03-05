import React, { useState } from 'react'
import './registerpage.css'
import { FcGoogle } from 'react-icons/fc';

const Loginpage = () => {

    const [formData,setFormData]=useState({
        email:"",
        password:""
    });

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setFormData((prevData)=>({...prevData,[name]:value}));
    };

    const handleSubmit = () => {
        fetch('http://localhost:8000/auth/login', {
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
        <img src='https://us.123rf.com/450wm/topvector/topvector2209/topvector220900965/192918408-financial-advisor-giving-advice-investment-money-market-analysis-management-planning-for-customer.jpg?ver=6'></img>
      </div>
    <div className='register-right'>
       <h2> Welcome Back</h2>
       <div className='input-wrapper'>
           <h4>New User!!! 
                <a href='/register'>   Register Here</a>
          </h4>
     </div>
       <div className='input-wrapper'>
          <label>Email</label>
          <input type='email' name='email' value={formData.email} onChange={handleChange}></input>
       </div>

       <div className='input-wrapper'>
          <label>Password</label>
          <input type='password' name='password' value={formData.password} onChange={handleChange}></input>
       </div>
       <div>
          <button className='register-btn' onClick={handleSubmit}>SignIn</button>
       </div>
       <hr></hr>

       <div className='gAuth'>
          <h2>Continue with <span className="google-icon"><FcGoogle /></span></h2>
        </div>
    </div>

  </div>
  )
}

export default Loginpage
