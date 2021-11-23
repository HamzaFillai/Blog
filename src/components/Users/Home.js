import React , {useState,useEffect} from 'react'
import NavBar from './NavBar'
import  "../../style/UserHome.css"
import "animate.css"
import Axios from "axios"
import Cookies from 'js-cookie'
import { Carousel } from 'react-bootstrap'
import image from "../../image/blogname.jpg" 

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
                <div className="myblogs">
                    <Carousel>
                      {filteredArr.map((blog)=>{
                        return(
                              <Carousel.Item>
                                <img
                                  className="d-block w-100 h-10 d-inline-block"
                                  src={image}
                                  alt="First slide"
                                  height={500}
                                />
                                <Carousel.Caption>
                                  <h3><a href={"/user/"+blog.name}>{blog.name}</a></h3>
                                </Carousel.Caption>
                              </Carousel.Item>
                        )
                      }   
                      )}
                        
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
