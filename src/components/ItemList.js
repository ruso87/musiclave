import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from './Item';

export default function ItemList({ products }){

    return (
      <Container>
        <Row>
          {products.map((cadaProducto) => (
            <Item {...cadaProducto} key={ cadaProducto.id }/>
          ))}
        </Row>
      </Container>
    );


}