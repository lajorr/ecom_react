
import { AdBanner } from '../components/AdBanner';
import Carousel from '../components/Carousel';
import CategoryProducts from '../components/CategoryProducts';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const Home = () => {

    return (
        <div className=' max-w-[1536px] mx-auto'>

            <Carousel />
            <Navbar />
            <main className='mt-4' >
                <div className='flex gap-4' >
                    <section className='w-[400px] bg-gray-200 p-2 flex justify-center rounded-xl'>
                        Filter
                    </section>
                    <CategoryProducts categoryTitle='Category 1' />
                </div>
                <AdBanner >
                    <img className='size-full object-cover' src='https://picsum.photos/seed/img2/1536/600' alt="" />
                </AdBanner>
                <CategoryProducts categoryTitle='Category 2' className='mt-4' />

            </main>

            <Footer />
        </div>
    )
}
