import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-green-600 rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-indigo-500/20">
              M
            </div>
            <span className="text-xl font-bold tracking-tight">Memorialy</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#testimonials" className="hover:text-white transition-colors">Reviews</Link>
            <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
          <Link href="#download" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-all">
            Get the App
          </Link>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Write less. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Remember everything.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Drop in your thoughts, photos, and daily moments. Memorialy&apos;s intelligent AI organizes, reflects, and helps you understand your mind.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.76 1.54.04 2.87.69 3.58 1.77-3.06 1.83-2.52 5.92.38 7.08-1.14 1.74-2.18 3.52-2.63 4.08zM12.03 7.25C11.97 4.94 13.9 3 16.06 3c.18 2.39-2.09 4.31-4.03 4.25z"/>
              </svg>
              Download for iOS
            </button>
          </div>
          <div className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#0A0A0A] p-2 shadow-2xl flex">
            <Image src="/ai-chat-mockup.png" alt="Memorialy UI" width={2736} height={1260} className="rounded-xl w-full h-auto" priority />
            <Image src="/ai-chat-mockup.png" alt="Memorialy UI" width={2736} height={1260} className="rounded-xl w-full h-auto" priority />
            <Image src="/ai-chat-mockup.png" alt="Memorialy UI" width={2736} height={1260} className="rounded-xl w-full h-auto" priority />
            <Image src="/ai-chat-mockup.png" alt="Memorialy UI" width={2736} height={1260} className="rounded-xl w-full h-auto" priority />
            </div>
        </div>
      </section>

      {/* 2. Alternating Features Section */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto space-y-32">
        {/* Feature 1: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full aspect-square md:aspect-[4/3] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl border border-white/5 p-8 relative overflow-hidden">
             {/* Placeholder for a specific mockup - replace with an actual feature image */}
             <div className="absolute inset-8 bg-[#111] rounded-2xl border border-white/10 shadow-2xl"></div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold">
              AI Reflection
            </div>
            <h2 className="text-4xl font-bold">Chats that actually explain your thoughts.</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Don&apos;t just write into the void. Memorialy&apos;s AI Chat analyzes your recent entries to help you uncover patterns in your mood, habits, and daily life.
            </p>
          </div>
        </div>

        {/* Feature 2: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full aspect-square md:aspect-[4/3] bg-gradient-to-bl from-purple-500/10 to-pink-500/10 rounded-3xl border border-white/5 p-8 relative overflow-hidden">
             <div className="absolute inset-8 bg-[#111] rounded-2xl border border-white/10 shadow-2xl"></div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-bold">
              Local-First Architecture
            </div>
            <h2 className="text-4xl font-bold">Lightning fast. Completely private.</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Powered by an offline-first Isar database, your journals load instantly whether you have a signal or not. Securely synced to the cloud only when you&apos;re ready.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Testimonials Grid */}
      <section id="testimonials" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Loved by overthinkers.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "The AI chat helped me realize patterns in my mood I never would have noticed on my own. It's like a therapist in my pocket.", author: "Sarah J." },
              { text: "Finally, a journaling app that doesn't feel cluttered. The rich text editor is flawless, and the dark mode is gorgeous.", author: "Michael T." },
              { text: "I travel a lot, so the offline-first sync is a lifesaver. I can journal on the plane and know it's safely backed up later.", author: "Elena R." }
            ].map((review, i) => (
              <div key={i} className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
                <div className="flex text-indigo-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-6">&quot;{review.text}&quot;</p>
                <p className="font-bold text-white">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Frequently Asked</h2>
        <div className="space-y-4">
          {[
            { q: "Is my data private?", a: "Yes. Memorialy uses industry-standard Firebase encryption and stores data locally on your device using Isar until it is securely synced." },
            { q: "Do I need internet to use it?", a: "No. Memorialy is built offline-first. You can write, edit, and organize your journals completely offline." },
            { q: "What is Memorialy Pro?", a: "Memorialy Pro unlocks unlimited AI Chat sessions, advanced media uploads, and premium themes." }
          ].map((faq, i) => (
            <details key={i} className="group bg-[#0A0A0A] border border-white/5 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 font-semibold cursor-pointer text-lg">
                {faq.q}
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="px-6 pb-6 text-gray-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 5. Bottom CTA & Footer */}
      <section id="download" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent -z-10"></div>
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 rounded-[3rem] p-12 sm:p-20 backdrop-blur-sm">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Stop forgetting. <br/>Start remembering.</h2>
          <p className="text-gray-400 text-lg mb-10">Join the thousands organizing their minds with Memorialy.</p>
          <button className="bg-white text-black px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
            Download Memorialy Free
          </button>
        </div>
      </section>

      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Memorialy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}