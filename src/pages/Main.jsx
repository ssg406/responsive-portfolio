import {contactMethods} from '../data';
import { DynamicIcon } from '../components';

const Main = () => {
  return (
    <main className='md:container md:mx-auto flex flex-col items-center p-2'>
      <h1 className='text-poppins text-xl'>Hello, I'm <span className='text-4xl font-bold text-yellow-700'>Samuel Jones</span></h1>
      <p className='text-center font-mono my-4'>I'm a software developer in the Pacific Northwest.<br />Take a moment to learn a little about me and what I can do.</p>
      <div className='flex my-4'>
        {
          contactMethods.map(({icon,link}) => {
            return <a href={link} target='_blank' rel='noopener noreferrer'><DynamicIcon name={icon} iconClass='text-3xl md:text-6xl text-gray-900 mx-2 md:mx-3 hover:text-yellow-700 transition-colors ease-in-out'/></a>
          })
        }
      </div>
    </main>
  )
}

export default Main