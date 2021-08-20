import React, { useState, useEffect } from 'react';
import Item from './Item';
import Row from 'react-bootstrap/Row';
import { productos } from './Productos';

export default function ItemList(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      new Promise((resolve, reject) => {
        setLoading(true);
        setTimeout(() => resolve(productos), 2000);
      })
        .then((productosResolve) => {
          setProducts(productosResolve);
          setLoading(false);
        })
        .catch((error) => {
          console.log("error:", error);
        });
    }, []);
    
    if (loading) {
      return <h1>Loading...</h1>;
    }
  
    return (
      <Row>
        {products.map((cadaProducto) => (
          <Item {...cadaProducto} key={ cadaProducto.id }/>
        ))}
      </Row>
    );


}