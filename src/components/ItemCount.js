import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../css/ItemCount.css';

export default function ItemCount({ stock, initial, click }) {

    const [count, setCount] = useState(parseInt(initial));

    const sumar = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }
    const restar = () => {
        if (count > 0){
            setCount(count - 1)
        }
    }
    
    return (
        <>
            <div className="counter">
                <Button variant="secondary" size="lg" text="-" onClick={restar}>-</Button>
                <p style={{ margin: '0' }}>{count}</p>
                <Button variant="secondary" size="lg" text="+" onClick={sumar}>+</Button>
            </div>
            {count > 0 && <Button className="addButton" variant="primary" size="lg" onClick={()=>click(count)}>Agregar al carrito</Button>}
        </>
    );
}