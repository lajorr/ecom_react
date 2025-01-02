
import { AdBanner } from '../components/AdBanner';
import CategoryProducts from '../components/CategoryProducts';
import { productList } from '../constants/products';

export const Home = () => {
    const uniqueCategories = Array.from(new Set(productList.map(product => product.product_category))).sort();

    const electronics = productList.filter(product => product.product_category === 'Electronics');
    const sportsAndOutdoors = productList.filter(product => product.product_category === 'Sports & Outdoors');
    return (
        <div className=' max-w-[1536px] mx-auto'>

            <main className='mt-4' >
                <div className='flex gap-4' >
                    <section className='w-[400px] bg-gray-200 p-2  rounded-xl'>
                        {uniqueCategories.map((cat) => (
                            <div key={cat}>{cat}</div>
                        ))}
                    </section>
                    <CategoryProducts products={sportsAndOutdoors} />
                </div>
                <AdBanner >
                    <img className='size-full object-cover' src='https://picsum.photos/seed/img2/1536/600' alt="" />
                </AdBanner>
                <CategoryProducts products={electronics} className='mt-4' />

            </main>

        </div>
    )
}
