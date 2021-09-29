import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../css/ItemCount.css';

export default function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial);
    
    const sumar = () => {
        count < stock && setCount(count + 1);
    }
    
    const restar = () => {
        count > 0 && setCount(count - 1);
    }
    
    return (
        <>
            <div className="counter">
                <Button variant="secondary" size="lg" text="-" onClick={restar}>-</Button>
                <p style={{ margin: '0' }}>{count}</p>
                <Button variant="secondary" size="lg" text="+" onClick={sumar}>+</Button>
            </div>
            {count > 0 && <Button className="addButton" variant="primary" size="lg" onClick={()=>onAdd(count)}>Agregar al carrito</Button>}
        </>
    );
}