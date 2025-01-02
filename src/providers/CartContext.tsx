import { createContext, ReactNode, useContext, useState } from "react";
import Product from "../types/Product";

type Order = {
    product: Product,
    quantity: number,
    subTotal: number
}

type CartContextType = {
    orderList: Order[],
    addToCart: (productZ: Product) => void,
    orderLength: number,
    getTotal: () => number

}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [orders, setOrders] = useState<Order[]>([]);



    const calculateTotal = () => {
        const total = orders.reduce((prev, current) => prev + current.subTotal, 0).toFixed(2)
        return Number(total);
    }

    const addToCart = (product: Product) => {
        console.log("add to cart function");
        const newOrder: Order = { product, quantity: 1, subTotal: product.product_price }
        const existingOrder = orders.find(order => order.product.id === product.id);

        console.log("new Order: ", newOrder);
        console.log("existing: ", existingOrder);
        if (existingOrder) {
            existingOrder.quantity++;
            existingOrder.subTotal += product.product_price;
            console.log("cart updated");
        } else {
            console.log("new order added");
            setOrders(prev => [...prev, newOrder]);
        }

    }

    return (<CartContext.Provider value={{ orderList: orders, addToCart, orderLength: orders.length, getTotal: calculateTotal }}>

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