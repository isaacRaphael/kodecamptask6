import React from 'react'
import Dashside from '../Components/Dashside'
import Dash from '../Components/Dash'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { auth } from '../Firebase/Firebase-Config'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react';
import Courses from '../Components/Courses'
import Scourse from './Scourse'
import Profile from '../Components/Profile'

const Dashboard = ({user, setUser, course}) => {
const [currentPage, setCurrentPage] = useState("dashboard")
const navigate = useNavigate()



  return (
    
    <>
        {user ? 
            <div className='grow flex flex-col lg:flex-row justify-between items-center h-[100%] bg-gray-300 overflow-y-scroll'>
        <Dashside currentPage={currentPage} setCurrentPage={setCurrentPage}/>

        {currentPage == "dashboard" && <Dash user={user} />}
        {currentPage == "courses" && <Courses course={course} />}
        {currentPage == "profile" && <Profile user={user} />}
        
        <div className='w-[100%] lg:[display:none] h-[10%] fixed bottom-0 flex justify-around px-10 py-2 bg-white'>
            <div 
            onClick={()=>setCurrentPage("dashboard")}
            className={currentPage == 'dashboard' ? 'text-lime-400 flex flex-col justify-center [align-items:center] text-center' :'flex flex-col justify-center [align-items:center] text-center'} >
                <i className="fa-solid fa-bars"></i>
                <h1>dashboard</h1>
            </div>
            <div
            onClick={()=>setCurrentPage("courses")}
            className={currentPage == 'courses' ? 'text-lime-400 flex flex-col justify-center [align-items:center] text-center' :'flex flex-col justify-center [align-items:center] text-center'}>
                <i className="fa-solid fa-database"></i>
                <h1>Courses</h1>
            </div>
            <div
            onClick={()=>setCurrentPage("profile")} 
            className={currentPage == 'profile' ? 'text-lime-400 flex flex-col justify-center [align-items:center] text-center' :'flex flex-col justify-center [align-items:center] text-center'}>
                <i className="fa-solid fa-user"></i>
                <h1>Profile</h1>
            </div>
        </div>
    </div>
     :<div></div>}
    </>
    
  )
}

export default Dashboard