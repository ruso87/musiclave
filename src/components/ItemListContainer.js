import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import '../css/Loading.css';
import '../css/ItemListContainer.css'
import ItemList from './ItemList';
import NoMatch from './NoMatch';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getData } from '../firebase';

export default function ItemListContainer(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const { category } = useParams();

    
    useEffect(() => {
      setLoading(true);

      // función que busca todos los productos
      const getProds = async () => {
        const prodCollection = collection(getData(), 'productos');
        const prodSnapshot = await getDocs(prodCollection);
        const prodList = prodSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setLoading(false);
        setProducts(prodList);
      };

      // función que busca productos filtrados
      const getCategory = async () => {
        const prodCollection = collection(getData(), 'productos');
        const categoryQuery = query(prodCollection, where('category', '==', `${category}`));
        try {
          const prodSnapshot = await getDocs(categoryQuery);
          const categoryList = prodSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setLoading(false);
          setProducts(categoryList);
          if (categoryList.length === 0) {
            setNotFound(true);
          }
        } catch (err) {
          console.log(err);
        }
      };

      // elijo qué función utilizar
      if (category !== undefined){
        getCategory();
      } else {
        getProds();
      }

    }, [category]);

    
    if (loading) {
      return <div className="lds-ripple"><div></div><div></div></div>;
    }
    if (notFound) {
      return <NoMatch />;
    }

    return <ItemList products={ products }/>;

}