import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../Firebase/Firebase-Config'
import { signOut } from 'firebase/auth'

const Navbar = ({user, setUser}) => {
    const navigate = useNavigate()

    const handleSignOut = async () => {
      await signOut(auth)
      setUser(null)
      navigate("/")
  
    }
  return (
    <div className='flex w-full justify-between px-10 py-4 h-[12%] items-center shadow-sm  top-0 z-50'>
        <Link to="/" className='flex items-center'>
            <img src="https://kode.camp/Images/Home/kodecamp_logo.png" alt="" className='w-14 mr-4' /> 
        <h1 className='text-2xl text-gray-700 font-bold'>Classroom</h1>
        </Link>
        <ul className='hidden'>   
            <li className='hover:underline hover:decoration-lime-200 hover:[cursor:pointer]'>About</li>
            <li className='hover:underline hover:decoration-lime-200 hover:[cursor:pointer]'>Courses</li>
            <li className='hover:underline hover:decoration-lime-200 hover:[cursor:pointer]'>Instructor</li>
            <li className='hover:underline hover:decoration-lime-200 hover:[cursor:pointer]'>News</li>
            <li className='hover:underline hover:decoration-lime-200 hover:[cursor:pointer]'>pricing</li>
        </ul>
        {user == null ? <Link to="/login" className='px-5 py-2 rounded bg-gradient-to-r from-blue-400 to-lime-300 text-white hover:[cursor:pointer] hover:shadow-lg'>Sign In</Link>
        : <button 
        onClick={()=> handleSignOut()}
        className='px-5 py-2 rounded bg-gradient-to-r from-blue-400 to-lime-300 text-white hover:[cursor:pointer] hover:shadow-lg'>Sign Out</button>}
        
    </div>
  )
}

export default Navbar