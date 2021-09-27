import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";


export default function Item(props) {

    const { formatPrice } = useContext(CartContext);

    return (
        <div className="col-lg-3 col-md-6">
            <Link to={`/item/${ props.id }`}>
                <Card>
                    <Card.Img variant="top" src={ props.img }/>
                    <Card.Body>
                        <Card.Title className="cardPrice">$ { formatPrice(props.price) }</Card.Title>
                        <Card.Title>{ props.name }</Card.Title>
                        <Card.Text className="cardDesc">{ props.description }</Card.Text>
                        <Card.Text className="cardGo">ver detalle</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};