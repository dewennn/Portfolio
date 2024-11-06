import React from 'react'

const FeaturedProject = ({name, stack, img}) => {
  return (
    <div className='w-full flex flex-col gap-3'>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold sm:text-xl'>{name}</h1>
        <div className='flex gap-3'>
          {
            stack.map((item) => (
              <div>
                <img className='w-10' src={`${process.env.PUBLIC_URL}/assets/iconColor/${item}.png`}></img>
              </div>
            ))
          }
        </div>
      </div>
      
      <div>
        <img className='w-full' src={`${process.env.PUBLIC_URL}/images/` + img}  alt="" />
      </div>
    </div>
  )
}

export default FeaturedProject