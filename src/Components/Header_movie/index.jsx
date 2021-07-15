import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Navbar, Form, FormControl, Nav, NavDropdown, Button } from "react-bootstrap"

const none={
    textDecoration:"none",
    color:"#fff"
}

const noneText={
    textDecoration:"none",
    color:"#b0bec5"
}

function Header() {
    return (
        <div className="bg-dark bg-gradient">
            <Container className="">
                <Navbar variant="dark" expand="lg">
                    <Navbar.Brand className="ms-2"><Link to="/" style={none} > Playflix</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/inicial" to="/inicial">Inicio</Nav.Link>
                            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Ação</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Aventura</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Comédia</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Fantasia</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/filmes" to="/filmes">Filmes</Nav.Link>
                            <Nav.Link href="/series"><Link style={noneText} to="/series">Séries</Link></Nav.Link>
                            <Nav.Link href="#action1">Infantil</Nav.Link>
                        </Nav>
                        <div className="w-50"></div>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Pesquisa"
                                className="ml-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}

export default Header