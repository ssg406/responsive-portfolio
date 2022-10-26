import DynamicIcon from './DynamicIcon';

const ProjectTag = ({techName, icon}) => {

  return (
    <div className='flex gap-1 py-1 px-2 border-2 border-slate-600 rounded-lg text-slate-600'>
      <DynamicIcon name={icon} iconClass='text-lg md:text-2xl'/><span className='text-sm md:text-lg font-bold'>{techName}</span>
    </div>
  )
}

export default ProjectTag