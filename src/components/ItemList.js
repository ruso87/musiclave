import React, { useState, useEffect } from 'react';
import Item from './Item';
import Row from 'react-bootstrap/Row';

export default function ItemList(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
      new Promise((resolve, reject) => {
        ///
        const productos = [
          {
            id: "1",
            name: "Guitarra Gibson",
            description: "Guitarra Gibson SG",
            stock: 10,
            initial: 0
          },
          {
            id: "2",
            name: "Guitarra Fender",
            description: "Guitarra Electrica Fender Strotocaster",
            stock: 7,
            initial: 0
          },
          {
            id: "3",
            name: "Bajo Ivanez",
            description: "Bajo eléctrico Ivanez Gibson SG",
            stock: 5,
            initial: 0
          },
          {
            id: "4",
            name: "Amplificador Orange",
            description: "Amplificador marca Orange",
            stock: 20,
            initial: 0
          }
        ];
        setTimeout(() => resolve(productos), 2000);
      })
        .then((productosResolve) => {
          setProducts(productosResolve);
        })
        .catch((error) => {
          console.log("error:", error);
        });
    }, []);

    return (
      <Row>
        {products.map((cadaProducto) => (
          <Item {...cadaProducto} key={ cadaProducto.id }/>
        ))}
      </Row>
    );


}