import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function NoMatch(){

    return (
        <Container>
            <Row>
                <Col md={12} className="centered"><h2>Oh oh! Parece que no hay nada por aquí...</h2></Col>
                <Col md={12} className="centered">
                    <Link to="/">
                        <Button variant="primary" size="lg">¡Empezá a comprar y dejá tu música fluir!</Button>
                    </Link></Col>
            </Row>
        </Container>
    );


}