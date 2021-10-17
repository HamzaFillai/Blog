import React, { useState,useEffect } from 'react'
import Select from 'react-select'
import NavBar from './NavBar'
import "../../style/AddTicket.css"
import Axios from "axios"
import Cookies from 'js-cookie'
import swal from "sweetalert"

export default function AddTicket() {

    const [blogs,setBlogs] = useState([]);
    const [option,setOption] = useState("");
    const [title,setTitle] = useState("");
    const [num,setNum] = useState(0);
    const [content,setContent] = useState("");
    
    useEffect(()=>{
        Axios.get("http://localhost:8080/getblogs").then((response)=>{
            setBlogs(response.data);
        })
    },[]);

    const save = ()=>{
        if(num=="" || title=="" || content=="" || option=="")
        {
            alert("Fill in all the fields")
        }
        else
        {
            Axios.post("http://localhost:8080/saveticket/"+Cookies.get("idu"),{
                num : num,
                title : title,
                content : content,
                option : option,
            }).then((response)=>{
                swal({
                    text: "Your ticket has been added successfully",
                    type: "success",
                    timer: 4000
                    });
                window.location.href="/user/newticket";
            })
        }
    }

    return (
        <div className="newtikcet">
            <NavBar/>
            <section>
                <h1>Add new Ticket</h1>
                <div className="miniform" style={{textAlign:"center"}}>
                    <p>
                        <span>Title :</span><br/>
                        <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
                    </p>
                    <p>
                        <span>Number :</span><br/>
                        <input type="number" onChange={(e)=>setNum(e.target.value)}/>
                    </p>
                </div>
                <p style={{marginTop:"2vh",marginLeft:"40px"}}>
                    <span>Select name of the blog</span><br/>
                    <div className="selection">
                        {blogs.map((blog)=>
                            <p kzy={blog._id}>
                                <input name="blog" className="radio" type="radio" id={blog._id} value={blog._id} onChange={(e)=>setOption(e.target.value)}/>
                                <label for={blog._id}>{blog.name}</label>
                            </p>
                        )}
                    </div>
                </p>
                <p style={{marginTop:"2vh",textAlign:"center"}}>
                    <span>Content :</span><br/>
                    <textarea onChange={(e)=>setContent(e.target.value)}/>
                </p>
                <p  style={{textAlign:"center"}}>
                    <button onClick={()=>save()}>Save</button>
                </p>
            </section>
        </div>
    )
}
