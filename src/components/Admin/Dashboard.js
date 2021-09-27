import React , {useState,useEffect} from 'react'
import SideBar from './SideBar'
import "../../style/Dashboard.css"
import Axios from "axios"

export default function Dashboard() {

    const [numBlog,setNumBlog] = useState("");
    const [numUser,setNumUser] = useState("");
    const [numTick,setNumTick] = useState("");

    useEffect(()=>{
        Axios.get("http://localhost:8080/countblog").then((response)=>{
                setNumBlog(response.data);
            });
      
    },[])

    useEffect(()=>{
        Axios.get("http://localhost:8080/countuser").then((response)=>{
                setNumUser(response.data);
            });
      
    },[])

    useEffect(()=>{
        Axios.get("http://localhost:8080/countticket").then((response)=>{
                setNumTick(response.data);
            });
      
    },[])

    return (
        <div className="admindashboard">
            <SideBar/>
            <div className="dashboad">
                <h1>Dashboard</h1>
                <div className="blogsdash">
                    <p className="title">Blogs</p>
                    <p className="number">{numBlog}</p>
                    <p><i className="fas fa-chart-bar"></i></p>
                </div>
                <br/>
                <div className="usersdash">
                    <p className="title">Users</p>
                    <p className="number">{numUser}</p>
                    <p><i className="fas fa-chart-bar"></i></p>
                </div>
                <br/>
                <div className="ticketsdash">
                    <p className="title">Tickets</p>
                    <p className="number">{numTick}</p>
                    <p><i className="fas fa-chart-bar"></i></p>
                </div>
            </div>
        </div>
    )
}
