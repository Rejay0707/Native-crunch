import PolicyLayout from "../../components/policies/PolicyLayout";

const PrivacyPolicyPage = () => {
  const sections = [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      preview:
        "Information we may collect when you create an account, place an order, or contact us.",
      content: (
        <>
          <p>
            When you create an account, place an order, or contact us, we may
            collect information such as your name, email address, mobile number,
            billing and delivery details, and information required to process
            your order.
          </p>
        </>
      ),
    },

    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      preview:
        "How your information is used to provide services, process orders, and improve your experience.",
      content: (
        <>
          <p>
            We use the information collected to provide our services, process
            orders, communicate with customers, provide delivery updates, and
            improve our website and customer experience.
          </p>
        </>
      ),
    },

    {
      id: "payment-information",
      title: "Payment Information",
      preview:
        "Information about how payments made through our website are processed.",
      content: (
        <>
          <p>
            Payments made through our website are processed through our payment
            gateway provider. Native Crunch does not intentionally store
            complete card, UPI, or other sensitive payment credentials on our
            servers.
          </p>
        </>
      ),
    },

    {
      id: "account-information",
      title: "Account Information",
      preview:
        "How account information may be stored to provide account-related features.",
      content: (
        <>
          <p>
            If you create an account on our website, your account information
            may be stored so that you can access features such as order history
            and other account-related services.
          </p>
        </>
      ),
    },

    {
      id: "cookies",
      title: "Cookies",
      preview:
        "How cookies and similar technologies may be used on our website.",
      content: (
        <>
          <p>
            Our website may use cookies or similar technologies to maintain
            sessions, remember preferences, improve functionality, and
            understand how visitors use the website.
          </p>
        </>
      ),
    },

    {
      id: "sharing-information",
      title: "Sharing of Information",
      preview: "When information may need to be shared with service providers.",
      content: (
        <>
          <p>
            We may share necessary information with service providers involved
            in payment processing, order fulfilment, delivery, website hosting,
            and other services required to operate our business.
          </p>

          <p>We do not sell your personal information to third parties.</p>
        </>
      ),
    },

    {
      id: "data-security",
      title: "Data Security",
      preview: "Measures taken to help protect customer information.",
      content: (
        <>
          <p>
            We take reasonable measures to protect customer information from
            unauthorized access, misuse, alteration, or disclosure.
          </p>
        </>
      ),
    },

    {
      id: "third-party-services",
      title: "Third-Party Services",
      preview:
        "Information about payment gateways, delivery providers, analytics, and other services.",
      content: (
        <>
          <p>
            Our website may use third-party services such as payment gateways,
            delivery providers, analytics services, or social media platforms.
            These services may have their own privacy policies and terms.
          </p>
        </>
      ),
    },

    {
      id: "your-rights",
      title: "Your Rights",
      preview: "How you can contact us regarding your personal information.",
      content: (
        <>
          <p>
            If you have questions about your personal information or wish to
            request changes to your information, you can contact us using the
            contact details provided on our website.
          </p>
        </>
      ),
    },

    {
      id: "contact-us",
      title: "Contact Us",
      preview: "How to contact Native Crunch regarding this Privacy Policy.",
      content: (
        <>
          <p>
            If you have any questions regarding this Privacy Policy, please
            contact Native Crunch at:
          </p>

          <p>
            <strong>Email:</strong> info@nativecrunch.com
            <br />
            <strong>Phone:</strong> +91 70103 00199
          </p>
        </>
      ),
    },
  ];

  return (
    <PolicyLayout
      title="Privacy Policy"
      lastUpdated="August 2026"
      sections={sections}
    />
  );
};

export default PrivacyPolicyPage;
