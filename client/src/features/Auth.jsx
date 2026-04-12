import {Route,Routes} from 'react-router-dom';   
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Auth({setUser}){

    return(
        <>
        {/* <nav>
            <h2>AUTH PAGE</h2>
            <Link to={"/auth/login"}><Btn text="login" color="white" bg="black"></Btn></Link>
            <Link to={"/auth/signup"}><Btn text="signup" color="black" bg="white"></Btn></Link>
            
        </nav> */}

        <Navbar li1="home" btnTxt="back" btnPath="/"></Navbar>
         <Link to={"/auth/login"}><button className='' >Login</button></Link>
            <Link to={"/auth/signup"}><button >Signup</button></Link>
        
       
    <div className='authContent'>
        <Routes>
        <Route path='login' element={<Login setUser={setUser}/>}  />-
        <Route path='signup' element={<Signup/>} />
    </Routes>
    </div>

        </>
    )
}