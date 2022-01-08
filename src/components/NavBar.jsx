import React from "react";
import { Navbar, Container, Nav} from 'react-bootstrap'
// //componente basado en funciones (hooks)
// // export default indica que es un componente
export default function NavBar() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Tienda Gamer</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

// //componente basado en clase
// class Navbar extends Component{
//     render(){
//         return (
//             <>
//                 <div>Componente basado en Clases</div>
//             </>
//         )
//     }
// }

// //el export default va abajo
// export default Navbar

