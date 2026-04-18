import { Link } from "react-router-dom";


export default function SideNav(){
    return(<div
     id="sideNavContainer"
     className="h-screen w-60 bg-black border-r-2 border-gray-400"
    >

        <div id="Nav"
        className="p-2 bg-gray-300 flex flex-col gap-2"
        >

            <Link to="/dashboard/home"><button className="h-12 w-full p-2 bg-white text-black rounded-lg">home</button></Link>
            <Link to="/dashboard/customers"><button className="h-12 w-full p-2 bg-white text-black rounded-lg">customers</button></Link>
            <Link to="/dashboard/leads"><button className="h-12 w-full p-2 bg-white text-black rounded-lg">leads</button></Link>


        </div>

    </div>)
}