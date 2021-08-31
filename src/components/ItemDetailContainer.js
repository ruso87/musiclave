import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import '../css/Loading.css';
import Container from 'react-bootstrap/Container';
import ItemDetail from './ItemDetail';
import { productos } from './Productos';

export default function ItemDetailContainer() {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve, reject) => {
          setLoading(true);
          setTimeout(() => {resolve(productos.filter((prod)=>prod.id === id))}, 2000);
        })
        .then((dataResolve) => {
        setItem(dataResolve);
        setLoading(false);
        })
        .catch((error) => {
        console.log("error:", error);
        });
    }, [id]);
      
    if (loading) {
        return <div className="lds-ripple"><div></div><div></div></div>;
    }

    return (
        <Container>
            { item.map((item) => {
                return (
                    <ItemDetail id={item.id} name={item.name} img={item.img} price={item.price} description={item.description} stock={item.stock} initial={item.initial} key={item.id}/>
                    )
                })
            }
        </Container>
    )
}