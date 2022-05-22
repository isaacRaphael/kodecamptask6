import React from 'react'


const Dashside = ( {currentPage, setCurrentPage }) => {


  return (
    <>
    <div className='hidden w-[15%] [height:100%] py-40 text-right bg-white lg:flex flex-col justify-around '>
        <div 
        onClick={() => setCurrentPage("dashboard")}
        className={currentPage == "dashboard" ? "pr-3 px-5 py-4 text-lg ml-8 rounded-l-full bg-gray-300 " : "mr-3 px-5  text-xl hover:[cursor:pointer]"}><i className="fa-solid fa-bars mr-4"></i>Dashboard</div>
        <div 
        onClick={()=>setCurrentPage("courses")}
        className={currentPage == "courses" ? "pr-3 px-5 py-4 text-lg ml-8 rounded-l-full bg-gray-300" : "mr-3 px-5  text-xl hover:[cursor:pointer]"}><i className="fa-solid fa-database mr-4"></i>Courses</div>
        <div 
        onClick={()=>setCurrentPage("profile")}
        className={currentPage == "profile" ? "pr-3 px-5 py-4 text-lg ml-8 rounded-l-full bg-gray-300" : "mr-3 px-5  text-xl hover:[cursor:pointer]"}><i className="fa-solid fa-user mr-4"></i>Profile</div>
    </div>
    </>

  )
}

export default Dashside