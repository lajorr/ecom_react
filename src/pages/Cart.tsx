import { useCartContext } from "../providers/CartContext";

const Cart = () => {

    const cartContext = useCartContext();
    console.log(cartContext.orderLength);

    const columnNames = ["Product", "Quantity", "Sub total"];
    return (
        <div className="mt-12 ">
            <div className="grid grid-cols-3  items-center text-[16px] py-3 px-4 mb-5 bg-gray-200" >
                {columnNames.map((name, idx) => (
                    <div key={name} className={`font-[500] ${idx === 1 && "place-self-center"} `}>{name}</div>
                ))}
            </div>
            <div className="flex flex-col gap-4">
                {cartContext.orderLength > 0 &&

                    cartContext.orderList.map(order => (
                        <div key={order.product.id} className="grid grid-cols-3 gap-2 items-center text-[16px]" >
                            <div className="flex items-center gap-2">
                                <img className="size-16 object-cover rounded-[4px]" src={order.product.product_image} alt="" />
                                <div className="font-[500] ">{order.product.product_name}</div>
                            </div>
                            <div className="place-self-center" >{order.quantity}</div>
                            <div>${order.subTotal.toFixed(2)}</div>
                        </div>
                    ))

                }
                {cartContext.orderLength === 0 && <div className="text-[20px] font-bold text-center">Your cart is empty</div>}

            </div>
            <div className=" flex justify-end mt-20 ">
                <div className="bg-gray-200 rounded-[4px] px-4 py-4 flex flex-col gap-4">
                    <CartPricings title="Sub Total" value={`$${cartContext.getTotal()}`} />
                    <CartPricings title="Shipping Fee" value="Free" />
                    <CartPricings title="Total" value={`$${cartContext.getTotal()}`} />
                    <button className={`${cartContext.orderLength === 0 ? "bg-gray-500 cursor-not-allowed" : "bg-green-600"} text-white py-2 rounded-[4px]`} onClick={() => {
                        console.log("Checkout");
                    }} >Checkout</button>
                </div>
            </div>
        </div>
    )
}

type CartPricingsType = {
    title: string,
    value: string

}
const CartPricings = ({ title, value }: CartPricingsType) => {
    return (
        <p className="text-[14px] grid grid-cols-2 gap-4 ">
            <span className="font-bold" >{title}:</span>{value}
        </p>)
}

export default Cart