import { Divider, Button, Drawer } from 'antd'
import { React, useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import { NavLink, Link } from 'react-router-dom'
import { useStore } from '../store/useStore'

const Navbar = () => {

  const item = useStore(state => state.item)
  const setItem = useStore(state => state.setItem)

  const handleLogout = () => {
    localStorage.setItem("loginInfo",false)
    setItem(localStorage.getItem("loginInfo"))
  }

  const navBarStyle = ({ isActive }) => {
    return {
      fontFamily:'Cuprum',
      textDecoration: isActive ? 'underline' : 'none',
      color: isActive ? 'gray' : null
    }
  }

  const navBarStyle2 = ({ isActive }) => {
    return {
      fontFamily:'Cuprum',
      color: isActive ? 'gray' : null 
    }
  }

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const hideDrawer = () => {
    setOpen(false);
  }

  const handleLogout2 = () => {
    localStorage.setItem("loginInfo",false)
    setItem(localStorage.getItem("loginInfo"))
    setOpen(false)
  }

  return (
      <div className="flex justify-between items-center sticky top-0 bg-yellow-200 mb-8 px-4 py-3 z-10"> 
        <div  className="flex items-center gap-2 md:ml-12 cursor-pointer">
          <img className="w-12 rounded-full" src='/assets/creative-job-hunter-vector-logo-design-template-vector-illustration_227744-685.avif' />  
          <h1 className="text-2xl" style={{fontFamily:'Bangers'}}>Job-Finder</h1>     
        </div>    
        <div className="flex gap-6 mr-12 xs:mr-0"> 
          <Button onClick={showDrawer} className="xs:flex sm:hidden px-2 bg-white text-white border border-transparent">
            <AiOutlineBars className='text-xl text-gray-500'/>
          </Button>
          <Drawer placement="top" onClose={hideDrawer} open={open}>
            <div className="grid gap-y-8 mb-10">
              <NavLink style={navBarStyle2} className="flex justify-center text-lg" to='/' onClick={hideDrawer}>Home</NavLink>
              <NavLink style={navBarStyle2} className="flex justify-center text-lg" to='postjob' onClick={hideDrawer}>Post job</NavLink>
              <NavLink style={navBarStyle2} className="flex justify-center text-lg" to='/b' onClick={hideDrawer}>Company</NavLink>
              <NavLink style={navBarStyle2} className="flex justify-center text-lg" to='/c' onClick={hideDrawer}>System</NavLink> 
            </div>
            <div className="flex justify-center gap-x-8">
              {item === "true" ? 
              <button 
              className="bg-blue-500 text-white px-6 py-1 rounded-sm" 
              onClick={handleLogout2} 
              >
              Logout
              </button>
              : 
              <Link className="bg-blue-500 text-white px-6 py-1 rounded-sm" to='/login' onClick={hideDrawer}>Login</Link>
              }
              <Link className="px-6 py-1 border border-gray-400 rounded-2xl" to='/signup' onClick={hideDrawer}>Join Now</Link>
            </div>
          </Drawer>
          <NavLink style={navBarStyle} className="xs:hidden lg:flex underline-offset-8 hover:scale-110 duration-500 text-lg" to='/'>Home</NavLink>
          <NavLink style={navBarStyle} className="xs:hidden lg:flex underline-offset-8 hover:scale-110 duration-500 text-lg" to='postjob'>Post job</NavLink>
          <NavLink style={navBarStyle} className="xs:hidden lg:flex underline-offset-8 hover:scale-110 duration-500 text-lg" to='/b'>Company</NavLink>
          <NavLink style={navBarStyle} className="xs:hidden lg:flex underline-offset-8 hover:scale-110 duration-500 text-lg" to='/c'>System</NavLink>     
          <Divider className="xs:hidden md:flex" type="vertical" style={{fontSize:'1.9rem',backgroundColor:'gray'}}/>
          {item === "true" ? <button className="bg-blue-500 text-white hover:bg-white hover:text-black px-6 py-1 rounded-sm duration-500 xs:hidden sm:flex" onClick={handleLogout}>Logout</button> : <Link className="bg-blue-500 text-white hover:bg-white hover:text-black px-6 py-1 rounded-sm duration-500 xs:hidden sm:flex" to='/login'>Login</Link>}
          <Link className="px-6 py-1 border border-gray-400 rounded-2xl hover:text-white hover:rounded-2xl xs:hidden sm:flex" to='/signup'>Join Now</Link>
        </div>
      </div>   
  )
}

export default Navbar