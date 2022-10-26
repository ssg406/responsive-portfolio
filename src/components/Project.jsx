import ProjectTag from './ProjectTag';

const Project = ({name, tags, description, link}) => {
  return (
    <div className="w-full rounded-md p-3 my-2">
      <h4 className='uppercase text-lg md:text-2xl font-semibold font-poppins text-yellow-600'>{name}</h4>
      <div className='flex gap-2 my-2'>
        {
          tags.map((tagData) => {
            return <ProjectTag {...tagData} />
          })
        }
      </div>
      <p className='text-slate-800 font-mono tracking-tighter md:text-lg md:text-slate-900'>{description}</p>
      <a className='inline-block px-2 py-1 md:px-3 md:py-2 mt-4 rounded-md bg-slate-300 font-semibold text-slate-600 hover:bg-slate-800 hover:text-slate-200 transition-colors ease-in-out' href={link} target='_blank' rel='noopener noreferrer'>See Project</a>
    </div>
  )
}

export default Project