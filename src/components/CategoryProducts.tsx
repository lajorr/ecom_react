import Product from '../types/Product';
import ProductCard from './ProductCard';


interface props {
    products: Product[],
    className?: string
}
const CategoryProducts = ({ className = "", products }: props) => {


    const height = 250;
    const width = 300;

    const title = products[0].product_category;

    return (
        <section className={`w-full  bg-gray-200 py-4 px-12 rounded-xl ${className} `}>
            <h1 className='text-[24px] font-[500] mb-4'>{title}</h1>
            <div className='grid grid-cols-3 gap-y-12 mx-8 mb-4 border' >

                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}

export default CategoryProducts