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

    const agregar = (cantidad) => {
        setFinalizar(!finalizar)

        myCart.push({ name: props.name, quantity: cantidad });
        setMyCart(myCart)
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