import React from "react"

interface props {
    img: string,
    name: string,
    price: string
}

const Product: React.FC<props> = ({ img, name, price }) => {
    return (
        <div className='flex justify-center'>
            <div className='bg-gray-300 h-[350px] w-min rounded-xl overflow-hidden '>
                <div className='w-[300px] '>
                    <img className="size-full object-contain" src={img} alt="img" /></div>
                <div className='size-full p-2 '>
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    )
}

export default Product