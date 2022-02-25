import React from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container} from 'react-bootstrap';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='bottom'>
                <Container >

                    <div>
                        
                        <Nav.Link ><Link to={'/'} style={{ textDecoration: 'none', color: 'beige' }}>Tienda Gamer</Link></Nav.Link>
                    </div>

                    <div style={{ textDecoration: 'none', color: 'beige' }}>
                        <p>Hecha por: </p>
                        <a
                            rel='noreferrer'
                            target="_blank"
                            href='https://www.linkedin.com/in/agustin-aguilar/'
                            style={{ textDecoration: 'none', color: 'beige', margin:'auto', padding:'auto' }}

                        >Agustin Aguilar 
                            <BsLinkedin />
                        </a>
                    </div>

                </Container>
            </Navbar>
        </>
    )
}

export default Footer