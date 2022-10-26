import {contactMethods} from '../data';
import { DynamicIcon } from '../components';

const Main = () => {
  return (
    <main className='md:container md:mx-auto my flex flex-col items-center p-2 mt-28'>
      <h1 className='text-poppins text-2xl md:text-5xl my-4'>Hello, I'm <span className='text-4xl md:text-8xl font-bold text-yellow-700'>Samuel Jones</span></h1>
      <p className='text-center font-mono my-4 md:font-semibold md:text-2xl'>I'm a software developer in the Pacific Northwest.<br />Take a moment to learn a little about me and what I can do.</p>
      <div className='flex my-6'>
        {
          contactMethods.map(({icon,link}) => {
            return <a href={link} target='_blank' rel='noopener noreferrer'><DynamicIcon name={icon} iconClass='text-4xl md:text-6xl text-gray-900 mx-2 md:mx-3 hover:text-yellow-700 transition-colors ease-in-out'/></a>
          })
        }
      </div>
    </main>
  )
}

export default Main