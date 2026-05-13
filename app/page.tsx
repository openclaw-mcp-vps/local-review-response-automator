export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          For Local Business Owners
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate personalized responses to{" "}
          <span className="text-[#58a6ff]">Google Business reviews</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop spending hours crafting review replies. Our AI reads each review, understands the sentiment, and writes a brand-appropriate response in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $9/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Social proof strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl p-6">
          <div>
            <p className="text-2xl font-bold text-white">10x</p>
            <p className="text-xs text-[#8b949e] mt-1">Faster replies</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">100%</p>
            <p className="text-xs text-[#8b949e] mt-1">Brand-consistent</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">4.9★</p>
            <p className="text-xs text-[#8b949e] mt-1">Avg. rating boost</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="border border-[#58a6ff]/40 rounded-2xl p-8 bg-[#161b22] text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Connect your Google Business Profile",
              "AI responses for unlimited reviews",
              "Sentiment-aware tone adjustment",
              "One-click publish to Google",
              "Response history & analytics",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the AI know my brand voice?",
              a: "During onboarding you provide a short business description and tone preferences. The AI uses this context every time it drafts a response."
            },
            {
              q: "Do responses get posted automatically?",
              a: "No — every response is shown to you first. You can edit, regenerate, or approve with one click before it goes live on Google."
            },
            {
              q: "What if I have more than one location?",
              a: "The current plan covers one Google Business Profile. Multi-location support is on the roadmap and will be available as an add-on."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-5 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Review Response Automator. All rights reserved.
      </footer>
    </main>
  );
}
