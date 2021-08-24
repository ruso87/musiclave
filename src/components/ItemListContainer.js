import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import '../css/Loading.css';
import ItemList from './ItemList';
import { productos } from './Productos';

export default function ItemListContainer(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { category } = useParams();

    useEffect(() => {
        new Promise((resolve, reject) => {
          setLoading(true);
          if (category !== undefined){
            setTimeout(() => resolve(productos.filter((prod)=>prod.category === category)), 2000);
          }else{
            setTimeout(() => resolve(productos), 2000);
        }
        })
        .then((productosResolve) => {
          setProducts(productosResolve);
          setLoading(false);
        })
        .catch((error) => {
          console.log("error:", error);
        });
    }, [category]);
    
    
    if (loading) {
      return <div className="lds-ripple"><div></div><div></div></div>;
    }
  
    return <ItemList products={ products }/>;

}