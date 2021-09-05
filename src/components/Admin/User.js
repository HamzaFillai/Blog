import React from 'react'
import SideBar from './SideBar'
import "../../style/User.css"
import TableUsers from "./Table/TableUsers"
import { BrowserRouter as Router } from 'react-router-dom';

export default function User() {
    return (
        <div style={{display:"flex",background:"#F7F6F2"}}>
            <SideBar />
            <TableUsers/>
        </div>
    )
}
