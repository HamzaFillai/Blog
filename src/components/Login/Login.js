import React from 'react'
import "./Login.css"

export default function Login() {
    
    return (
        <div className="login">
            <div className="form">
                <h1>Sing In</h1>
                <form>
                    <p>
                        <input type="text" placeholder="Enter your email address"/>
                    </p>
                    <p>
                        <input type="password" placeholder="Enter your password"/>
                    </p>
                    <button>Sing In</button>
                </form>
                <p>
                    <a href="/register">Don't have an account? Sign Up</a>
                </p>
            </div>
        </div>
    )
}
