import React from 'react'

interface ISetting {
    title : string,
    description : string
}

const Setting = ({title, description} : ISetting) => {
  return (
    <div className='max-w-7xl mx-auto py-10'>
        <p className='text-5xl font-[georgia] font-semibold text-center py-5'>{title}</p>

        <p className='text-[#9D9A97] leading-8 mt-5'>{description}</p>
    </div>
  )
}

export default Setting