import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/Arrays">Arrays</Link>;
                        <Link className="nav-link" to="/Objetos">Carros</Link>
                        <Link className="nav-link" to="/hello-world">Hello World</Link>
                        <Link className="nav-link" to="/PaginaInicial">Pagina Inicial</Link>
                        <Link className="nav-link" to="/page2">Orion</Link>
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Menu