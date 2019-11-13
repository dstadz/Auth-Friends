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
  const [friends, setFriends] = useState([])
  useEffect(() => {
    getData();
    if(!sessionStorage.getItem('token')){
      console.error('plz log in')
    } else {
      console.info('we are logged in')
    }
  },[])

  const getData = () => {
    axios.get(`http://localhost:5000/api/friends`,{
      headers: {authorization: sessionStorage.getItem('token')}
    })
    .then(res =>{
      setFriends(res.data)
      
    })
  }
  console.log(friends)

  return (
    <div> 
      <h2>Friends:</h2>
      <ul>
        {friends.map(f => (
          <li key={f.id}>
              {f.name} is {f.age} years old. Reach them at {f.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FriendList