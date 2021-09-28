import Container from 'react-bootstrap/Container';
import Logo from './Logo';
import '../css/Footer.css';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <Container>
            <Link to="/" className="footer-brand">
                    <Logo logoDsk='./media/logo-musiclave-70.png' logoMbl='./media/logo-musiclave-40.png' />
            </Link>
            <p>© Ruso87 de Andrés Hernández. <a href="https://github.com/ruso87"><i class="fab fa-github"></i></a></p>
            <p>Musiclave es una empresa inventada por Andrés Hernández como entrega final del curso de React JS.</p>
        </Container>
    )
}