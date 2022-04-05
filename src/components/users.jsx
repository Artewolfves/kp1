import React, { useState } from 'react'
import api from '../api'
const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const hendleDelete = (id) => {
    setUsers(prevState => prevState.filter((user)=> user._id!==id))
  
  }
  const renderPhrase = () => {
   
    if (users.length < 0) 
    return <span className = "badge bg-primary" > {users.length} человек тусанёт с тобой сегодня</span>;
    if (users.length >=5) 
    return <span className = "badge bg-primary" > {users.length} человек тусанёт с тобой сегодня</span>;
    if (users.length <5 ) 
    return <span className = "badge bg-primary" > {users.length} человека тусанёт с тобой сегодня</span>;
    
  }
 

  if (users.length === 0 ) 
  return <h2><span className = "badge bg-danger" > Никто с тобой не тусанёт</span></h2> ;

  return (
<>
  <h2>{renderPhrase()}</h2>
    
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
      <td>
         {user.qualities.map((item) => (
       <span className={'badge m-1 bg-' + item.color} key={item._id}>{item.name}</span> 
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
