import { contactMethods } from '../data';
import DynamicIcon from './DynamicIcon';

const Footer = () => {
  return (
    <footer className='bg-gray-400 border-t-1 border-gray-500 fixed bottom-0 inset-x-0 p-2 md:p-6'>
      <div className="md:container mx-auto flex justify-end">
        {
          contactMethods.map(({icon,link}) => {
            return <a href={link} target='_blank' rel='noopener noreferrer'><DynamicIcon name={icon} iconClass='text-xl md:text-2xl text-gray-600 mx-2 md:mx-3 hover:text-gray-900 transition-colors ease-in-out'/></a>
          })
        }
      </div>
    </footer>
  )
}

export default Footer