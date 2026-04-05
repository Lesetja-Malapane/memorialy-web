import Link from "next/link";

export default function HelpCenter() {
  const faqs = [
    {
      category: "General & Account",
      questions: [
        {
          q: "What is Memorialy?",
          a: "Memorialy is a private, AI-powered journaling app designed to help you organize your thoughts, track your moods, and discover deep personal insights.",
        },
        {
          q: "How do I delete my account?",
          a: "You can delete your account and all associated data permanently by going to Profile > Security > Delete Account inside the app.",
        },
      ],
    },
    {
      category: "Privacy & AI",
      questions: [
        {
          q: "Is my journal data private?",
          a: "Yes. Your privacy is our absolute priority. Your journal entries are encrypted and stored securely. We never sell your personal data to third parties.",
        },
        {
          q: "How does the AI work?",
          a: "Memorialy uses AI strictly to generate personal insights based on the text you provide. The AI processes your entries to find emotional patterns, but your data is never used to train public AI models.",
        },
      ],
    },
    {
      category: "Billing & Subscriptions",
      questions: [
        {
          q: "How do I cancel my subscription?",
          a: "If you subscribed via the App Store, you can cancel by going to your iPhone Settings > Apple ID > Subscriptions.",
        },
        {
          q: "Do you offer refunds?",
          a: "Refunds are handled directly by Apple depending on where you downloaded the app. Please contact Apple Support for refund requests.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 pb-20">
      {/* Navigation with Back Button */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
          <Link
            href="/"
            className="flex items-center text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          How can we help?
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Browse our frequently asked questions to get the most out of Memorialy.
        </p>
      </section>

      {/* FAQs Section */}
      <section className="max-w-3xl mx-auto px-6">
        {faqs.map((group, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">{group.category}</h2>
            <div className="space-y-4">
              {group.questions.map((faq, fIdx) => (
                <details
                  key={fIdx}
                  className="group bg-[#0A0A0A] border border-white/5 rounded-2xl [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between p-6 font-semibold cursor-pointer text-lg text-white">
                    {faq.q}
                    <span className="transition group-open:rotate-180 text-gray-400">
                      <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-gray-400 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}

        {/* Contact Support Card */}
        <div className="mt-16 bg-[#0A0A0A] rounded-3xl p-8 md:p-12 border border-white/5 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent pointer-events-none"></div>
          <h3 className="text-2xl font-bold mb-4 text-white">Still need help?</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help you out.
          </p>
          <a
            href="mailto:support@memorialy.app"
            className="inline-block bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
}