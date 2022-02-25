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
                    <Navbar.Brand >Tienda Gamer</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link ><Link to={'/'} bg="primary" style={{textDecoration: 'none'}}>Inicio</Link></Nav.Link>
                        <Nav.Link ><Link to={'/'} style={{textDecoration: 'none'}}>Productos</Link></Nav.Link>

                        <NavDropdown title="Categorias" id="nav-dropdown">
                            <NavDropdown.Item ><Link to={'/categoria/juegos'} style={{textDecoration: 'none'}}>Juegos</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={'/categoria/consolas'} style={{textDecoration: 'none'}}>Consolas</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={'/categoria/computacion'} style={{textDecoration: 'none'}}>Computacion</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Link to={'/cart'} style={{textDecoration: 'none'}}><CartWidget /></Link>                    

                </Container>
            </Navbar>
        </>
    )
}
