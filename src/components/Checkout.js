import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import '../css/Checkout.css';

const Field = ({ item, onValueChange }) => (
    <Col className="mb-3" md={6}>
        <Form.Control type={item.type} placeholder={item.title} onChange={evt => onValueChange(evt.target.value, item.key)} />
    </Col>
);
  
export default function PurchaseForm() {

    const { myCart, totalPrice, finalizarCompra, formatPrice, user, setUser } = useContext(CartContext);
    
    const onValueChange = (value, key) => {
        setUser({
          ...user, [key]: value
        });
      };
    
    const elements = [
        { title: 'Nombre', key: 'nombre', type: 'text' },
        { title: 'Apellido', key: 'apellido', type: 'text' },
        { title: 'E-mail', key: 'email', type: 'email' },
        { title: 'Teléfono', key: 'tel', type: 'number' }
    ];

    const isDisable = user.nombre === '' || user.apellido === '' || user.email === '' || user.tel === '';
    
    return (
        <Container>
            <Row>
                <h1>Ya casi es tuyo!</h1>
            </Row>
            <Row>
                <h2 className="checkoutDetalle">Detalle de tu compra:</h2>
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
               <Col md={{ span: 6, offset: 3 }}>
                   <p>Por favor completá los siguientes datos para finalizar la compra:</p>
                    <Form>
                        <Row>
                            {elements.map(el => (
                                <Field item={el} onValueChange={onValueChange} key={el.title}/>
                            ))}
                            <Col className="mb-3"  lg={{ span: 6, offset: 3 }}>
                                <Link to={`/Checkout-ok`}>
                                    <Button disabled={isDisable} variant="primary" size="lg" alt="Vaciar carrito" onClick={()=>finalizarCompra()} className="sendButton"><i className="far fa-check"></i> Confirmar Compra</Button>
                                </Link>
                            </Col>
                            <Col className="mb-3" lg={3}>
                                <Link to={`/Cart`}>
                                    <Button variant="danger" size="lg" alt="volver" className="sendButton"><i className="far fa-arrow-left"></i> volver</Button>
                                </Link>
                            </Col>
                        </Row>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}