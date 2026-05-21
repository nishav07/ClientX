import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#030303] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
          <div>
            <div className="text-2xl font-black text-white tracking-tight mb-3 font-['Sora',sans-serif]">
              client<span className="text-green-400">X</span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs font-['Sora',sans-serif]">
              Simple CRM for founders who move fast. Capture leads via dashboard or API.
            </p>
          </div>

        
          <div className="flex flex-col gap-3">
            <h5 className="text-white/45 text-xs uppercase tracking-widest font-semibold mb-1 font-['Sora',sans-serif]">Product</h5>
            <a href="#features" className="text-white/30 hover:text-white/70 text-sm transition-colors font-['Sora',sans-serif]">Features</a>
            <a href="#api" className="text-white/30 hover:text-white/70 text-sm transition-colors font-['Sora',sans-serif]">API Docs</a>
            <Link to="/auth" className="text-white/30 hover:text-white/70 text-sm transition-colors font-['Sora',sans-serif]">Login</Link>
            <Link to="/auth" className="text-white/30 hover:text-white/70 text-sm transition-colors font-['Sora',sans-serif]">Sign Up</Link>
          </div>

        
          <div className="flex flex-col gap-3">
            <h5 className="text-white/45 text-xs uppercase tracking-widest font-semibold mb-1 font-['Sora',sans-serif]">Contact</h5>
            <a href="mailto:support@leadflow.com" className="text-white/30 hover:text-white/70 text-sm transition-colors font-['Sora',sans-serif]">support@leadflow.com</a>
            <a href="#" className="text-white/30 hover:text-white/70 text-sm transition-colors font-['Sora',sans-serif]">Twitter / X</a>
            <a href="#" className="text-white/30 hover:text-white/70 text-sm transition-colors font-['Sora',sans-serif]">GitHub</a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-wrap justify-between gap-3">
          <span className="text-white/20 text-xs font-['Sora',sans-serif]">© {new Date().getFullYear()} LeadFlow. All rights reserved.</span>
          <span className="text-white/20 text-xs font-['Sora',sans-serif]">Made with ♥ for founders</span>
        </div>
      </div>
    </footer>
  )
}