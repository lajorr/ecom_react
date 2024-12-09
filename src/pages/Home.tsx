import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useRef, useState } from 'react';
import { AdBanner } from '../components/AdBanner';
import Carousel from '../components/Carousel';
export const Home = () => {

    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const navItems = ['Clothes', 'Tech', 'Food'];

    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isSearchVisible && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchVisible]);

    const handleSearchIconClick = () => {
        setIsSearchVisible(!isSearchVisible)

    }

    // document.addEventListener('click',(e)=>{
    //     if(e.target)
    // })

    return (
        <div className=' max-w-[1536px] mx-auto'>
            <div className="flex justify-center">
                <LocalMallIcon fontSize='medium' color='primary' sx={{ color: "#DDBDD5", marginX: 1 }} />
                <h1 className="text-xl font-bold">
                    Hamro E-commerce
                </h1>
            </div>
            <Carousel />
            {/* <AdBanner height="500px">
                Ad-Banner 1
            </AdBanner> */}
            <div className='flex m-4 h-fit' >
                <div className='w-[400px] bg-gray-200 mr-4 p-2 flex justify-center rounded-xl'>
                    Filter
                </div>
                <div className='w-full  bg-gray-200 py-4 px-12 rounded-xl'>
                    <div className='grid grid-cols-3 mb-8 h-8'>
                        <div className='my-auto h-8'>
                            {isSearchVisible ? (<div className='inline'>
                                <input ref={searchInputRef} className='rounded-2xl h-8 w-30 p-2 mr-4 transition-all duration-300 ease-in-out focus:outline-none focus:p-2 ' type="text" placeholder='Search' />
                            </div>) : (<div
                                className="inline-block h-8 w-0 transition-all duration-300 ease-in-out"
                                style={{ overflow: 'hidden' }}
                            ></div>)}
                            <SearchIcon fontSize='medium' sx={{ cursor: 'pointer', margin: 'auto' }} onClick={handleSearchIconClick} />
                        </div>
                        <ul className='items-center inline col-span-2 my-auto'>
                            {navItems.map((item) => (
                                <li key={item} className='inline-block mr-8 font-semibold cursor-pointer'>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <h1 className='text-lg font-bold mb-2'>Products</h1>
                    <div className='grid grid-cols-3 gap-y-12 mx-8 mb-4 border' >
                        {Array(5).fill(null).map((_, idx) => (
                            <div key={idx} className='flex justify-center'>
                                <div className='bg-gray-300 h-[350px] w-min rounded-xl overflow-hidden '>
                                    <div className='w-[300px] bg-gray-600 h-2/3 text-white p-2'>image</div>
                                    <div className='size-full p-2 '>
                                        <p>Name</p>
                                        <p>Price</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <AdBanner >
                        Ad-Banner 2
                    </AdBanner>
                </div>
            </div>
        </div>
    )
}
