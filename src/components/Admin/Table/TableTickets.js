import React from 'react'
import "../../../style/TableTickets.css"

export default function TableTickets() {
    return (
        <div className="tabletickets">
            <h1>List of tickets</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name of ticket</th>
                            <th>Name of blog</th>
                            <th>Name of user</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Paris</td>
                            <td>First</td>
                            <td>Hamza</td>
                            <td>Delet</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
