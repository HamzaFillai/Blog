import React from 'react'
import NavBar from './NavBar'
import "../../style/AddTicket.css"

export default function AddTicket() {
    return (
        <div className="newtikcet">
            <NavBar/>
            <form>
                <h1>Add new Ticket</h1>
                <div className="miniform">
                    <p>
                        <span>Title :</span><td/>
                        <input type="text"/>
                    </p>
                    <p>
                        <span>Number :</span><td/>
                        <input type="number"/>
                    </p>
                </div>
                <p style={{marginTop:"5vh"}}>
                    <span>Content :</span><td/>
                    <textarea />
                </p>
                <button>Save</button>
            </form>
        </div>
    )
}
