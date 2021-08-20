import ItemCount from "./ItemCount"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom";


export default function Item(props) {
    return (
        <Card className="col-md-3">
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{ props.name }</Card.Title>
                <Card.Text>{ props.description }</Card.Text>
                <ItemCount stock={ props.stock } initial={ props.initial}/>
                <Link to={`/detalle/${ props.id }`}>ir al detalle</Link>
            </Card.Body>
        </Card>
    );
};