import React from 'react'
import SideBar from './SideBar'
import "../../style/Tickets.css"
import TableTickets from './Table/TableTickets'

export default function Tickets() {
    return (
        <div className="admintickets">
            <SideBar/>
            <TableTickets/>
        </div>
    )
}
