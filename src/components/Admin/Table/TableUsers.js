import React , {useState,useEffect} from 'react'
import "../../../style/TableUsers.css"
import Axios from 'axios';

export default function TableUsers() {

  const [users,setUsers] = useState([]);

 useEffect(()=>{
    Axios.get("http://localhost:8080/getusers").then((response)=>{
            setUsers(response.data);
        })
  },[])

  const deleteuser = (id)=>{
    Axios.delete("http://localhost:8080/deleteuser/"+id).then((response)=>{
      console.log("Deleted")
      setUsers(
        users.filter((val) => {
          return val._id != id;
        })
      )
    })
  }

  return (
      <div className="tableusers">
          <h1>List of users</h1>
            <div>
                  <table>
                      <thead>
                          <tr>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Email</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                      {users.map(user=>(
                        <tr key={user._id}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td><i onClick={()=>deleteuser(user._id)} style={{color:"red",fontSize:"20px",cursor:"pointer"}} className="fas fa-trash-alt"></i></td>
                        </tr>
                    ))}
                      </tbody>
                  </table>
            </div>
      </div>
  )
}
