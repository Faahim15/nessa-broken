import React from 'react'

interface IHeading {
    title : string,
    description :  string
}

const PageHeading = ({title , description} : IHeading) => {
    return (
        <div className='bg-[#131417] py-12 mt-10 md:mt-0'>
            <h1 className='text-center font-[Georgia] text-[30px] md:text-[72px]'>{title}</h1>
            <p className='text-center text-[#9D9A97]'>{description}</p>
        </div>
    )
}

export default PageHeading