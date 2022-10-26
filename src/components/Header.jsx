import { TbMenu2 } from 'react-icons/tb'
import {useState} from 'react'
import MobileNav from './MobileNav';
import FullNav from './FullNav';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="md:container md:mx-auto md:border-none p-3 md:px-6 md:py-8 flex justify-between border-b-2 border-gray-300">
        <h3 className='text-3xl md:text-6xl font-semibold font-poppins tracking-tighter'>SJ</h3>
        <TbMenu2 className='text-3xl hover:text-sky-800 md:hidden' onClick={()=> setShowMenu(!showMenu)}/>
        <FullNav />
      </div>
      <MobileNav showMenu={showMenu} setShowMenu={setShowMenu} />
    </>

  )
}

export default Header