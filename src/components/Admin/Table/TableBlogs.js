import React , {useState,useEffect} from 'react'
import "../../../style/TableBlogs.css"
import Axios from "axios"

export default function TableBlogs() {

    var c , i;
    const [blogs,setBlogs] = useState([]);
    const [totalblog,setTotalblog] = useState();
    var count = [];
    const [countt,setCountt] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:8080/countblog").then((res)=>{
            c = res.data;
            setTotalblog(res.data);
            Axios.get("http://localhost:8080/getblogs").then((response)=>{
                setBlogs(response.data);
                for(i=0;i<c;i++)
                {
                    Axios.get("http://localhost:8080/countticketofblog/"+response.data[i]._id).then((resp)=>{    
                        count.push(resp.data);
                        setCountt(count)
                    })
                }
            })
            
        });
    },[]);
        
    return (
        <div className="tableblogs">
            <h1>List of blogs</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number of tickets</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {blogs.map((blog,i)=>(
                            <tr key={blog._id}>
                                <td>{blog.name}</td>
                                <td>{countt[i]}</td>
                                <td><i  style={{color:"red",fontSize:"20px"}} className="fas fa-trash-alt"></i></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}