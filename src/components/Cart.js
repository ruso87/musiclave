import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Container from 'react-bootstrap/Container';

export default function Cart() {

    const { myCart } = useContext(CartContext);

    return (
        <Container>
            <h1>Mi carrito</h1>
            { myCart.map((item) => {
                return (
                    <p>Producto: {item.name}. Cantidad: {item.quantity}</p>
                    )
                })
            }
        </Container>
    )
}