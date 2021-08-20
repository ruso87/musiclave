import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import ItemDetail from './ItemDetail';
import { productos } from './Productos';

export default function ItemDetailContainer() {

    const  [item, setItem] = useState([]);
    const { id } = useParams();

    const getItem = () => {
        new Promise ((resolve, reject) => {
            setTimeout(() => {
                const prod = productos.filter((asd)=>asd.id === id)
                resolve(prod)
            }, 2000)
        })
        .then (dataResolve => {
            setItem(dataResolve);
        })
        .catch (err => console.log(err)); 
    } 

    useEffect(() => {
        getItem();
    }, []);

    return (
        <Container>
            { item.map((item) => {
                return (
                    <ItemDetail id={item.id} name={item.name} img={item.img} price={item.price} description={item.description} />
                    )
                })
            }
        </Container>
    )
}