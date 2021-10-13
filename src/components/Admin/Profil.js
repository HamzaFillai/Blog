import React , {useState,useEffect} from 'react'
import SideBar from './SideBar'
import "../../style/Profil.css"
import Axios from 'axios';

export default function Profil() {

    const [oldpassword,setOldpassword] = useState("");
    const [newpassword,setNewpassword] = useState("");
    const [confirmation,setConfirmation] = useState("");
    const [admin,setAdmin] = useState([]);
    const [error,setError] = useState("");
    const [confirm,setConfirm] =useState("");
    const [success,setSuccess] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:8080/getadmin").then( async(response)=>{
            await setAdmin(response.data);
        })
    }, [])

    const changepassword = () =>{
        if(admin[0].password!==oldpassword)
        {
            setError("It does not match your old password ");
            setConfirm(null);
            setSuccess(null);
        }
        else if(newpassword!==confirmation)
        {
            setConfirm("The passwords do not match");
            setSuccess(null);
            setError(null);
        }
        else
        {
            Axios.put("http://localhost:8080/updatepassordadmin",{newpassword:newpassword}).then((response)=>{
                setSuccess("You have successfully changed your password");
                setConfirm(null);
                setError(null)
            })       
        }
    }

    return (
        <div className="adminprofile">
            <SideBar/>
            <div className="profile">
                <h1>Profile Settings</h1>
                <div className="flexfomr">
                    {admin.map((myinfo)=>{
                        return (
                            <div key={myinfo._id} className="profileinfo">
                                <h2>Profile Information</h2>
                                    <div>
                                        <p><i className="fas fa-user"></i></p>
                                        <p style={{marginTop:"-9vh",marginLeft:"40px"}}>
                                            <label>Full Name</label><br/>
                                            <input type="text" value={myinfo.first_name+" "+myinfo.last_name} disabled/>
                                        </p>
                                    </div>
                                    <div>
                                        <p><i className="fas fa-bookmark"></i></p>
                                        <p style={{marginTop:"-9vh",marginLeft:"40px"}}>
                                            <label>Designation</label><br/>
                                            <input type="text" value="Admin" disabled/>
                                        </p>
                                    </div>
                                    <div>
                                        <p><i className="fas fa-envelope"></i></p>
                                        <p style={{marginTop:"-9vh",marginLeft:"40px"}}>
                                            <label>Email</label><br/>
                                            <input type="text" value={myinfo.email} disabled/>
                                        </p>
                                    </div>
                                </div>
                        )
                    })}
                    <div className="profilepass">
                        <h2>Change Password</h2>
                        <p style={{color:"green",fontWeight:"bold"}}>{success}</p>
                        <p style={{color:"red",fontWeight:"bold"}}>{error}</p>
                        <p>
                            <label>Old Password</label><br/>
                            <input type="password" onChange={(e)=>setOldpassword(e.target.value)}/>
                        </p>
                        <p style={{color:"red",fontWeight:"bold"}}>{confirm}</p>
                        <p>
                            <label>New Password</label><br/>
                            <input type="password" onChange={(e)=>setNewpassword(e.target.value)}/>
                        </p>
                        <p>
                            <label>Confirm Password</label><br/>
                            <input type="password" onChange={(e)=>setConfirmation(e.target.value)}/>
                        </p>
                        <button onClick={()=>changepassword()}>CHANGE PASSWORD</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
