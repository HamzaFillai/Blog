import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import Cookies from 'js-cookie';

export default function NavBar() {

    const logout = () =>{
        Cookies.remove("idu");
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#AAA492"}} variant="dark">
                <Container>
                    <Navbar.Brand style={{fontSize:"30px",fontWeight:"bold"}} href="/user/home">My Blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="/user/home">Home</Nav.Link>
                        <Nav.Link href="/user/newticket">Add Ticket</Nav.Link>
                        <Nav.Link href="/user/listticket">List of Tickets</Nav.Link>
                        </Nav>
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a onClick={()=>logout()} style={{fontSize:"20px"}} href="/">Log out</a>
                        </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
