import React from 'react'

const Profile = ({ user }) => {
  return (
    <div className='w-[100%] lg:w-[85%] h-[100%] p-10'>
        <div className="w-full bg-white rounded-xl shadow-xl h-[100%] p-4 md:p-10 flex flex-col">
            <h1 className='text-2xl'>Profile Settings</h1>
            <p>personal details</p>
            <div className='mt-10 w-full flex justify-center items-center'>
                {user.photoURL ? <img className=' w-[100px] h-[100px] rounded-full shadow-xl' src={user.photoURL} alt="" /> :
                <div className=' w-[100px] h-[100px] bg-blue-300 [border:8px solid white] rounded-full flex justify-center items-center text-4xl text-white shadow-xl'>{user.displayName[0].toUpperCase()}</div>}
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 w-full'>
                <div className='p-4 border-2 rounded-lg'>
                    <h1 className='text-gray-600'>Fullname</h1>
                    <h1 className='text-lg'>{user.displayName}</h1>
                </div>
                <div className='p-4 border-2 rounded-lg'>
                    <h1 className='text-gray-600'>Email</h1>
                    <h1 className='text-lg'>{user.email}</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile