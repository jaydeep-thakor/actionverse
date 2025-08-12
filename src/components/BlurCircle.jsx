import React from 'react'

const BlurCircle = ({top= "auto", right= "auto", bottom= "auto", left= "auto"}) => {
  return (
    <div className='absolute -z-50 h-58 w-58 aspect-square rounded-full bg-primary/30 blur-3xl' style={{top: top,right: right,bottom: bottom,left: left}}>
        
    </div>
  )
}

export default BlurCircle