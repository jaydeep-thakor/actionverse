import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { CircleUserRound, MenuIcon, TicketPlus, XIcon } from 'lucide-react'
import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();
  const {user} = useUser();
  const {openSignIn} = useClerk();
  
  return (
    <>

    <div className='flex justify-between items-center py-3 px-4 md:py-4 md:px-6'>

<div className='flex-1 max-md:order-2'>
<div className="flex items-center space-x-1 cursor-pointer max-md:justify-center" onClick={()=> navigate("/")}>
  <div className="">
    <span className="text-white text-xl sm:text-2xl font-extrabold tracking-wide uppercase font-marvel bg-primary pt-[2px] px-1">
      action
    </span>
  </div>
  
  <div>
    <span className="text-white text-xl sm:text-2xl font-extrabold tracking-wide uppercase font-marvel">
      verse
    </span>
  </div>
</div>

</div>

<div className='md:hidden max-md:order-1 flex-1'>
<MenuIcon onClick={()=> setIsOpen(!isOpen)} className='h-8 w-8 md:hidden'/>
</div>

<div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex gap-10 items-center max-md:h-screen max-md:flex-col 
    justify-center max-md:bg-black/90 transition-[width] duration-300 max-md:backdrop-blur ${isOpen ? "max-md:w-full" : "max-md:w-0 overflow-hidden"}`}>

  <XIcon onClick={()=> setIsOpen(!isOpen)} className="md:hidden absolute top-5 right-5 h-8 w-8 text-white cursor-pointer" />

  <NavLink to="/" onClick={()=>{scrollTo(0,0); setIsOpen(false)}} className={({isActive})=>`hover:text-primary transition ${isActive ? "text-primary" : "text-white"}`}>Home</NavLink>
  <NavLink to="/shows" onClick={()=>{scrollTo(0,0); setIsOpen(false)}} className={({isActive})=>`hover:text-primary transition ${isActive ? "text-primary" : "text-white"}`}>Shows</NavLink>
  <NavLink to="/" onClick={()=>{scrollTo(0,0); setIsOpen(false)}} className={({isActive})=>`hover:text-primary transition ${isActive ? "text-primary" : "text-white"}`}>Theaters</NavLink>
  <NavLink to="/" onClick={()=>{scrollTo(0,0); setIsOpen(false)}} className={({isActive})=>`hover:text-primary transition ${isActive ? "text-primary" : "text-white"}`}>Releases</NavLink>
  <NavLink to="/favorite" onClick={()=>{scrollTo(0,0); setIsOpen(false)}} className={({isActive})=>`hover:text-primary transition ${isActive ? "text-primary" : "text-white"}`}>Favorites</NavLink>

</div>

<div className='flex flex-1 justify-end max-md:order-3'>

    {
      !user ? (
<div onClick={openSignIn} className='hover:text-primary cursor-pointer transition duration-300 font-medium flex items-center gap-1.5'>
    <CircleUserRound className='h-7 w-7'/><span className='max-md:hidden'>Sign In</span>
    </div>
      ) : (
        <UserButton>
          <UserButton.MenuItems>

          <UserButton.Action label='My Bookings' labelIcon={<TicketPlus className='h-4'/>} onClick={()=> navigate("/my-bookings")}/>

          </UserButton.MenuItems>
        </UserButton>
      )
    }

    
</div>

    </div>
        
    </>
  )
}

export default Navbar