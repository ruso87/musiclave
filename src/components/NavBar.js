import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoDsk from '../media/logo-musiclave-70.png';
import logoMbl from '../media/logo-musiclave-40.png';
import CartIco from './CartWIdget';
import '../css/NavBar.css';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand href="#home">
                    <picture>
                        <source media="(min-width:650px)" srcset={logoDsk} />
                        <img alt="Musicalve - Tu musica está por nacer" src={logoMbl} className="logo"/>
                    </picture>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navItems">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartIco />
            </div>
        </Navbar>
    )
}

export default NavBar;