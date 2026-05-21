import {Route,Routes} from 'react-router-dom';   
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Navigate } from 'react-router-dom';

export default function Auth(){
    
    return(
        <>

        <Navbar li1="home" btnTxt="back" btnPath="/"></Navbar>
        
       
    <div className='authContent'>
        <Routes>
             <Route path="/" element={<Navigate to="signup" />}/>
        <Route path='login' element={<Login/>}  />
        <Route path='signup' element={<Signup/>} />
    </Routes>
    </div>

        </>
    )
}