import React from 'react'
import "../../style/Navbar.css"

export default function Navbar() {
    return (
        <div className="homanav">
            <div className="blog">
                <i className="fab fa-blogger-b"></i>
            </div>
            <div className="logsign">
                <p><a href="/login"><i className="fas fa-sign-in-alt"></i> Login</a></p>
                <p><a href="/register"><i className="fas fa-user-plus"></i> Sign up</a></p>
            </div>
        </div>
    )
}
