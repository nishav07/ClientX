import Navbar from "../components/Navbar"

export default function Landing(){
    return(<>
    <section id="hero"className="h-full w-full">
        <Navbar li1="home" li2="about" li3="contact" btnTxt="Login/SignUp" btnPath="/auth"></Navbar>
    </section>
    </>)
}