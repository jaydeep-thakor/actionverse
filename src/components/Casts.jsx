import React from 'react'


const Casts = ({casts}) => {

  return (
    <>
        {
        casts.map((cast, index)=>{
            return(
                <div key={index} className='text-center flex gap-2 flex-col'>

<img className='min-w-40 min-h-40 max-md:min-w-30 max-md:min-h-30 object-cover rounded-md' src={cast.castImg} alt="" />
<div>
<h3 className='text-sm font-medium'>{cast.castName}</h3>
<h4 className='text-gray-400 text-xs'>{cast.name}</h4>
</div>

                </div>
            )
        })
}
    </>
  )
}

export default Casts