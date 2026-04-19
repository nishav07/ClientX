import { Link } from "react-router-dom"

export default function Navbar({li1,li2,li3,btnTxt,btnPath}) {
    return(<>
    <div id="navbar" className="w-full h-16 bg-black rounded-bl-sm rounded-br-sm">
        <nav className="h-full w-full p-2 flex justify-between items-center">
            <div id="logo" className="text-3xl font-medium text-white"><h1>LOGO</h1></div>

            <ul id="menu" className="h-full w-auto flex items-center justify-center gap-3">
                <Link to="/" ><li className="text-xl text-white font-mono">{li1}</li></Link>
                <Link to="/"><li className="text-xl text-white font-mono">{li2}</li></Link>
                <Link to="/"><li className="text-xl text-white font-mono">{li3}</li></Link>

              
                    <Link to={btnPath}><button className="h-12 w-auto p-2  bg-white text-black rounded-lg">{btnTxt}</button></Link>
            </ul>
        </nav>
    </div>
    </>)
}