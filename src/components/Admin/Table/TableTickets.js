import React , {useState,useEffect} from 'react'
import "../../../style/TableTickets.css";
import Axios from "axios";

export default function TableTickets() {

    const [tickets,setTickets] = useState([]);
    var P = [];
    var B = [];
    const [blog,setBlog] = useState([]);
    const [user,setUser] = useState([]);

    useEffect(async ()=>{
        await Axios.get("http://localhost:8080/gettickets").then(async (response)=>{
            setTickets(response.data);
            for(var i =0;i<response.data.length;i++)
            {
                await Axios.get("http://localhost:8080/getuser/"+response.data[i].idPerson[0]).then(async (resp)=>{
                   P.push(resp.data); 
                });
                await Axios.get("http://localhost:8080/getblog/"+response.data[i].idBlog[0]).then(async (respB)=>{
                   B.push(respB.data)
                })
            }
            await setUser(P); 
            await setBlog(B);  
        })
        
    },[]);

    const deleteTicket = (id,i)=>{
        Axios.delete("http://localhost:8080/deleteticket/"+id).then((response)=>{
            
            setTickets(
                tickets.filter((val)=>{
                    
                    return (val._id!=id)
                })
            );
            setBlog(
                blog.filter((val,j)=>{
                    return (blog[j]!=blog[i])
                })
            );
            setUser(
                user.filter((val,j)=>{
                    return (user[j]!=user[i])
                })
            )
        })
    }

    return (
        <div className="tabletickets">
            <h1>List of tickets</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name of ticket</th>
                            <th>Name of user</th>
                            <th>Name of blog</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket,i)=>
                            <tr key={ticket._id}>
                                <td>{ticket.title}</td>
                                {user.map((u,j)=>
                                    {
                                        if(j==0)
                                        {
                                            return(
                                                <td key={j}>{user[i].first_name+" "+ user[i].last_name}</td>
                                            )
                                        }
                                    }
                                )}
                                {blog.map((b,j)=>
                                    {
                                        if(j==0)
                                        {
                                            return(
                                                <td key={j}>{blog[i].name}</td>
                                            )
                                        }
                                    }
                                )}
                                <td><i onClick={()=>deleteTicket(ticket._id,i)} style={{color:"red",fontSize:"20px",cursor:"pointer"}} className="fas fa-trash-alt"></i></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}