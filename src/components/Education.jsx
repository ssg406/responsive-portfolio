import React from 'react'

const Education = ({degree,school,year}) => {
  return (
    <div className='my-3 md:my-6'>
      <p className='font-mono tracking-tight md:text-2xl font-semibold'><span className='text-md font-poppins font-semibold text-yellow-700'>{degree}</span><br />{year} | {school}</p>
    </div>
  )
}

export default Education