import Link from "next/link";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 selection:bg-indigo-500/30">
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-green-600 rounded-lg flex items-center justify-center font-bold text-xl text-white">
              M
            </div>
            <span className="text-lg font-bold tracking-tight text-white">Memorialy</span>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto space-y-8 text-lg leading-relaxed">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-12 tracking-tight">Terms of Use</h1>
        
        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mt-12">1. Acceptance of Terms</h2>
          <p>
            By downloading or using Memorialy, these terms will automatically apply to you. You should make sure therefore that you read them carefully before using the app.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mt-12">2. Memorialy Pro Subscriptions</h2>
          <p>
            Memorialy offers an optional auto-renewing premium subscription (&quot;Memorialy Pro&quot;).
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payment will be charged to your Apple ID account at the confirmation of purchase.</li>
            <li>Subscription automatically renews unless it is canceled at least 24 hours before the end of the current period.</li>
            <li>Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
            <li>You can manage and cancel your subscriptions by going to your App Store Account Settings after purchase.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mt-12">3. User Content</h2>
          <p>
            You retain all rights and ownership to the text, images, and data you submit to Memorialy. You are solely responsible for the content you create and store within the app.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mt-12">4. Acceptable Use</h2>
          <p>
            You agree not to use Memorialy in any way that violates applicable local, national, or international law, or to exploit the AI Chat features to generate malicious, illegal, or harmful content.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mt-12">5. Disclaimer of Warranties</h2>
          <p>
            Memorialy is provided &quot;as is&quot; without any warranties, expressed or implied. While we strive for maximum data security and uptime, we do not guarantee that the app will always be safe, secure, or error-free.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mt-12">6. Contact</h2>
          <p>
            For any questions regarding these Terms, contact us at: <br />
            <a href="mailto:support@lesetja.dev" className="text-indigo-400 hover:text-indigo-300 underline">support@lesetja.dev</a>
          </p>
        </section>
      </main>
    </div>
  );
}