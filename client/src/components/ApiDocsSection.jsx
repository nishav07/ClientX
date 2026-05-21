import { useState } from "react"

const API_ENDPOINT = "http://localhost:8080/userApi/addLead"

const sampleBody = {
  data: {
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "9876543210",
    source: "website",
    interest: "premium plan",
  },
}

export default function ApiDocsSection() {
  const [apiKey, setApiKey] = useState("")
  const [form, setForm] = useState({ name: "", email: "", phone: "", source: "", interest: "" })
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const curlExample = `curl -X POST ${API_ENDPOINT} \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -d '${JSON.stringify(sampleBody, null, 2)}'`

  const handleCopy = () => {
    navigator.clipboard.writeText(curlExample)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email) return alert("Name and email are required")
    setLoading(true)
    setResponse(null)
    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(apiKey ? { "x-api-key": apiKey } : {}),
        },
        body: JSON.stringify({ data: form }),
      })
      const json = await res.json()
      setResponse({ ok: res.ok, data: json })
    } catch (err) {
      setResponse({ ok: false, data: { error: err.message } })
    }
    setLoading(false)
  }

  return (
    <section id="api" className="bg-[#080808] border-t border-white/5 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-green-400/8 border border-green-400/20 text-green-400 text-xs uppercase tracking-widest font-['Sora',sans-serif]">
          API Reference
        </span>

        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3 font-['Sora',sans-serif]">
          Add leads without logging in
        </h2>
        <p className="text-white/40 text-sm mb-14 font-['Sora',sans-serif]">
          Generate an API key from your dashboard, then send a single POST request from anywhere.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">

          {/* Left — Docs */}
          <div className="p-7 rounded-2xl border border-white/7 bg-white/[0.02]">

            {/* Endpoint */}
            <div className="flex items-center gap-3 bg-black/40 border border-white/6 rounded-xl px-4 py-3 mb-7">
              <span className="bg-green-400 text-black text-xs font-black px-2 py-0.5 rounded font-['Sora',sans-serif] tracking-wide">POST</span>
              <span className="text-white/50 text-xs font-mono break-all">{API_ENDPOINT}</span>
            </div>

            {/* Headers table */}
            <p className="text-white/35 text-xs uppercase tracking-widest mb-3 font-['Sora',sans-serif]">Headers</p>
            <div className="flex flex-col gap-2 mb-6">
              {[["Content-Type", "application/json", true], ["x-api-key", "Your API key", true]].map(([k, v, req]) => (
                <div key={k} className="flex items-center gap-3 bg-black/30 rounded-lg px-3 py-2">
                  <span className="text-white font-mono text-xs min-w-[130px]">{k}</span>
                  <span className="text-white/40 text-xs flex-1 font-['Sora',sans-serif]">{v}</span>
                  <span className={`text-xs font-['Sora',sans-serif] ${req ? "text-red-400" : "text-white/25"}`}>{req ? "required" : "optional"}</span>
                </div>
              ))}
            </div>

            {/* Body fields table */}
            <p className="text-white/35 text-xs uppercase tracking-widest mb-3 font-['Sora',sans-serif]">Body (inside data: {})</p>
            <div className="flex flex-col gap-2 mb-6">
              {[["name", "string", true], ["email", "string", true], ["phone", "string", false], ["source", "string", false], ["interest", "string", false]].map(([k, v, req]) => (
                <div key={k} className="flex items-center gap-3 bg-black/30 rounded-lg px-3 py-2">
                  <span className="text-white font-mono text-xs min-w-[90px]">{k}</span>
                  <span className="text-white/40 text-xs flex-1 font-['Sora',sans-serif]">{v}</span>
                  <span className={`text-xs font-['Sora',sans-serif] ${req ? "text-red-400" : "text-white/25"}`}>{req ? "required" : "optional"}</span>
                </div>
              ))}
            </div>

            {/* cURL */}
            <p className="text-white/35 text-xs uppercase tracking-widest mb-3 font-['Sora',sans-serif]">cURL Example</p>
            <div className="relative bg-black/50 border border-white/6 rounded-xl p-4 overflow-auto">
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 text-xs text-green-400 border border-green-400/30 bg-green-400/10 px-3 py-1 rounded-md hover:bg-green-400/20 transition-colors font-['Sora',sans-serif]"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
              <pre className="text-white/55 text-xs font-mono whitespace-pre-wrap break-words">{curlExample}</pre>
            </div>
          </div>

          {/* Right — Try It */}
          <div className="p-7 rounded-2xl border border-white/7 bg-white/[0.02] flex flex-col gap-3">
            <h4 className="text-white font-bold text-lg m-0 font-['Sora',sans-serif]">Try it now</h4>
            <p className="text-white/35 text-xs font-['Sora',sans-serif] mb-1">No account needed for testing. Add your API key for real submissions.</p>

            <input
              className="bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-green-400/40 transition-colors w-full font-['Sora',sans-serif] placeholder:text-white/25"
              placeholder="API Key (optional)"
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
            />
            {["name", "email", "phone", "source", "interest"].map(field => (
              <input
                key={field}
                className="bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-green-400/40 transition-colors w-full font-['Sora',sans-serif] placeholder:text-white/25"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={form[field]}
                onChange={e => setForm({ ...form, [field]: e.target.value })}
              />
            ))}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-1 w-full py-3 bg-green-400 text-black font-bold rounded-xl text-sm hover:bg-green-300 disabled:opacity-50 transition-colors font-['Sora',sans-serif]"
            >
              {loading ? "Sending..." : "Send Request →"}
            </button>

            {response && (
              <div className={`bg-black/40 border rounded-xl p-4 ${response.ok ? "border-green-400/25" : "border-red-400/25"}`}>
                <span className={`text-xs font-['Sora',sans-serif] ${response.ok ? "text-green-400" : "text-red-400"}`}>
                  {response.ok ? "✓ Success" : "✗ Error"}
                </span>
                <pre className="text-white/55 text-xs font-mono mt-2 whitespace-pre-wrap break-words">{JSON.stringify(response.data, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}