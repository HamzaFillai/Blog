import React , {useState,useEffect} from 'react'
import "../../../style/TableBlogs.css"
import Axios from "axios"

export default function TableBlogs() {

    var i,j,c=0;
    var f = [];
    const [blogs,setBlogs] = useState([]);
    const [count,setCount] = useState([]);

    useEffect( ()=>{
            Axios.get("http://localhost:8080/getblogs").then( (resp)=>{
                setBlogs(resp.data);
                Axios.get("http://localhost:8080/gettickets").then((response)=>{
                    for(i=0;i<resp.data.length;i++)
                    {
                        f[i]=0;
                        for(j=0;j<response.data.length;j++)
                        {
                            if(resp.data[i]._id==response.data[j].idBlog[0])
                            {
                                f[i]+=1;
                            }
                        }
                    }
                    
                    setCount(f)
                });
            });
    },[]);

    const deleteblog = (id,i)=>{
        Axios.delete("http://localhost:8080/deleteblog/"+id).then((response)=>{
            console.log("Deleted")
            setBlogs(
                blogs.filter((val) => {
                    console.log(val)
                return (val._id != id);
                })
            )
            setCount(
                count.filter((ct)=>{
                    return (ct!=i);
                })
            )
        })
        console.log(count)
    }

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
                       {blogs.map((blog,i)=>
                            <tr key={blog._id}>
                                <td>{blog.name}</td>
                                <td>{count[i]}</td>
                                <td><i onClick={()=>deleteblog(blog._id,i)} style={{color:"red",fontSize:"20px",cursor:"pointer"}} className="fas fa-trash-alt"></i></td>
                            </tr>
                       )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}