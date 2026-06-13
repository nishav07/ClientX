import { Link, NavLink } from "react-router-dom";


export default function SideNav(){
    return(<div
     id="sideNavContainer"
     className="h-screen w-60 bg-black border-r-2 border-gray-400"
    >

        <div id="Nav"
        className="p-2 mt-16  flex flex-col gap-2"
        >

            <Link to="/dashboard/home" className="h-12 w-full p-2 bg-white text-black rounded-lg">home</Link>
            <Link to="/dashboard/customers" className="h-12 w-full p-2 bg-white text-black rounded-lg">customers</Link>
            <Link to="/dashboard/leads" className="h-12 w-full p-2 bg-white text-black rounded-lg">leads</Link>
            <Link to="/dashboard/apiKeys" className="h-12 w-full p-2 bg-white text-black rounded-lg">API keys</Link>


        </div> 

    </div>)
}