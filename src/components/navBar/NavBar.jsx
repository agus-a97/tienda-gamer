import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import CartWidget from "./cartWidget/CartWidget"
import { Link } from 'react-router-dom';

// //componente basado en funciones (hooks)
// // export default indica que es un componente
export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >Reservas Online</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link ><Link to={'/'} bg="primary">Inicio</Link></Nav.Link>
                        <Nav.Link ><Link to={'/'}>Productos</Link></Nav.Link>

                        <NavDropdown title="Climas" id="nav-dropdown">
                            <NavDropdown.Item ><Link to={'/categoria/humedo'}>Humedo</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={'/categoria/frio'}>Frio</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={'/categoria/templado'}>Templado</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <CartWidget />

                </Container>
            </Navbar>
        </>
    )
}
