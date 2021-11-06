import React , {useState,useEffect} from 'react'
import NavBar from './NavBar'
import  "../../style/UserHome.css"
import "animate.css"
import Axios from "axios"
import Cookies from 'js-cookie'

export default function Home() {

    let blog = [] ; let uniq = []
    const [blogs , setBlogs] = useState([]);

    useEffect(async () => {
        await Axios.get("http://localhost:8080/getticketsuser/"+Cookies.get("idu")).then(async (response)=>{
            for(var i = 0 ; i<response.data.length ; i++)
            {
                await Axios.get("http://localhost:8080/getblog/"+response.data[i].idBlog.toString()).then(async (resp)=>{
                    blog.push(resp.data)
                })
            }
            await setBlogs(blog)
        })
    }, [])

    const filteredArr = blogs.reduce((acc, current) => {
        const x = acc.find(item => item._id === current._id);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
    console.log(filteredArr)

    return (
        <div className="home">
            <NavBar/>
            <div className="blog">
                <span style={{opacity : "0"}}>d</span>
                <h1 className="animate__animated animate__backInDown">Welcome to My blog</h1>
                <h2 className="animate__animated animate__bounceInLeft animate__delay-1s">Collect your trendy Knowledge</h2>
                <p className="animate__animated animate__bounceInRight animate__delay-1s">Use your blog to connect. Use it as you. Don't "network" or "promote". Just talk.</p>
            </div>
            <div className="nameblogs">
                <h3>Here are my Blogs</h3>
                {filteredArr.map((blog)=>{
                    return(
                        <div>
                            <p>{blog.name}</p>
                        </div>
                    )
                }
                    
                )}
            </div>
        </div>
    )
}
