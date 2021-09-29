import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CheckoutForm from './CheckoutForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Checkout.css';

export default function Checkout() {

    const { myCart, totalPrice, formatPrice, } = useContext(CartContext);
    
    return (
        <Container>
            <Row>
                <Col><h1>Ya casi es tuyo!</h1></Col>
            </Row>
            <Row>
                <Col><h2 className="checkoutDetalle">Detalle de tu compra:</h2></Col>
            </Row>
            <Row className="th">
                <Col md={9}>Productos</Col>
                <Col md={1} className="centered">Cantidad</Col>
                <Col md={2} className="centered">Precio</Col>
            </Row>
            { myCart.map((item) => {
                return (
                    <Row className="td" key={item.id}>
                        <Col md={1} className="imgProducto"><img src={item.img} alt={item.name}/></Col>
                        <Col md={8} className="nombreProducto">{item.name}</Col>
                        <Col md={1} className="centered">{item.quantity}</Col>
                        <Col md={2} className="centered">$ {formatPrice(item.price)}</Col>
                    </Row>
                    )
                })
            }
            <Row className="checkOutTotal">
                <h3>Total: $ {formatPrice(totalPrice)}</h3>
            </Row>
            <Row>
                <CheckoutForm />
            </Row>
        </Container>
    )
}