import {Route,Routes} from 'react-router-dom';   
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Auth(){

    return(
        <>

        <Navbar li1="home" btnTxt="back" btnPath="/"></Navbar>
         <Link to={"/auth/login"}><button className='h-12 w-auto p-2 bg-white text-black rounded-lg' >Login</button></Link>
            <Link to={"/auth/signup"}><button className='h-12 w-auto p-2 bg-black text-white rounded-lg' >Signup</button></Link>
        
       
    <div className='authContent'>
        <Routes>
        <Route path='login' element={<Login/>}  />-
        <Route path='signup' element={<Signup/>} />
    </Routes>
    </div>

        </>
    )
}