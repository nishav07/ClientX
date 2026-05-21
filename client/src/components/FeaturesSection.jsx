import { useEffect, useRef, useState } from "react"

const features = [
  { icon: "📋", title: "Manual Lead Management", desc: "Add, edit, and track leads directly from your dashboard. Full control, no tech knowledge required." },
  { icon: "🔑", title: "API Key Generation", desc: "Generate secure API keys from your dashboard and share with your product to push leads without login." },
  { icon: "📡", title: "REST API Integration", desc: "One simple POST request adds a lead. Works from any language, any platform, any time." },
  { icon: "📊", title: "Analytics Dashboard", desc: "See where leads come from, track sources, interests, and your conversion funnel at a glance." },
  { icon: "⚡", title: "Instant Updates", desc: "Leads added via API appear in your dashboard immediately. Real-time, zero delay." },
  { icon: "🔒", title: "Secure & Reliable", desc: "API key auth keeps your data safe. 99.9% uptime so you never miss a lead." },
]

export default function FeaturesSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="bg-[#050505] border-t border-white/5 py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto text-center">

        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-green-400/8 border border-green-400/20 text-green-400 text-xs uppercase tracking-widest font-['Sora',sans-serif]">
          Features
        </span>

        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4 font-['Sora',sans-serif]">
          Everything you need,<br />nothing you don't
        </h2>
        <p className="text-white/40 text-sm mb-14 font-['Sora',sans-serif]">
          Built for founders and small teams who want a fast, no-nonsense lead system.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`p-7 rounded-2xl border border-white/7 bg-white/[0.02] hover:border-green-400/30 hover:bg-green-400/[0.03] transition-all duration-200 cursor-default
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 80}ms`, transitionDuration: "500ms" }}
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-white font-bold text-base mb-2 font-['Sora',sans-serif]">{f.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed font-['Sora',sans-serif]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}