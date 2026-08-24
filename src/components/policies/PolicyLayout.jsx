import { Link } from "react-router-dom";

const PolicyLayout = ({ title, lastUpdated, children }) => {
  return (
    <main className="min-h-screen bg-[#F8F3EC]">
      {/* Header */}
      <section className="bg-[#2E1E13] text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-14 md:py-20">
          <Link
            to="/"
            className="inline-block mb-5 text-sm text-[#D9B38C] hover:text-white transition"
          >
            ← Back to Home
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>

          {lastUpdated && (
            <p className="mt-4 text-sm md:text-base text-gray-300">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-[#E8DED3] p-6 md:p-10">
          <div className="prose prose-stone max-w-none">{children}</div>
        </div>
      </section>
    </main>
  );
};

export default PolicyLayout;
