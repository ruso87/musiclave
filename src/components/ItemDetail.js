import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import '../css/ItemDetail.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ItemCount from "./ItemCount";

export default function ItemDetail(props){

    const { myCart, addItem } = useContext(CartContext);
    const [ finalizar, setFinalizar ] = useState(false);
    const [ newStock, setNewStock ] = useState(props.stock);
    const [ position, setPosition ] = useState(parseInt("-1"));

    console.log(myCart);
    
    useEffect(() => {
        const checkCart = myCart.findIndex( (obj) => obj.id === props.id );
        if (checkCart >= 0) {
            const actualStock = props.stock - myCart[checkCart].quantity
            setNewStock(actualStock);
            setPosition(checkCart);
        } else {
            console.log(`Todavía no se compro`);
        }
    }, [myCart, props.id, props.stock]);

    const isInCart = (cantidad) => {
        if (position >= 0) {
            console.log(`el producto está en la posición ${position} del Carrito`);
            myCart[position].quantity = myCart[position].quantity + cantidad;
        } else {
            console.log(`Todavía no se compro 2`);
            addItem(props, cantidad)
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
                    { newStock === 0 ? (
                        <>
                        <Button className="endButton" variant="primary" size="lg" disabled={true}>Sin stock</Button>
                        <Link to="/"><p className="price">Seguir comprando!</p></Link>
                        </>
                    ) : (
                        finalizar ? (
                            <Link to="/Cart"><Button className="endButton" variant="primary" size="lg">Finalizar compra</Button></Link>
                        ) : (
                            <ItemCount initial={props.initial} stock={newStock} onAdd={ (cant) => agregar(cant)} />
                        )
                    )}
                </Col>
            </Row>
        </Container>
    );


}