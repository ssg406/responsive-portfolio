import React from 'react'

const Skill = ({name, description}) => {
  return (
    <div className='my-3 md:my-4'>
      <p className='md:text-xl'><span className='text-2xl md:text-4xl font-bold text-sky-800'>{name}</span> {description}</p>
    </div>
  )
}

export default Skill