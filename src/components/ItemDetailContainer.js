import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import '../css/Loading.css';
import Container from 'react-bootstrap/Container';
import ItemDetail from './ItemDetail';
// import { productos } from './Productos';
import { collection, getDocs } from 'firebase/firestore';
import { getData } from '../firebase';

export default function ItemDetailContainer() {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();


    useEffect(() => {
        setLoading(true);
        // función que busca todos los productos
        const getProduct = async () => {
        const prodCollection = collection(getData(), 'productos');
        const prodSnapshot = await getDocs(prodCollection);
        const prodList = prodSnapshot.docs.map(doc => ({
            id: doc.id, ...doc.data()
        }));
        // filtro el listado y busco el que quiero mostrar
        const thisProd = prodList.filter((item)=>item.id === id)
        setLoading(false);
        setProduct(thisProd);
        };
        getProduct();
    }, [id]);


    if (loading) {
        return <div className="lds-ripple"><div></div><div></div></div>;
    }

    return (
        <Container>
            { product.map((item) => {
                return (
                    <ItemDetail id={item.id} name={item.name} img={item.img} price={item.price} description={item.description} stock={item.stock} initial={item.initial} key={item.id}/>
                    )
                })
            }
        </Container>
    )
}