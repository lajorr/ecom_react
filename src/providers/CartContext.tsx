import { createContext, ReactNode, useContext, useState } from "react";
import Product from "../types/Product";

type Order = {
    product: Product,
    quantity: number,
    subTotal: number
}

type CartContextType = {
    orderList: Order[],
    addToCart: (product: Product) => void,
    orderLength: number,
    getTotal: () => number,
    removeItemFromCart: (id: number) => void,
    incrementQuantity: (id: number) => void,
    decrementQuantity: (id: number) => void,

}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [orders, setOrders] = useState<Order[]>([]);

    const calculateTotal = () => {
        const total = orders.reduce((prev, current) => prev + current.subTotal, 0).toFixed(2)
        return Number(total);
    }

    const removeItem = (id: number) => {
        const updatedCart = orders.filter(order => order.product.id !== id);
        setOrders(updatedCart);
    }

    const addToCart = (product: Product) => {
        const newOrder: Order = { product, quantity: 1, subTotal: product.product_price }
        const existingOrder = orders.find(order => order.product.id === product.id);

        if (existingOrder) {
            existingOrder.quantity++;
            existingOrder.subTotal += product.product_price;
        } else {
            setOrders(prev => [...prev, newOrder]);
        }
    }

    const incrementQuantity = (id: number) => {
        const order = orders.find(order => order.product.id === id);
        if (order) {
            // check if in stock
            const updatedOrder = { ...order, quantity: order.quantity + 1, subTotal: order.subTotal + order.product.product_price };
            setOrders(prev => prev.map(order => order.product.id === id ? updatedOrder : order));
        }

    }

    const decrementQuantity = (id: number) => {
        const order = orders.find(order => order.product.id === id);
        if (order) {
            if (order.quantity > 1) {

                const updatedOrder = { ...order, quantity: order.quantity - 1, subTotal: order.subTotal - order.product.product_price }
                setOrders(prev => prev.map(order => order.product.id === id ? updatedOrder : order))
            }
        }

    }

    return (
        <CartContext.Provider value={
            {
                orderList: orders,
                addToCart,
                orderLength: orders.length,
                getTotal: calculateTotal,
                removeItemFromCart: removeItem,
                incrementQuantity,
                decrementQuantity
            }
        }
        >
            {children}
        </CartContext.Provider>)
}

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider");
    }
    return context;
}