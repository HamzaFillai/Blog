import React from 'react'
import SideBar from './SideBar'
import "../../style/User.css"
import TableUsers from "./Table/TableUsers"

export default function User() {
    return (
        <div className="adminusers">
            <SideBar />
            <TableUsers/>
        </div>
    )
}
