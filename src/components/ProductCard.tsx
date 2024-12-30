import StarIcon from '@mui/icons-material/Star';
import Product from "../types/Product";

type prop = {
    product: Product
}


const ProductCard: React.FC<prop> = ({ product }) => {

    const { product_name, product_description, product_price, product_category, product_brand, product_stock, product_rating, product_image } = product


    return (
        <div className='flex justify-center'>
            <div className='bg-gray-300 w-min rounded-xl overflow-hidden '>
                <div className='w-[300px] '>
                    <img className="size-full object-contain" src={product_image} alt="img" />
                </div>
                <div className='size-full py-3 px-4'>
                    <h2 className="font-bold text-[20px] leading-6">{product_name}</h2>
                    <p className="text-[16px] font-bold italic cursor-pointer hover:underline">{product_brand}</p>
                    <p className="text-[14px] line-clamp-2 my-1">{product_description}</p>
                    <p className="text-[16px] font-[500]">${product_price}</p>
                    <div className='flex gap-2 items-center'>
                        <StarIcon sx={{ fontSize: "20px", color: "#fab608" }} />
                        <p className="text-[16px] font-[500]">{product_rating}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard