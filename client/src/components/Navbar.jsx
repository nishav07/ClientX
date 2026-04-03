import Btn from "./btn"

export default function Navbar() {
    return(<>
    <div id="navbar">
        <nav>
            <div id="logo"></div>

            <ul id="menu">
                <a href=""><li>home</li></a>
                <a href=""><li>home</li></a>
                <a href=""><li>home</li></a>

                <div id="btns">
                    <Btn text="login" color="white" bg="black"></Btn>
                    <Btn text="signup" color="black" bg="white"></Btn>
                </div>
            </ul>
        </nav>
    </div>
    </>)
}