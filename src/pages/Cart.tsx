import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { useCartContext } from "../providers/CartContext";

const Cart = () => {

    const cartContext = useCartContext();
    console.log(cartContext.orderLength);

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

                    cartContext.orderList.map(order => (
                        <div className="relative px-6" >
                            <button className="absolute size-6 top-[-8px] left-4 bg-red-500 rounded-full flex justify-center items-center" onClick={() => { cartContext.removeItemFromCart(order.product.id) }} >
                                <CloseRoundedIcon fontSize='small' sx={{ color: "white" }} />
                            </button>
                            <div key={order.product.id} className="grid grid-cols-4 gap-2 items-center place-items-end text-[16px]" >
                                <div className="flex items-center gap-2 place-self-start">
                                    <img className="size-16 object-cover rounded-[4px]" src={order.product.product_image} alt="" />
                                    <div className="font-[500] ">{order.product.product_name}</div>
                                </div>
                                <div>${order.product.product_price.toFixed(2)}</div>
                                <div className=" border flex gap-2" >
                                    <button className='bg-green-400 rounded-[4px]'
                                        onClick={() => cartContext.incrementQuantity(order.product.id)}>
                                        <AddRoundedIcon sx={{ color: "white" }} />
                                    </button>
                                    {order.quantity}
                                    <button className='bg-red-500 rounded-[4px]'
                                        onClick={() => cartContext.decrementQuantity(order.product.id)}>
                                        <RemoveRoundedIcon sx={{ color: "white" }} />
                                    </button>
                                </div>
                                <div>${order.subTotal.toFixed(2)}</div>
                            </div>
                            <hr className='mt-4 h-0.5 bg-black/30 ' />
                        </div>
                    ))

                }
                {cartContext.orderLength === 0 && <div className="text-[20px] font-bold text-center">Your cart is empty</div>}

            </div>
            <div className=" flex justify-end mt-20 ">
                <div className="bg-gray-200 rounded-[4px] px-4 py-4 flex flex-col gap-4 w-[300px]">
                    <CartPricings title="Sub Total" value={`$${cartContext.getTotal()}`} />
                    <hr className="bg-black h-0.5" />
                    <CartPricings title="Shipping Fee" value="Free" />
                    <hr className="bg-black h-0.5" />
                    <CartPricings title="Total" value={`$${cartContext.getTotal()}`} />
                    <button className={`${cartContext.orderLength === 0 ? "bg-gray-500 cursor-not-allowed" : "bg-green-600"} text-white py-2 rounded-[4px]`} onClick={() => {
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