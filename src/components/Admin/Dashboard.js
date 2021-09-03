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
            </div>
        </div>
    )
}
