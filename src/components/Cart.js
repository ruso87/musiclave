import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../css/Cart.css';

export default function Cart() {

    const { myCart, removeItem, itemsInCart, vaciarCarrito, totalPrice, finalizarCompra } = useContext(CartContext);
    
    return (
        itemsInCart <= 0 ?
        (<Container>
            <Row>
                <h1>Carrito</h1>
            </Row>
            <Row>
                <Col md={12} className="centered"><h2>Oh oh! Parece que no hay nada por aquí...</h2></Col>
                <Col md={12} className="centered">
                    <Link to="/">
                        <Button variant="primary" size="lg">¡Empezá a comprar y dejá tu música fluir!</Button>
                    </Link></Col>
            </Row>
        </Container>
        ) : (
        <Container>
            <Row>
                <h1>Carrito</h1>
            </Row>
            <Row className="th">
                <Col md={8}>Productos</Col>
                <Col md={1} className="centered">Cantidad</Col>
                <Col md={2} className="centered">Precio</Col>
                <Col md={1} className="centered">Acciones</Col>
            </Row>
            { myCart.map((item) => {
                return (
                    <Row className="td" key={item.id}>
                        <Col md={1} className="imgProducto"><img src={item.img} alt={item.name}/></Col>
                        <Col md={7} className="nombreProducto">{item.name}</Col>
                        <Col md={1} className="centered">{item.quantity}</Col>
                        <Col md={2} className="centered">$ {item.price}</Col>
                        <Col md={1} className="action">
                            <Link to={`/item/${ item.id }`}><Button variant="primary" size="sm" alt="Editar"><i className="fas fa-pencil"></i></Button></Link>
                            <Button variant="danger" size="sm" alt="Eliminar" onClick={()=>removeItem(item.id)}><i className="far fa-trash"></i></Button>
                        </Col>
                    </Row>
                    )
                })
            }
            <Row className="endControls">
                <h3>Total: $ {totalPrice}</h3>
                <Button variant="primary" size="sm" alt="Vaciar carrito" onClick={()=>finalizarCompra()} className="emptyButton"><i className="far fa-check"></i> Finalizar Compra</Button>
                <Button variant="danger" size="sm" alt="Vaciar carrito" onClick={()=>vaciarCarrito()} className="emptyButton"><i className="far fa-trash"></i> Vaciar</Button>
            </Row>
        </Container>)
    )
}