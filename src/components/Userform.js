import React, { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../Utils/BaseUrl';

const Userform = ({ onAdded }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleMobileChange = (event) => {
      setMobile(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();  
      const newUser = {
        name,
        email,
        mobile
      };
  
      axios.post(`${baseURL}/api/users`, newUser)
        .then(response => {
          console.log(response.data);
  
          setName('');
          setEmail('');
          setMobile('');
          
          onAdded();
        })
        .catch(error => console.log(error));
    };
  
    return (
      <div className='form_container'>
        <h2>User</h2>
        <form className='form'>
          <div className='input_field'>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />
          </div>
  
          <div className='input_field'>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
          </div>
  
          <div className='input_field'>
              <label htmlFor="mobile">Mobile:</label>
              <input type="tel" id="mobile" name="mobile" value={mobile} onChange={handleMobileChange} required />
          </div>
  
          <button className='btn' type="submit" onClick={handleSubmit}>Add User</button>
        </form>
      </div>
    );
}

export default Userform
