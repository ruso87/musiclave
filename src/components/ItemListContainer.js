import ItemCount from './ItemCount';

export default function ItemsList(props) {
    return (
        <div className="container">
            <p>{ props.greeting }</p>
            <ItemCount stock="5" initial="0" />
        </div>
    )
}