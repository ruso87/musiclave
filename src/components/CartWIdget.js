import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

export default function CartIco( props ) {

    const { itemsInCart } = useContext(CartContext);

    return (
        <Link to="/Cart" className="cartIco" role="button">
            <i className="fas fa-shopping-cart"></i>
            {itemsInCart === 0 ? (
                ""
            ) : (
                <span>{itemsInCart}</span>
            )}
        </Link>
    )
}