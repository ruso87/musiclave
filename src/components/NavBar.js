import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Logo';
import CartIco from './CartWidget';
import '../css/NavBar.css';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
            <Link to="/" className="navbar-brand">
                    <Logo logoDsk='/media/logo-musiclave-70.png' logoMbl='/media/logo-musiclave-40.png' />
            </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navItems">
                        <Link to="/" className="nav-link">Home</Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <Link to="/category/guitarras" className="dropdown-item" role="button">Guitarras</Link>
                            <Link to="/category/bajos" className="dropdown-item" role="button">Bajos</Link>
                            <Link to="/category/amplificadores" className="dropdown-item" role="button">Amplificadores</Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartIco />
            </Container>
        </Navbar>
    )
}