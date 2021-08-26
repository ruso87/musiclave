import { useState } from "react";
import '../css/ItemDetail.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail(props){

    const [compra, setCompra] = useState();
    const [finalizar, setFinalizar] = useState(false);

    const onAdd = (cantidad) => {
        setCompra(cantidad);
        setFinalizar(!finalizar)
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
                        <ItemCount initial={props.initial} stock={props.stock} click={ (cant) => onAdd(cant)} />
                    )}
                </Col>
            </Row>
        </Container>
    );


}