import PolicyLayout from "../../components/policies/PolicyLayout";

const TermsAndConditionsPage = () => {
  const sections = [
    {
      id: "about-native-crunch",
      title: "About Native Crunch",
      preview:
        "Information about Native Crunch and the products and services provided through our online store.",
      content: (
        <>
          <p>
            Native Crunch provides food and snack products through its online
            store. Product descriptions, ingredients, prices, availability, and
            other information are provided for customers to make informed
            purchasing decisions.
          </p>
        </>
      ),
    },

    {
      id: "account-registration",
      title: "Account Registration",
      preview:
        "Your responsibilities when creating and maintaining an account on our website.",
      content: (
        <>
          <p>
            Certain features of our website may require you to create an
            account. You are responsible for providing accurate information and
            keeping your account credentials secure.
          </p>
        </>
      ),
    },

    {
      id: "products-pricing",
      title: "Products and Pricing",
      preview:
        "Information about product descriptions, photographs, prices, and availability.",
      content: (
        <>
          <p>
            We make reasonable efforts to ensure that product descriptions,
            photographs, prices, and availability displayed on the website are
            accurate.
          </p>

          <p>
            Prices and product availability may change without prior notice.
          </p>
        </>
      ),
    },

    {
      id: "orders",
      title: "Orders",
      preview:
        "How orders are placed, accepted, and processed through our website.",
      content: (
        <>
          <p>
            Placing an order on the website constitutes a request to purchase
            the selected products. An order may be accepted or declined
            depending on product availability, payment status, delivery
            considerations, or other operational reasons.
          </p>
        </>
      ),
    },

    {
      id: "payments",
      title: "Payments",
      preview:
        "Information about payment processing and your responsibilities when making a payment.",
      content: (
        <>
          <p>
            Payments are processed through the payment gateway available on our
            website. Customers are responsible for providing accurate payment
            information and completing the payment process.
          </p>
        </>
      ),
    },

    {
      id: "food-products",
      title: "Food Products",
      preview:
        "Important information about Native Crunch food products, ingredients, and allergens.",
      content: (
        <>
          <p>
            Native Crunch products are food items intended for consumption.
            Customers should review the product information, ingredients, and
            applicable allergen information before placing an order.
          </p>
        </>
      ),
    },

    {
      id: "order-cancellation",
      title: "Order Cancellation",
      preview:
        "Information about cancelling an order and when cancellation requests may be accepted.",
      content: (
        <>
          <p>
            Orders may not be cancelled once they have been processed or
            dispatched. If you need to request a cancellation, please contact us
            as soon as possible. Cancellation requests are subject to the status
            of the order.
          </p>
        </>
      ),
    },

    {
      id: "delivery",
      title: "Delivery",
      preview:
        "Information about delivery timelines and factors that may affect delivery.",
      content: (
        <>
          <p>
            Delivery timelines may vary depending on the delivery location,
            availability, logistics, and other circumstances. Please refer to
            our Shipping & Delivery Policy for additional information.
          </p>
        </>
      ),
    },

    {
      id: "intellectual-property",
      title: "Intellectual Property",
      preview:
        "Information about ownership and permitted use of website content and branding.",
      content: (
        <>
          <p>
            The content of this website, including text, images, logos,
            graphics, product information, and branding, belongs to Native
            Crunch or its respective content owners and may not be reproduced
            without permission.
          </p>
        </>
      ),
    },

    {
      id: "changes-to-terms",
      title: "Changes to These Terms",
      preview:
        "How Native Crunch may update these Terms & Conditions in the future.",
      content: (
        <>
          <p>
            Native Crunch may update these Terms & Conditions from time to time.
            Any updated version will be published on this page.
          </p>
        </>
      ),
    },

    {
      id: "contact-us",
      title: "Contact Us",
      preview:
        "How to contact Native Crunch regarding these Terms & Conditions.",
      content: (
        <>
          <p>
            For questions regarding these Terms & Conditions, please contact us:
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
      title="Terms & Conditions"
      lastUpdated="August 2026"
      sections={sections}
    />
  );
};

export default TermsAndConditionsPage;
