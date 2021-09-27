import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../css/Checkout.css';
import '../css/Loading.css';

export default function CheckoutOk() {

    const { purchaseId, loading } = useContext(CartContext);

    if (loading) {
      return <div className="lds-ripple"><div></div><div></div></div>;
    }

    return (
        <Container>
            <Row>
                <h1>Felicitaciones!</h1>
            </Row>
            <Row>
                <h3 className="checkoutDetalle">Tu compra se realizó con exito!</h3>
            </Row>
            <Row>
                <h2 className="checkoutDetalle">Tu número de seguimiento es: {purchaseId}</h2>
            </Row>
        </Container>
    )
}