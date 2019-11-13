import React, { useState, useEffect } from 'react';
import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: sessionStorage.getItem("token")
    }
  });
};

const FriendList = () => {
  useEffect(() => {
    getData();
    if(!sessionStorage.getItem('token')){
      console.error('plz log in')
    } else {
      console.info('we are logged in')
    }
  })

  const getData = () => {
    axios.get(`http://localhost:5000/api/friends`,{
      headers: {authorization: sessionStorage.getItem('token')}
    })
    .then(res =>{
      const friends = res.data
      console.log(friends)
    })
  }
  return (
    <div> Friends</div>
  )
}

export default FriendList