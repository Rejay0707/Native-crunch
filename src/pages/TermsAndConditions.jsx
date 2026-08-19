import { Link } from "react-router-dom";

const TermsAndConditions = () => {
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
            Terms & Conditions
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
                1. Acceptance of Terms
              </h2>

              <p>
                By accessing or using the Native Crunch website, you agree to
                comply with these Terms & Conditions. If you do not agree with
                these terms, please do not use the website or place an order.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                2. User Accounts
              </h2>

              <p>
                Some features of the website may require you to create an
                account. You are responsible for providing accurate information
                and maintaining the confidentiality of your account credentials.
              </p>

              <p className="mt-3">
                You are responsible for activities performed through your
                account and should notify us if you believe your account has
                been accessed without authorization.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                3. Products and Availability
              </h2>

              <p>
                We make reasonable efforts to ensure that product descriptions,
                images, weights, variants, and other information displayed on
                the website are accurate. Product availability may change
                without notice.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                4. Pricing
              </h2>

              <p>
                Product prices are displayed on the website and may be changed
                from time to time. Applicable shipping charges, taxes, or
                additional fees may be added during checkout where applicable.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                5. Orders
              </h2>

              <p>
                Placing an order constitutes a request to purchase the selected
                products. We reserve the right to accept, reject, or cancel an
                order when necessary, including in cases of product
                unavailability, pricing errors, suspected fraud, or other
                legitimate reasons.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                6. Payments
              </h2>

              <p>
                Payments are processed through the payment methods and providers
                made available during checkout. You agree to provide accurate
                payment and billing information when placing an order.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                7. Shipping and Delivery
              </h2>

              <p>
                Orders are shipped to the delivery address provided during
                checkout. Estimated delivery times may vary depending on
                location, availability, courier services, weather, and other
                circumstances beyond our reasonable control.
              </p>

              <p className="mt-3">
                Shipping charges and eligibility for free shipping will be
                displayed during the ordering process where applicable.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                8. Returns, Refunds, and Cancellations
              </h2>

              <p>
                Returns, refunds, replacements, and cancellations are subject to
                the applicable Native Crunch return and refund policy. Customers
                should contact us as soon as possible if they receive an
                incorrect, damaged, or defective product.
              </p>

              <p className="mt-3">
                Certain food products or customized orders may have specific
                return or cancellation conditions.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                9. Customized and Gift Box Orders
              </h2>

              <p>
                Customized products and gift boxes may be prepared according to
                the information submitted by the customer. Customers are
                responsible for ensuring that recipient information,
                customization details, and delivery information are accurate
                before completing an order.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                10. Intellectual Property
              </h2>

              <p>
                All website content, including logos, branding, product images,
                graphics, text, designs, and other materials, is owned by or
                licensed to Native Crunch unless otherwise stated.
              </p>

              <p className="mt-3">
                You may not reproduce, modify, distribute, or commercially
                exploit website content without prior permission.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                11. Prohibited Activities
              </h2>

              <p>You agree not to:</p>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Use the website for unlawful purposes</li>
                <li>Attempt to gain unauthorized access to the website</li>
                <li>Interfere with website functionality or security</li>
                <li>Submit false or misleading information</li>
                <li>Use automated methods to abuse or disrupt the service</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                12. Limitation of Liability
              </h2>

              <p>
                To the extent permitted by applicable law, Native Crunch will
                not be responsible for losses resulting from circumstances
                beyond its reasonable control, including delivery delays,
                service interruptions, technical issues, or events outside our
                control.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                13. Changes to These Terms
              </h2>

              <p>
                We may update these Terms & Conditions from time to time.
                Updated terms will be posted on this page with a revised
                effective date. Continued use of the website after changes are
                posted constitutes acceptance of the updated terms, where
                permitted by law.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                14. Governing Law
              </h2>

              <p>
                These Terms & Conditions are subject to the applicable laws and
                regulations governing the Native Crunch business and its
                customers.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-[#2E1E13]">
                15. Contact Us
              </h2>

              <p>
                If you have questions about these Terms & Conditions, orders,
                products, or our services, please contact Native Crunch through
                the contact information provided on our website.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;
