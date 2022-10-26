import DynamicIcon from './DynamicIcon';

const ContactMethod = ({icon, text, link}) => {
  return (
    <div className='flex items-center gap-2 my-6'>
      <a href={link} target='_blank' rel='noopener noreferrer'><DynamicIcon name={icon} iconClass='text-5xl text-blue-800 hover:text-blue-600 transition-colors ease-in-out' /></a>
      <span className='text-2xl font-poppins font-semibold tracking-tight'><a href={link} target='_blank' rel='noopener noreferrer'>{text}</a></span>
    </div>
  )
}

export default ContactMethod