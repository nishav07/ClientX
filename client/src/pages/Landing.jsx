import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import FeaturesSection from "../components/FeaturesSection"
import ApiDocsSection from "../components/ApiDocsSection"
import Footer from "../components/Footer"

// Make sure index.html <head> has this font:
// <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

export default function Landing() {
  return (
    <div className="bg-[#050505] min-h-screen">
      <Navbar variant="landing" btnTxt="Login / Sign Up" btnPath="/auth/login" />
      <div className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <ApiDocsSection />
        <Footer />
      </div>
    </div>
  )
}