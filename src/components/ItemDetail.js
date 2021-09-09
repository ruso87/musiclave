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

    const { myCart, addItem} = useContext(CartContext);
    const [ finalizar, setFinalizar ] = useState(false);
    const [ newInitial, setNewInitial ] = useState(props.initial);
    
    // INTENTO HACER QUE:
    // SI EL PRODUCTO YA ESTÁ EN EL CARRITO, SE MUESTRE EL NÚMERO DE ESTE PRODUCTO QUE ESTÁ EN EL CARRITO COMO INITIAL
    // PERO ENTIENDO QUE SE LO PASA POR PROPS A itemCount Y LUEGO HACE EL useEffect (trabajando...)
    useEffect(() => {
        const checkCart = myCart.findIndex( (obj) => obj.id === props.id );
        if (checkCart >= 0) {
            const actualInitial = myCart[checkCart].quantity
            setNewInitial(actualInitial);
            console.log(`myCart al cargar con initial: ${actualInitial} es`, myCart);
        }
    }, [myCart, props.id, props.initial, props.stock]);

    const agregar = (cantidad) => {
        setFinalizar(!finalizar)
        addItem(props, cantidad)
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
                    { props.stock === 0 ? (
                        <>
                        <Button className="endButton" variant="primary" size="lg" disabled={true}>Sin stock</Button>
                        <Link to="/"><p className="price">Seguir comprando!</p></Link>
                        </>
                    ) : (
                        finalizar ? (
                            <Link to="/Cart"><Button className="endButton" variant="primary" size="lg">Finalizar compra</Button></Link>
                        ) : (
                            <ItemCount initial={newInitial} stock={props.stock} onAdd={ (cant) => agregar(cant)} />
                        )
                    )}
                </Col>
            </Row>
        </Container>
    );


}