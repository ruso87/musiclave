import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [myCart, setMyCart] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
  

    const addItem = (item, cantidad) => {
        // inicializo newCart y lo utilizo en esta función para no mutar myCart
        let newCart = myCart

        // saco la cuenta del precio total que se quiere agregar 
        const sumPrecio = {...item}.price * cantidad;

        // genero mi objeto newItem para agregarlo
        let newItem = { id: item.id, name: item.name, img: item.img, price: sumPrecio, quantity: cantidad }

        if (isInCart({...item}.id)){
            // si el Producto está en el carrito primero anoto en qué posición está
            const idx = newCart.findIndex( (obj) => obj.id === {...item}.id );

            // lo elimino de newCart
            newCart = newCart.filter(( e ) => e.id !== {...item}.id);

            // lo agrego de nuevo en la misma posición que estaba para que al usuario no se le modifique la posición y lo vea extraño
            newCart.splice(idx, 0, newItem);

            // actualizo MyCart
            setMyCart(newCart)
        } else {
            // si el Producto no está en el carrito, actualizo MyCart directamente
            newCart = [...newCart, newItem];
            setMyCart(newCart)
        }
    }

    const isInCart = (id) => {
        const search = myCart.filter((item) => item.id === id);
        return search.length > 0;
    };

    const removeItem = (producto) =>{
        const myNewCart = myCart.filter(( e ) => e.id !== producto);
        setMyCart(myNewCart)
    }

    const vaciarCarrito = () => {
        setMyCart([])
    };

    useEffect (() => {
        let inCart = 0;
        for (let i of myCart) {
            inCart += i.quantity
        }
        setItemsInCart(inCart)

        let cartPrice = 0;
        for (let i of myCart) {
            cartPrice += i.price
        }
        setTotalPrice(cartPrice)
    }, [myCart]);
    

    return (
        <CartContext.Provider value={{ myCart, setMyCart, addItem, isInCart, itemsInCart, setItemsInCart, removeItem, vaciarCarrito, totalPrice, setTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
