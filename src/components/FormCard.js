// FormCard.js
import React from 'react';
import './formcard.css'; // Import CSS file for styling

const FormCard = (props) => {
  const { name, email, certificateNo, ratings } = props.Data; // Destructure props

  return (
    <div className="card">
        <div className='img-section'>
             <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' className="image"></img>
        </div>
        <div className='content-area'>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Certificate No: {certificateNo}</p>
            <p>Ratings: {ratings}</p>
        </div>
      
    </div>
  );
};

export default FormCard;
