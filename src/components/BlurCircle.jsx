import React from 'react'

const BlurCircle = ({top= "auto", right= "auto", bottom= "auto", left= "auto"}) => {
  return (
    <div className='absolute -z-50 h-60 w-60 md:w-75 md:h-75 aspect-square rounded-full bg-primary/35 blur-3xl' style={{top: top,right: right,bottom: bottom,left: left}}>
        
    </div>
  )
}

export default BlurCircle