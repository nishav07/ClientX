import Btn from "./btn"
import { Link } from "react-router-dom"

export default function Navbar() {
    return(<>
    <div id="navbar">
        <nav>
            <div id="logo"><h1>LOGO</h1></div>

            <ul id="menu">
                <a href=""><li>home</li></a>
                <a href=""><li>home</li></a>
                <a href=""><li>home</li></a>

                <div id="btns">
                    <Link to={"/auth"}><Btn text="login/signup" color="white" bg="black"/></Link>
                    
                </div>
            </ul>
        </nav>
    </div>
    </>)
}