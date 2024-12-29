import Product from '../components/Product';


interface props {
    categoryTitle: string,
    className?: string
}
const CategoryProducts = ({ categoryTitle, className = "" }: props) => {


    const height = 250;
    const width = 300;

    return (
        <section className={`w-full  bg-gray-200 py-4 px-12 rounded-xl ${className} `}>
            <h1 className='text-[24px] font-[500] mb-4'>{categoryTitle}</h1>
            <div className='grid grid-cols-3 gap-y-12 mx-8 mb-4 border' >
                {Array(5).fill(null).map((_, idx) => (
                    <Product key={idx} name="Camera" price="$1200" img={`https://picsum.photos/seed/img1/${width}/${height}`} />
                ))}
            </div>
        </section>
    )
}

export default CategoryProducts