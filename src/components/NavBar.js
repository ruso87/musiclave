import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Logo';
import CartIco from './CartWidget';
import '../css/NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <Navbar className="navbar navbar-light bg-white border-bottom navbar-expand justify-content-between flex-column flex-lg-row">
            <Container>
            <Link to="/" className="navbar-brand">
                    <Logo logoDsk='./media/logo-musiclave-70.png' logoMbl='./media/logo-musiclave-40.png' />
            </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navItems">
                        <Link to="/" className="nav-link">Home</Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/category/guitarras">Guitarras</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/category/bajos">Bajos</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/category/amplificadores">Amplificadores</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartIco />
            </Container>
        </Navbar>
    )
}

export default NavBar;