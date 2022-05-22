import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Routes/Homepage';
import Login from './Routes/Login';
import Dashboard from './Routes/Dashboard';
import Register from './Routes/Register';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/Firebase-Config';
import Scourse from './Routes/Scourse';
import course from './Data/Courses';


function App() {

  const [user, setUser] = useState(null)
  useEffect(
    onAuthStateChanged(auth, (cu) => setUser(cu)), []);
  return (
    <div className="App w-full flex flex-col [height:100vh]">
      
      <Router>
      <Navbar user={user} setUser={setUser}/>
        <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login user={user} setUser={setUser}/>}></Route>
        <Route path="/register" element={<Register user={user} setUser={setUser}/>}></Route>
        <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} course={course} />}></Route>
        <Route path='/dashboard/course/:id' element={<Scourse />}></Route>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
