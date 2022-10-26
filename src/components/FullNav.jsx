import { navLinks } from '../data';
import { Link } from 'react-router-dom';

const FullNav = () => {
  return (
    <nav className='hidden md:flex justify-evenly w-4/6 items-center font-bold text-2xl font-poppins uppercase tracking-tight'>
        {navLinks.map(({name, path}) => {
          return(
            <Link className='hover:text-yellow-700 hover:border-b-4 border-yellow-700 transition-all ease-in-out p-2' to={path}>{name}</Link>
          );
        })}
      </nav>
  )
}

export default FullNav