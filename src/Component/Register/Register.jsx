import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  let navigate = useNavigate();
  const [error, setError] = useState('');
  const [errorList,setErrorList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    first_name:"",
    last_name:"",
    age:0,
    email:"",
    password:"",
  });
  
  function getUserData(e) {
    let myUser = {...user};
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };
  
  async function sendUserData() {
    let {data} = await axios.post('https://movies-api.routemisr.com/signup', user);
    if(data.message === 'success'){
      setIsLoading(false);
      navigate('./login');
    }
    else{
      setIsLoading(false);
      setError(data.message);
    }
  }

  function submitForm(e) {
    e.preventDefault();
    setIsLoading(true);
    let validation = validateForm();
    if(validation.error) {
      setIsLoading(false);
      setErrorList(validation.error.details);
    }
    else
      sendUserData();
  }

  function validateForm() {
    let schema = Joi.object({
      first_name: Joi.string().min(3).max(20).required(),
      last_name: Joi.string().min(3).max(20).required(),
      age: Joi.number().min(16).max(100).required(),
      email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}).required(),
      password: Joi.string().pattern(/^[a-zA-Z0-9]{8,30}$/).required()
    });
    return schema.validate(user, {abortEarly:false});
  }
 
  return (
    <>      
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {errorList.map((err, index)=> {
      if(err.context.label === 'password'){
        return <div key={index} className='alert alert-danger p-2 my-2 mx-5'>Invalid Password</div>  
      }
      else {
        return <div key={index} className='alert alert-danger p-2 my-2 mx-5'>{err.message}</div>
      }
        }
    )}
      {(error.length > 0) ? <div className='alert alert-danger p-2 mx-5'>{error}</div> : ''}
      <form onSubmit={submitForm} className='mx-5 py-4'>
        <label htmlFor="first_name">First Name :</label>
        <input onChange={getUserData} type="text" className='form-control myInput my-2' id='first_name' name='first_name'/>
        <label htmlFor="last_name">Last Name :</label>
        <input onChange={getUserData} type="text" className='form-control myInput my-2' id='last_name' name='last_name'/>
        <label htmlFor="age">Age :</label>
        <input onChange={getUserData} type="number" className='form-control myInput my-2' id='age' name='age'/>
        <label htmlFor="email">Email :</label>
        <input onChange={getUserData} type="email" className='form-control myInput my-2' id='email' name='email'/>
        <label htmlFor="password">Password :</label>
        <input onChange={getUserData} type="password" className='form-control myInput my-2' id='password' name='password'/>
        <button type='submit' className='btn btn-outline-info my-2'>{isLoading === true ? <i className='fas fa-spin fa-spinner'></i> : 'Register'}</button>
      </form>
    </>
    
  )
}

