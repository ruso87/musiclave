import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom";


export default function Item(props) {
    return (
        <div className="col-md-3">
            <Card>
                <Card.Img variant="top" src=""/>
                <Card.Body>
                    <Card.Title>{ props.name }</Card.Title>
                    <Card.Text>{ props.description }</Card.Text>
                    <Link to={`/item/${ props.id }`}>ir al detalle</Link>
                </Card.Body>
            </Card>
        </div>
    );
};