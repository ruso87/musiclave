
export default function ItemDetail(props){
    return (
        <div>
            <h1 className="name">{ props.name }</h1>
            <img className="image" src={ props.img } alt={ props.name } />
            <h2 className="price">Precio: $ { props.price }</h2>
            <p className="description">Descripción: { props.description }</p>
        </div>
    );


}