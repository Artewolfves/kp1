import React, { useState } from 'react'
import api from '../api'
const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
  const hendleDelete = (id) => {
    setUsers(prevState => prevState.filter((user)=> user._id!==id))
  
  }
  const renderPhrase = (number) =>{
  

  }
    
    return (
<>
<h2><span className = "badge bg-primary"></span></h2>
    <table className ="table">
  <thead>
    <tr>
      <th scope="col">Имя</th>
      <th scope="col">Качества</th>
      <th scope="col">Профессия</th>
      <th scope="col">Встретился, раз</th>
      <th scope="col">Оценка</th>
    </tr>
  </thead>
  <tbody>
   
    {users.map((user) => (
    <tr key={users._id}>
      <td >{user.name}</td>
      
      
      <td> {users.map((qualities) => (
       <span className={'badge m-1 bg-' + qualities.color} key={qualities._id}>{user.qualities.name}</span> 
       ))} 
       </td>
         
    
      <td >{user.profession.name}</td>
      <td >{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td><button className = 'btn btn-danger' 
      onClick = {()=>hendleDelete(user._id)}
      >delite</button></td>
    </tr>
   ))}
 
  </tbody>

</table>

</>
    )
};
export default Users;
