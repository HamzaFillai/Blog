import React , {useEffect,useState} from 'react'
import NavBar from './NavBar'
import "../../style/ListTickets.css"
import Axios from "axios"
import Cookies from 'js-cookie'
import { Button , Modal} from 'react-bootstrap';

export default function ListTickets() {

    const [tickets , setTickets] = useState([]);
    const [show, setShow] = useState(false);
    const [contained , setContained] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:8080/getticketsuser/"+Cookies.get("idu")).then((response)=>{
            setTickets(response.data)
        })
    }, [])

    const deleteTicket = (id)=>{
        Axios.delete("http://localhost:8080/deleteticket/"+id).then((response)=>{
            setTickets(
                tickets.filter((val)=>{ 
                    return (val._id!=id)
                })
            );
        })
    }

    const app = (id)=>{
        setShow(true)
        Axios.get("http://localhost:8080/getcontained/"+id).then((response)=>{
            setContained(response.data);
        })
    }

    return (
        <div className="listtickets">
            <NavBar/>
            <h1>List of my tickets</h1>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Number</th>
                            <th>Date</th>
                            <th>Contained</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket)=>
                            <tr key={ticket._id}>
                                <td>{ticket.title}</td>
                                <td>{ticket.num}</td>
                                <td>{ticket.date}</td>
                                <td><Button onClick={() => app(ticket._id)}><i style={{fontSize:"20px",cursor:"pointer"}} className="fas fa-file-alt"></i></Button></td>
                                <td><i onClick={()=>deleteTicket(ticket._id)} style={{color:"red",fontSize:"20px",cursor:"pointer"}} className="fas fa-trash-alt"></i></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
            <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Custom Modal Styling
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {contained.map((content)=>{
                    return (
                        <div key={content._id}>
                            <p>{content.contained}</p>
                        </div>
                    )
                })}
                </Modal.Body>
            </Modal>
            </>
        </div>
    )
}
