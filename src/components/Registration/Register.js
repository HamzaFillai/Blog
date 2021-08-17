import React from 'react'
import "./Register.css"

export default function Register() {
    return (
        <div className="register">
            <div className="form">
                <h1>Welcome To Blog</h1>
                <h2>Create Your Account</h2>
                <form>
                    <p>
                        <input type="text" placeholder="First Name"/>
                    </p>
                    <p>
                        <input type="text" placeholder="Last Name"/>
                    </p>
                    <p>
                        <input type="text" placeholder="Address Mail"/>
                    </p>
                    <p>
                        <input type="text" placeholder="Password"/>
                    </p>
                    <button>Sing up</button>
                </form>
            </div>
        </div>
    )
}
