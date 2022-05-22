import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, provider } from '../Firebase/Firebase-Config'
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithPopup } from 'firebase/auth'


const Register = ({user, setUser}) => {
const [regEmail, setRegEmail] = useState("")
const [regPassword, setRegPassword ] = useState("")
const [firstName, setfirstName] = useState("")
const [lastName, setlastName] = useState("")
const [regError, setRegError] = useState(false)
const navigate = useNavigate()

useEffect(
    onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
}), [])


const handleGoogleAuth = async () => {
    console.log("here")
    try{
        const result = await signInWithPopup(auth, provider)
        if(result)
            navigate("/dashboard")
    }catch(err){
        console.log(err)
    }
    
}
const handleRegister = async () => {
    console.log(`${regEmail} ${regPassword}`)
    try{
        const userN = await createUserWithEmailAndPassword(auth, regEmail, regPassword)
        await updateProfile(auth.currentUser, { displayName: `${firstName} ${lastName}` })
        navigate("/dashboard")
        console.log(`${regEmail} ${regPassword}`)
        console.log(userN)
    }catch(err){
        setRegError(true)
        console.log(err)
    }

}
  return (
    <div className='grow flex flex-col   justify-center  items-center mt-2 md:mt-10 px-4 md:px-16'>
        
        <div className="w-[100%] p-0 mt-10 md:mt-0 md:px-10 md:w-[70%]  flex flex-col justify-center items-center">
            <img src="https://kode.camp/Images/Home/kodecamp_logo.png" alt="" className='w-32' />
            {regError && <div className=" w-[50%] bg-red-200 text-white rounded-lg p-3">
                Invalid Registration Credentials passwords should be greater than 6 digits or User already exists</div>}
            <div className="w-[100%] flex flex-col sm:flex-row justify-center items-center">
                <div className='w-[100%] flex justify-center items-center'>
                    <input 
                    value={firstName}
                    onChange={e => setfirstName(e.target.value)}
                    type="text"  required placeholder='First name' className='border-b-2 w-[100%] mx-4 mt-4 p-4'/>
                </div>
                <div className='w-[100%] flex justify-center items-center'>
                    <input 
                    value={lastName}
                    onChange={e => setlastName(e.target.value)}
                    type="text"  required placeholder='Last Name' className='border-b-2 w-[100%] mx-4 mt-4 p-4'/>
                </div>
            </div>
            <div className='w-[100%] flex flex-col sm:flex-row justify-center items-center'>
                <div className='w-[100%] flex justify-center items-center'>
                    <input 
                    value={regEmail}
                    onChange={e => setRegEmail(e.target.value)}
                    type="email" required placeholder='Email' className='border-b-2 w-[100%] mx-4 mt-4 p-4'/><span><i className="fa-solid fa-envelope text-gray-700"></i></span>
                </div>
                <div className='w-[100%] flex justify-center items-center'>
                    <input
                     value={regPassword}
                     onChange={e => setRegPassword(e.target.value)} 
                    type="password" required placeholder='Password' className='border-b-2 w-[100%] mx-4 mt-4 p-4'/><span><i className="fa-solid fa-lock text-gray-700"></i></span>
                </div>
            </div>

            <div className='text-blue-500 w-[50%] flex justify-end mt-4 hover:[cursor:pointer]'><h1><span className='text-gray-300 mr-2'>Already have an account ?</span><Link to="/login">Log in</Link></h1></div>
            <button 
            onClick={() => handleRegister()}
            className='px-5 py-2 rounded bg-gradient-to-r from-blue-400 to-lime-300 text-white hover:[cursor:pointer] hover:shadow-lg mt-4 w-[50%]'>Register</button>
            <button
            onClick={()=> handleGoogleAuth()} 
            className='w-[50%] text-blue-400 mt-5'><i className="fa-brands fa-google mr-3"></i>Sign in with Google</button>
        </div>
    </div>
  )
}

export default Register