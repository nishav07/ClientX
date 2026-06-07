import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden px-6">

    
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-green-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full bg-green-400/5 blur-3xl pointer-events-none" />

  
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 max-w-3xl text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Badge */}
        <div className="inline-block px-4 py-1.5 mb-7 rounded-full bg-green-400/10 border border-green-400/25 text-green-400 text-xs tracking-widest uppercase font-['Sora',sans-serif]">
          🚀 CRM + API Lead System
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6 font-['Sora',sans-serif]">
          Capture Leads.<br />
          <span className="text-green-400">Automate Growth.</span>
        </h1>

        {/* Subtext */}
        <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 font-['Sora',sans-serif]">
          Manage leads from your dashboard, or push them directly via API — no login required. Built for founders who move fast.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <Link to="/auth">
            <button className="px-8 py-3.5 bg-green-400 text-black font-bold rounded-xl text-sm hover:scale-105 hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-all duration-200 font-['Sora',sans-serif]">
              Get Started Free
            </button>
          </Link>
          <a href="#api">
            <button className="px-7 py-3.5 bg-transparent border border-white/20 text-white rounded-xl text-sm hover:border-green-400 transition-all duration-200 font-['Sora',sans-serif]">
              View API Docs →
            </button>
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 justify-center">
          {[["10k+", "Leads Tracked"], ["99.9%", "Uptime"], ["REST API", "No login needed"]].map(([val, label]) => (
            <div key={label} className="flex flex-col gap-1 items-center">
              <span className="text-2xl font-bold text-white font-['Sora',sans-serif]">{val}</span>
              <span className="text-xs uppercase tracking-widest text-white/30 font-['Sora',sans-serif]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}