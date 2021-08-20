import React,{useState} from 'react'
import "./Register.css"
import Axios from "axios"

export default function Register() {

    const [firstname,setFirstname] = useState("");
    const [lastname,setLastName] = useState("");
    const [mail,setMail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    const save = ()=>{
        if(firstname=="" || lastname=="" || mail=="" || password=="")
        {
            setError("Please fill in all the fields")
        }
        else
        {
            Axios.post("http://localhost:8080/savingusers",{
                firstname : firstname,
                lastname : lastname,
                mail : mail,
                password : password
            }).then((response)=>{
                if(response.data.error)
                {
                    setError(response.data.error)
                }
                if(response.data.inserted)
                {
                    setError("")
                    window.location.href="/login";
                }
            })
        }
    }
    return (
        <div className="register">
            <div className="form">
                <h1>Welcome To Blog</h1>
                <h2>Create Your Account</h2>
                <p>{error}</p>
                <div>
                    <p>
                        <input type="text" placeholder="First Name" onChange={(e)=>setFirstname(e.target.value)}/>
                    </p>
                    <p>
                        <input type="text" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}/>
                    </p>
                    <p>
                        <input type="text" placeholder="Address Mail" onChange={(e)=>setMail(e.target.value)}/>
                    </p>
                    <p>
                        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    </p>
                    <button onClick={()=>save()}>Sing up</button>
                </div>
            </div>
        </div>
    )
}
