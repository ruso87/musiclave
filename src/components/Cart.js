import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import NoMatch from './NoMatch';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../css/Cart.css';

export default function Cart() {

    const { myCart, removeItem, itemsInCart, vaciarCarrito, totalPrice, formatPrice } = useContext(CartContext);
    
    return (
        <>
            <Container>
                <Row>
                    <Col><h1>Carrito</h1></Col>
                </Row>
            </Container>
            {itemsInCart <= 0 ?
                (
                <NoMatch />
                ) : (
                <Container>
                    <Row className="th">
                        <Col lg={8} md={7}>Productos</Col>
                        <Col md={1} className="centered">Cantidad</Col>
                        <Col md={2} className="centered">Precio</Col>
                        <Col md={1} className="centered">Acciones</Col>
                    </Row>
                    { myCart.map((item) => {
                        return (
                            <Row className="td" key={item.id}>
                                <Col md={1} className="imgProducto"><img src={item.img} alt={item.name}/></Col>
                                <Col lg={7} md={6} className="nombreProducto">{item.name}</Col>
                                <Col md={1} className="centered">{item.quantity}</Col>
                                <Col md={2} className="centered">$ {formatPrice(item.price)}</Col>
                                <Col md={1} className="action">
                                    <Link to={`/item/${ item.id }`}>
                                        <Button variant="primary" size="sm" alt="Editar"><i className="fas fa-pencil"></i></Button>
                                    </Link>
                                    <Button variant="danger" size="sm" alt="Eliminar" onClick={()=>removeItem(item.id)}><i className="far fa-trash"></i></Button>
                                </Col>
                            </Row>
                            )
                        })
                    }
                    <Row className="endControls">
                        <h3>Total: $ {formatPrice(totalPrice)}</h3>
                        <Link to={`/checkout`}>
                            <Button variant="primary" size="sm" alt="Finalizar Compra" className="emptyButton"><i className="far fa-check"></i> Finalizar Compra</Button>
                        </Link>
                        <Button variant="danger" size="sm" alt="Vaciar carrito" onClick={()=>vaciarCarrito()} className="emptyButton"><i className="far fa-trash"></i> Vaciar</Button>
                    </Row>
                </Container>)
            }
        </>
    )
}