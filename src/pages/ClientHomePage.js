// ClientHomePage.js
import React, { useState } from 'react';
import data from '../data';
import FormCard from '../components/FormCard';
import './clienthomepage.css'
const ClientHomePage = () => {
  const [formData, setFormData] = useState(data);

  return (
    <div className='card-container'>
     
      <div className="form-cards-container">
        {formData.map((Data, index) => (
          <FormCard key={index} Data={Data} />
        ))}
      </div>
    </div>
  );
};

export default ClientHomePage;
