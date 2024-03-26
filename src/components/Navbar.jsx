import Logo from '../movieLogo.png'
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(
        <div className='flex border space-x-8 item-center pl-3 py-2'>
            <img src={Logo} alt='' className='w-[40px]'/>
            <Link to='/' className='text-blue-500 text-xl font-bold'>Movies</Link>
            <Link to='/watchlist' className='text-blue-500 text-xl font-bold'>Watch List</Link>
        </div>
    )
}

export default Navbar;