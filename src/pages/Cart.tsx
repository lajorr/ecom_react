import CartOrderTile from '../components/cart/CartOrderTile';
import { useCartContext } from "../providers/CartContext";

const Cart = () => {

    const cartContext = useCartContext();

    const columnNames = ["Product", "Price", "Quantity", "Sub total"];
    return (
        <div className="mt-12 ">
            <div className="grid grid-cols-4 items-center text-[16px] py-3 px-4 mb-5 bg-gray-200" >
                {columnNames.map((name, idx) => (
                    <div key={name} className={`${idx !== 0 && "place-self-end"}`}>{name}</div>
                ))}
            </div>

            <div className="flex flex-col gap-4">
                {cartContext.orderLength > 0 &&
                    cartContext.cartList.map(order => (
                        <CartOrderTile
                            removeItem={cartContext.removeItemFromCart}
                            order={order}
                            decrementQuantity={cartContext.decrementQuantity}
                            incrementQuantity={cartContext.incrementQuantity} />
                    ))
                }
                {cartContext.orderLength === 0 &&
                    <div className="text-[20px] font-bold text-center">Your cart is empty</div>}
            </div>

            <div className=" flex justify-end mt-20 ">
                <div className="bg-gray-200 rounded-[4px] px-4 py-4 flex flex-col gap-4 w-[300px]">
                    <CartPricings title="Sub Total" value={`$${cartContext.getTotal()}`} />
                    <hr className="bg-black h-0.5" />
                    <CartPricings title="Shipping Fee" value="Free" />
                    <hr className="bg-black h-0.5" />
                    <CartPricings title="Total" value={`$${cartContext.getTotal()}`} />
                    <button className={`${cartContext.orderLength === 0 ?
                        "bg-gray-500 cursor-not-allowed" : "bg-green-600"}
                         text-white py-2 rounded-[4px]`}
                        onClick={() => {
                            console.log("Checkout");
                        }} >Checkout</button>
                </div>
            </div>


        </div >
    )
}

type CartPricingsType = {
    title: string,
    value: string

}
const CartPricings = ({ title, value }: CartPricingsType) => {
    return (
        <p className="text-[14px] flex justify-between">
            <span className="font-bold" >{title}:</span>{value}
        </p>
    )
}

export default Cart