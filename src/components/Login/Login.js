import React,{useState} from 'react'
import "../../style/Login.css"
import Axios from "axios"
import Cookies from 'js-cookie';

export default function Login() {
    
    const [mail,setMail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const [errorlog,setErrorlog] = useState("");

    const login = ()=>{
        if(mail=="" || password=="")
        {
            setError("Please fill in all the fields")
            setErrorlog("");
        }
        else
        {
            Axios.post("http://localhost:8080/login",{
                mail : mail,
                password : password
            }).then((response)=>{
                console.log(response.data)
                if(response.data.error)
                {
                    setErrorlog(response.data.error)
                    setError("");
                }

                else
                {
                    setError("");
                    setErrorlog("");
                    if(response.data[0].role==null)
                    {
                        window.location.href="/user/home";
                        Cookies.set("idu",response.data[0]._id)
                    }
                }
            })
        }
    }

    return (
        <div className="login">
            <div className="form">
                <h1>Sing In</h1>
                <p style={{color:"red",fontWeight:"bold"}}>{error}</p>
                <div>
                    <p>
                        <input type="text" placeholder="Enter your email address" onChange={(e)=>setMail(e.target.value)}/>
                    </p>
                    <p>
                        <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
                    </p>
                    <p style={{color:"red",fontWeight:"bold",textAlign:"left"}}>{errorlog}</p>
                    <button onClick={()=>login()}>Sing In</button>
                </div>
                <p>
                    <a href="/register">Don't have an account? Sign Up</a>
                </p>
            </div>
        </div>
    )
}
