import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const PolicyLayout = ({ title, lastUpdated, sections = [] }) => {
  const [selectedSection, setSelectedSection] = useState(null);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (selectedSection) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedSection]);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedSection(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F3EC]">
      {/* =========================
          HEADER
      ========================== */}
      {/* =========================
    HEADER
========================== */}
      <section className="bg-[#2E1E13] text-white">
        <div className="mx-auto max-w-6xl px-5 py-6 sm:px-6 sm:py-8 md:py-10">
          {/* Back */}
          <Link
            to="/"
            className="
        mb-3
        inline-flex
        items-center
        text-sm
        text-[#D9B38C]
        transition
        hover:text-white
      "
          >
            ← Back to Home
          </Link>

          {/* Title */}
          <h1
            className="
        max-w-3xl
        font-serif
        text-3xl
        font-semibold
        leading-tight
        sm:text-4xl
        lg:text-5xl
      "
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className="
        mt-2
        max-w-2xl
        text-sm
        leading-6
        text-white/70
        sm:text-base
      "
          >
            Please take a moment to review our policies and understand how we
            handle your information and services.
          </p>

          {/* Last Updated */}
          {lastUpdated && (
            <p className="mt-3 text-xs text-[#D9B38C] sm:text-sm">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </section>

      {/* =========================
          POLICY SECTIONS
      ========================== */}
      <section className="mx-auto max-w-6xl px-5 py-7 sm:px-6 md:py-10">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[3px] text-[#C97A34]">
            Policy Details
          </p>

          <h2 className="mt-2 font-serif text-2xl font-semibold text-[#2E1E13] md:text-3xl">
            Explore the sections
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6F6256] md:text-base">
            Select any section below to read the complete details.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <motion.button
              key={section.id || index}
              type="button"
              onClick={() => setSelectedSection(section)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              whileHover={{ y: -4 }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#E8DED3]
                bg-white
                p-5
                text-left
                shadow-sm
                transition-all
                duration-300
                hover:border-[#C97A34]/40
                hover:shadow-lg
                cursor-pointer
              "
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F8F2EA]
                    text-xs
                    font-semibold
                    text-[#C97A34]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <ArrowRight
                  size={18}
                  className="
                    text-[#C97A34]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold text-[#2E1E13]">
                {section.title}
              </h3>

              {/* Preview */}
              {section.preview && (
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#6F6256]">
                  {section.preview}
                </p>
              )}

              {/* Bottom accent */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-0
                  bg-[#C97A34]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </motion.button>
          ))}
        </div>
      </section>

      {/* =========================
          MODAL / LIGHTBOX
      ========================== */}
      <AnimatePresence>
        {selectedSection && (
          <motion.div
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/60
              p-4
              backdrop-blur-sm
              sm:p-6
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedSection(null);
              }
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 25,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                relative
                flex
                max-h-[85vh]
                w-full
                max-w-3xl
                flex-col
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-2xl
              "
            >
              {/* Modal Header */}
              <div
                className="
                  flex
                  items-start
                  justify-between
                  border-b
                  border-[#E8DED3]
                  bg-[#F8F3EC]
                  px-5
                  py-5
                  sm:px-7
                "
              >
                <div className="pr-10">
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[2px]
                      text-[#C97A34]
                    "
                  >
                    Policy Section
                  </p>

                  <h2
                    className="
                      mt-1
                      font-serif
                      text-2xl
                      font-semibold
                      text-[#2E1E13]
                      sm:text-3xl
                    "
                  >
                    {selectedSection.title}
                  </h2>
                </div>

                {/* Close */}
                <button
                  type="button"
                  onClick={() => setSelectedSection(null)}
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#2E1E13]
                    shadow-sm
                    transition
                    hover:bg-[#C97A34]
                    hover:text-white
                    cursor-pointer
                  "
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Content */}
              <div
                className="
                  overflow-y-auto
                  px-5
                  py-6
                  sm:px-7
                  sm:py-7
                "
              >
                <div
                  className="
                    prose
                    prose-stone
                    max-w-none
                    text-[#5A4B3E]
                    prose-headings:text-[#2E1E13]
                    prose-strong:text-[#2E1E13]
                    prose-a:text-[#C97A34]
                  "
                >
                  {selectedSection.content}
                </div>
              </div>

              {/* Modal Footer */}
              <div
                className="
                  border-t
                  border-[#E8DED3]
                  bg-[#FAF7F2]
                  px-5
                  py-4
                  text-right
                  sm:px-7
                "
              >
                <button
                  type="button"
                  onClick={() => setSelectedSection(null)}
                  className="
                    rounded-lg
                    bg-[#2E1E13]
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-[#C97A34]
                    cursor-pointer
                  "
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default PolicyLayout;
