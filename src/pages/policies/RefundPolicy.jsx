import Navbar from "../../components/layout/Navbar";
import PolicyLayout from "../../components/policies/PolicyLayout";
import Footer from "../../components/layout/Footer";

const RefundPolicy = () => {
  const sections = [
    {
      id: "order-cancellation",
      title: "Order Cancellation",
      preview:
        "Information about cancelling an order after it has been placed.",
      content: (
        <>
          <p>
            Orders cannot generally be cancelled once they have been processed
            or dispatched.
          </p>

          <p>
            If you need to request a cancellation, please contact Native Crunch
            as soon as possible after placing the order. Cancellation requests
            will depend on whether the order has already been processed or
            dispatched.
          </p>
        </>
      ),
    },

    {
      id: "refunds",
      title: "Refunds",
      preview: "Information about refunds and genuine issues with an order.",
      content: (
        <>
          <p>
            Refunds are not provided for change of mind after an order has been
            processed or dispatched.
          </p>

          <p>
            However, if there is a genuine issue with an order, such as
            receiving a damaged, incorrect, or missing product, please contact
            us promptly with the relevant order details and supporting
            information.
          </p>
        </>
      ),
    },

    {
      id: "damaged-products",
      title: "Damaged Products",
      preview: "What to do if your product arrives damaged.",
      content: (
        <>
          <p>
            If a product arrives damaged, please contact us as soon as possible
            after delivery. We may request photographs or other information to
            understand the issue and determine the appropriate resolution.
          </p>
        </>
      ),
    },

    {
      id: "incorrect-missing-products",
      title: "Incorrect or Missing Products",
      preview:
        "What to do if you receive the wrong product or an item is missing.",
      content: (
        <>
          <p>
            If you receive an incorrect product or an item is missing from your
            order, please contact us with your order details so that we can
            review the issue.
          </p>
        </>
      ),
    },

    {
      id: "payment-issues",
      title: "Payment Issues",
      preview:
        "What to do if payment is deducted but your order is not successfully created.",
      content: (
        <>
          <p>
            If an amount has been deducted from your account but the order was
            not successfully created, please contact us with the relevant
            payment or transaction details.
          </p>

          <p>
            Payment-related issues may also be subject to verification with our
            payment gateway provider.
          </p>
        </>
      ),
    },

    {
      id: "contact",
      title: "Contact for Refund or Order Issues",
      preview:
        "Contact Native Crunch for refund, cancellation, damaged product, or payment issues.",
      content: (
        <>
          <p>
            For any refund, cancellation, damaged product, incorrect product, or
            payment-related issue, please contact:
          </p>

          <p>
            <strong>Email:</strong> info@nativecrunch.com
            <br />
            <strong>Phone:</strong> +91 70103 00199
          </p>

          <p>
            Each request will be reviewed based on the circumstances and the
            status of the order.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
    <Navbar />
    <PolicyLayout
      title="Privacy Policy"
      lastUpdated="August 2026"
      sections={sections}
    />
    <Footer />
    </>
  );
};

export default RefundPolicy;
