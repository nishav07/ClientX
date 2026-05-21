import { useState } from "react"
import { Link } from "react-router-dom"

// Landing page:  <Navbar variant="landing" />
// Dashboard:     <Navbar variant="dashboard" username="Rahul" />

export default function Navbar({ variant = "landing", username = "", btnTxt = "Login / Sign Up", btnPath = "/auth" }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link to="/" className="text-xl font-black tracking-tight text-white font-['Sora',sans-serif]">
          client<span className="text-green-400">X</span>
        </Link>

     
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {variant === "landing" && (
            <>
              <li><a href="#hero" className="text-white/60 hover:text-white text-sm transition-colors font-['Sora',sans-serif]">Home</a></li>
              <li><a href="#features" className="text-white/60 hover:text-white text-sm transition-colors font-['Sora',sans-serif]">Features</a></li>
              <li><a href="#api" className="text-white/60 hover:text-white text-sm transition-colors font-['Sora',sans-serif]">API Docs</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white text-sm transition-colors font-['Sora',sans-serif]">Contact</a></li>
            </>
          )}
          {variant === "dashboard" && (
            <>
            

             <button className="px-7 py-3.5 bg-transparent border border-white/20 text-white rounded-xl text-sm hover:border-green-400 transition-all duration-200 font-['Sora',sans-serif]">
              <Link to="/dashboard/add" className="text-white/60 hover:text-white text-sm transition-colors font-['Sora',sans-serif]">Add leads</Link>
            </button>
            
            </>
          )}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {variant === "dashboard" ? (
            <span className="text-white/70 text-sm font-['Sora',sans-serif]"><i className="fa-solid fa-user text-white"></i> {username || "User"}</span>
          ) : (
            <Link to={btnPath} className="hidden md:block">
              <button className="px-5 py-2 text-sm border border-white/20 text-white rounded-lg hover:border-green-400 hover:text-green-400 transition-all font-['Sora',sans-serif]">
                {btnTxt}
              </button>
            </Link>
          )}

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-5 border-t border-white/5 bg-black/95">
          {variant === "landing" && (
            <>
              <a href="#hero" className="text-white/60 text-sm font-['Sora',sans-serif]" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#features" className="text-white/60 text-sm font-['Sora',sans-serif]" onClick={() => setMenuOpen(false)}>Features</a>
              <a href="#api" className="text-white/60 text-sm font-['Sora',sans-serif]" onClick={() => setMenuOpen(false)}>API Docs</a>
              <a href="#contact" className="text-white/60 text-sm font-['Sora',sans-serif]" onClick={() => setMenuOpen(false)}>Contact</a>
              <Link to={btnPath} className="text-green-400 text-sm font-['Sora',sans-serif]" onClick={() => setMenuOpen(false)}>{btnTxt}</Link>
            </>
          )}
          {variant === "dashboard" && (
            <>
              <Link to="/dashboard" className="text-white/60 text-sm font-['Sora',sans-serif]" onClick={() => setMenuOpen(false)}>Dashboard</Link>
              <Link to="/leads" className="text-white/60 text-sm font-['Sora',sans-serif]" onClick={() => setMenuOpen(false)}>Leads</Link>
              <Link to="/analytics" className="text-white/60 text-sm font-['Sora',sans-serif]" onClick={() => setMenuOpen(false)}>Analytics</Link>
              <Link to="/api-keys" className="text-white/60 text-sm font-['Sora',sans-serif]" onClick={() => setMenuOpen(false)}>API Keys</Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}