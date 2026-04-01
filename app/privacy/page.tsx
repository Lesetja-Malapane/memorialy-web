import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 selection:bg-indigo-500/30">
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-green-600 rounded-lg flex items-center justify-center font-bold text-xl text-white">
              M
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Memorialy
            </span>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto space-y-8 text-lg leading-relaxed">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-12 tracking-tight">
          Privacy Policy
        </h1>

        <p>
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mt-12">
            1. Your Data, Your Device (Local First)
          </h2>
          <p>
            Memorialy is built with an offline-first architecture. By default,
            your journals, photos, and chat histories are encrypted and stored
            locally on your device. We cannot read, access, or sell your local
            data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mt-12">
            2. Cloud Synchronization
          </h2>
          <p>
            When you create an account to back up your data, your information is
            securely synced to our cloud infrastructure (provided by Google
            Firebase). This data is heavily protected using industry-standard
            encryption in transit and at rest.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mt-12">
            3. Artificial Intelligence Features
          </h2>
          <p>
            To provide our interactive Chat feature, Memorialy utilizes a
            third-party Artificial Intelligence service provided by <strong>Google Gemini</strong>. What data is collected and
            shared: If you explicitly opt-in to use the Chat feature, the text
            messages you input into the chat interface are transmitted to our AI
            provider. How we use this data: This data is strictly used to
            generate conversational responses within the app in real-time. Data
            Protection: We do not share your personal account information,
            journals, or images with the AI provider. Furthermore, our agreement
            with <strong>Google</strong> ensures that your data is not used to
            train their public or foundational AI models, providing an equal
            level of protection to our own privacy standards.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mt-12">
            4. Third-Party Services
          </h2>
          <p>
            We use trusted third-party services to operate the app effectively:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Firebase:</strong> For secure authentication, database
              syncing, and cloud storage.
            </li>
            <li>
              <strong>RevenueCat:</strong> To securely manage your Memorialy Pro
              subscriptions. We do not directly process or store your credit
              card information.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mt-12">
            5. Account Deletion
          </h2>
          <p>
            You have the right to be forgotten. You can permanently delete your
            account and all associated cloud data at any time directly from the
            Memorialy app&apos;s Profile settings. This action is immediate and
            irreversible.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mt-12">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at: <br />
            <a
              href="mailto:support@lesetja.dev"
              className="text-indigo-400 hover:text-indigo-300 underline"
            >
              support@lesetja.dev
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
