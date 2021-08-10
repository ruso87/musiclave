import React, { useState } from 'react';
import Button from './Button';

export default function ItemCount({ stock, initial }) {
    const [count, setCount] = useState(parseInt(initial));
    const [prodStock] = useState(stock);

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
        <div className="d-flex" style={{ justifyContent: 'space-between' }}>
            <Button className="btn" text="-" onAdd={() => restar()} />
            <p style={{ margin: '0' }}>{count}</p>
            <Button className="btn" text="+" onAdd={() => sumar()} />
        </div>
    );
}

