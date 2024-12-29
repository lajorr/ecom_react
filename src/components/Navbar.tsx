import LocalMallIcon from '@mui/icons-material/LocalMall';
import ExpandableSearch from './ExpandableSearch';

const Navbar = () => {
    const navItems = ['Clothes', 'Tech', 'Food'];

    return (
        <nav className="grid grid-cols-3 bg-black px-3">
            <div className='flex  items-center'>

                <LocalMallIcon color='primary' sx={{ fontSize: "48px", color: "#DDBDD5", marginX: 1 }} />
                <h1 className="text-[48px] font-bold text-white">
                    Hamro E-commerce
                </h1>
            </div>
            <div className='place-self-center '>
                <ul className='items-center inline col-span-2 my-auto'>
                    {navItems.map((item) => (
                        <li key={item} className='text-[20px] text-white inline-block mr-8 font-semibold cursor-pointer'>{item}</li>
                    ))}
                </ul>
            </div>
            <ExpandableSearch />
        </nav>
    )
}

export default Navbar