import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#F8F2EA] text-[#2E1E13]">
      {/* Header */}
      <header className="border-b border-[#E4D7CB] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <Link
            to="/"
            className="text-sm font-medium text-[#C97A34] hover:underline"
          >
            ← Back to Home
          </Link>

          <h1 className="mt-6 text-3xl font-bold sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="mt-2 text-sm text-[#8A796B]">
            Last updated: August 19, 2026
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-10">
          <div className="space-y-8 text-sm leading-7 text-[#6A5B4E]">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                1. Introduction
              </h2>

              <p>
                Native Crunch respects your privacy and is committed to
                protecting the personal information you provide while using our
                website. This Privacy Policy explains what information we
                collect, how we use it, and how we protect it.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                2. Information We Collect
              </h2>

              <p>
                When you create an account, place an order, contact us, or use
                certain features of our website, we may collect information such
                as:
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Name and contact information</li>
                <li>Email address and phone number</li>
                <li>Shipping and billing information</li>
                <li>Account information</li>
                <li>Order and transaction details</li>
                <li>Information submitted through forms</li>
                <li>Information related to customized or gift-box orders</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                3. How We Use Your Information
              </h2>

              <p>We may use your information to:</p>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Create and manage your account</li>
                <li>Process and fulfill your orders</li>
                <li>Arrange shipping and delivery</li>
                <li>Provide customer support</li>
                <li>Send order and account-related updates</li>
                <li>Improve our website and services</li>
                <li>Prevent fraud, abuse, and unauthorized activity</li>
                <li>Comply with applicable legal requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                4. Payment Information
              </h2>

              <p>
                Payments may be processed through third-party payment providers.
                Native Crunch does not intend to store complete payment card
                details on its own servers. Payment information is handled
                according to the security and privacy practices of the
                applicable payment provider.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                5. Cookies and Local Storage
              </h2>

              <p>
                Our website may use browser technologies such as cookies and
                local storage to support essential website functionality,
                maintain preferences, improve your experience, and remember
                information such as shopping-cart data.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                6. Sharing of Information
              </h2>

              <p>
                We may share necessary information with trusted service
                providers who help us operate our business, including payment
                processors, shipping and delivery partners, hosting providers,
                and other technology providers.
              </p>

              <p className="mt-3">
                We may also disclose information when required by applicable
                law, legal process, or to protect the rights, safety, and
                security of our customers and business.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                7. Data Security
              </h2>

              <p>
                We take reasonable measures to protect personal information
                against unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmitting or storing
                information electronically can be guaranteed to be completely
                secure.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                8. Data Retention
              </h2>

              <p>
                We retain personal information only for as long as reasonably
                necessary to provide our services, complete transactions,
                maintain business records, resolve disputes, and comply with
                applicable legal obligations.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                9. Your Privacy Rights
              </h2>

              <p>
                Depending on applicable law, you may have rights to request
                access to, correction of, or deletion of your personal
                information. You may contact us using the contact information
                provided below for privacy-related requests.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                10. Third-Party Services
              </h2>

              <p>
                Our website may use third-party services to provide features
                such as payment processing, hosting, analytics, communication,
                authentication, and delivery. These providers may process
                information according to their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                11. Children's Privacy
              </h2>

              <p>
                Our services are not intended to knowingly collect personal
                information from children. If you believe that a child has
                provided personal information to us, please contact us so that
                appropriate action can be taken.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                12. Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page along with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                13. Contact Us
              </h2>

              <p>
                If you have questions about this Privacy Policy or how your
                information is handled, please contact Native Crunch through the
                contact information provided on our website.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
