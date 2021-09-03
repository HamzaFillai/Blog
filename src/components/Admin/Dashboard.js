import React from 'react'
import SideBar from './SideBar'
import "../../style/Dashboard.css"

export default function Dashboard() {
    return (
        <div className="admindashboard">
            <div>
                <SideBar/>
            </div>
            <div className="dashboad">
                <h1>Dashboard</h1>
                <div className="blogsdash">
                    <p className="title">Blogs</p>
                    <p className="number">12</p>
                    <p><i className="fas fa-chart-bar"></i></p>
                </div>
                <br/>
                <div className="usersdash">
                    <p className="title">Users</p>
                    <p className="number">12</p>
                    <p><i className="fas fa-chart-bar"></i></p>
                </div>
                <br/>
                <div className="ticketsdash">
                    <p className="title">Tickets</p>
                    <p className="number">12</p>
                    <p><i className="fas fa-chart-bar"></i></p>
                </div>
            </div>
        </div>
    )
}
