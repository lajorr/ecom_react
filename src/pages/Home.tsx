
import { AdBanner } from '../components/AdBanner';
import CategoryProducts from '../components/CategoryProducts';

export const Home = () => {

    return (
        <div className=' max-w-[1536px] mx-auto'>

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

        </div>
    )
}
