import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Loading from './Loading';
import Container from 'react-bootstrap/Container';
import ItemDetail from './ItemDetail';
import NoMatch from './NoMatch';
import { doc, getDoc } from "firebase/firestore";
import { getData } from '../firebase';

export default function ItemDetailContainer() {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const { id } = useParams();


    useEffect(() => {
        setLoading(true);
        const getProduct = async () => {
            const docRef = doc(getData(), "productos", `${id}`);
            const docSnap = await getDoc(docRef);
            docSnap.exists() ? setProduct(docSnap.data()) : setNotFound(true);
            setLoading(false);
        };

        getProduct();

    }, [id]);

    if (loading) {
        return <Loading />;
    }
    if (notFound) {
        return <NoMatch />;
    }
    
    return (
        <Container>
            <ItemDetail id={id} name={product.name} img={product.img} price={product.price} description={product.description} stock={product.stock} initial={product.initial} key={product.id}/>
        </Container>
    )
}