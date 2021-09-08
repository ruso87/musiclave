import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [myCart, setMyCart] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
  
    const isInCart = (id) => {
        const search = myCart.filter((item) => item.id === id);
        return search.length > 0;
    };

    const addItem = (item, cantidad) => {
        const sumPrecio = {...item}.price * cantidad;
        const freshCart = [...myCart, { id: item.id, name: item.name, img: item.img, price: sumPrecio, quantity: cantidad }];
        setMyCart(freshCart)
    }

    const removeItem = (producto) =>{
        const myNewCart = myCart.filter(( e ) => e.id !== producto);
        setMyCart(myNewCart)
    }

    const vaciarCarrito = () => {
        setMyCart([])
    };

    useEffect (() => {
        let inCart = 0;
        for (let itemDelCarrito of myCart) {
            inCart += itemDelCarrito.quantity 
        } 
        return setItemsInCart(inCart)
    } , [myCart]);
    
    useEffect (() => {
        let inCart = 0;
        for (let itemDelCarrito of myCart) {
            inCart += itemDelCarrito.price 
        } 
        return setTotalPrice(inCart)
    } , [myCart]);


    return (
        <CartContext.Provider value={{ myCart, setMyCart, addItem, isInCart, itemsInCart, setItemsInCart, removeItem, vaciarCarrito, totalPrice, setTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
