import React, { useState } from 'react';
import Button from './Button';
import Card from 'react-bootstrap/Card';

export default function ItemCount({ stock, initial }) {
    const [count, setCount] = useState(parseInt(initial));
    const [prodStock, setProdStock] = useState(stock);

    function sumar (){
        if (count < prodStock){
            setCount(count + 1)
        }
    }
    function restar (){
        if (count > 0){
            setCount(count - 1)
        }
    }
    
    return (
        <Card className="col-md-3">
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>Producto</Card.Title>
                <Card.Text>
                Descripción del producto que venderemos.
                </Card.Text>
                <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                    <Button className="btn" text="-" onAdd={() => restar()} />
                    <p style={{ margin: '0' }}>{count}</p>
                    <Button className="btn" text="+" onAdd={() => sumar()} />
                </div>
            </Card.Body>
        </Card>
    );
}

