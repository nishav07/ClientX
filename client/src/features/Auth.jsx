import {Route,Routes} from 'react-router-dom';   
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Btn from '../components/btn';

export default function Auth(){

    return(
        <>
          <Routes>
        <Route path='/login' element={<Login/>}  />
        <Route path='/signup' element={<Signup/>} />
    </Routes>



        <nav>
            <h2>AUTH PAGE</h2>
            <Link to={"/login"}><Btn text="login" color="white" bg="black"></Btn></Link>
            <Link to={"/signup"}><Btn text="signup" color="black" bg="white"></Btn></Link>
            
        </nav>
       
    <div>
        <Outlet/>
    </div>

        </>
    )
}