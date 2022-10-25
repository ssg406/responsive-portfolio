import { TbMenu2 } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import { navLinks } from '../data';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <div className="md:container md:mx-auto md:border-none p-3 md:px-6 md:py-8 flex justify-between border-b-2 border-gray-300">

      <h3 className='text-3xl md:text-6xl font-semibold font-poppins tracking-tighter'>SJ</h3>
      {/* Hamburger Menu */}
      <TbMenu2 className='text-3xl hover:text-sky-800 md:hidden' onClick={()=> setShowMenu(!showMenu)}/>

      {/* Full screen nav links */}
      <nav className='hidden md:flex justify-evenly w-4/6 items-center font-bold text-2xl font-poppins uppercase tracking-tight'>
        {navLinks.map(({name, path}) => {
          return(
            <Link className='hover:text-yellow-700 hover:border-b-4 border-yellow-700 transition-all ease-in-out p-2' to={path}>{name}</Link>
          );
        })}
      </nav>

    </div>
      {/* Mobile collapsible nav links */}
      <nav className={`p-1 border-b-2 border-gray-300 ${showMenu ? 'block' : 'hidden'}`}>
        <ul className="text-center">
          {
            navLinks.map(({name,path}) => {
             return <li className='active:bg-slate-400 p-1 active:rounded-md transition-all'><Link className='font-bold uppercase' to={path}>{name}</Link></li>
            })
          }
        </ul>
      </nav>
</>

  )
}

export default Header