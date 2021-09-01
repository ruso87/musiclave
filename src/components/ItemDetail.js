import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import '../css/ItemDetail.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ItemCount from "./ItemCount";
import { CartContext } from "../context/cartContext";

export default function ItemDetail(props){

    const { myCart, setMyCart } = useContext(CartContext);
    const [ finalizar, setFinalizar ] = useState(false);

    console.log(myCart);

    const addItem = (cantidad) => {
        myCart.push({ id: props.id, name: props.name, quantity: cantidad });
        setMyCart(myCart)
    }

    const isInCart = (cantidad) => {
        const index = myCart.findIndex( (obj) => obj.id === props.id );
        
        if (index >= 0) {
            console.log(`el producto está en la posición ${index} del Carrito`);
            myCart[index].quantity = myCart[index].quantity + cantidad;
        } else {
            console.log(`Todavía no se compro`);
            addItem(cantidad)
        }

    };
    
    const agregar = (cantidad) => {
        setFinalizar(!finalizar)
        isInCart(cantidad);
    }

    return (
        <Container>
           <Row>
               <Col>
                    <h1 className="detailName">{ props.name }</h1>
                    <div className="detailImageContainer">
                        <img className="detailImage" src={ props.img } alt={ props.name } />
                    </div>
                </Col>
                <Col>
                    <p className="description">Descripción: { props.description }</p>
                    <h2 className="price">Precio: $ { props.price }</h2>
                    {finalizar ? (
                        <Link to="/Cart"><Button className="endButton" variant="primary" size="lg">Finalizar compra</Button></Link>
                    ) : (
                        <ItemCount initial={props.initial} stock={props.stock} onAdd={ (cant) => agregar(cant)} />
                    )}
                </Col>
            </Row>
        </Container>
    );


}