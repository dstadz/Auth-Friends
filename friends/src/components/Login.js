import React, { useState, useEffect } from 'react';
import useForm from 'react-hook-form';
import axios from 'axios';

export default function Login() {
  const [state, setState] = useState({
    credentials:{
      username: 'Lambda School',
      password: 'i<3Lambd4',
      },
    isLoggedIn: false
  })

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  //console.log(errors);
  
  const bigSubmit = e => {
    e.preventDefault();
    handleSubmit(onSubmit);
    axios.post(`http://localhost:5000/api/login`, state.credentials)
    .then(res => {
      const token = res.data.payload
      window.localStorage.setItem("token", token);
      setState({...state, isLoggedIn:true})
      console.log(state)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setState({ ...state, isLoggedIn: true });
    } else {
      setState({ ...state, isLoggedIn: false });
    }
  },[])

  return (
    <form onSubmit={bigSubmit}>
      <input type="text" placeholder={state.credentials.username} name="Name" ref={register({required: true, maxLength: 100})} />
      <input type="password" placeholder={state.credentials.password} name="Password" ref={register} />

      <input type="submit" />
    </form>
  );
}