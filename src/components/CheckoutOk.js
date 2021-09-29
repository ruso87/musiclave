import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Loading from './Loading';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Checkout.css';

export default function CheckoutOk() {

    const { purchaseId, loading } = useContext(CartContext);

    if (loading) {
      return <Loading />;
    }

    return (
        <Container className="checkoutDetalle">
            <Row>
                <Col><h1>Felicitaciones!</h1></Col>
            </Row>
            <Row>
                <Col><h3>Tu compra se realizó con exito!</h3></Col>
            </Row>
            <Row>
                <Col><h2>Tu código de seguimiento es: <span>{purchaseId}</span></h2></Col>
            </Row>
        </Container>
    )
}