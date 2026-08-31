import PolicyLayout from "../../components/policies/PolicyLayout";

const ShippingPolicy = () => {
  const sections = [
    {
      id: "order-processing",
      title: "Order Processing",
      preview:
        "How orders are processed after successful order confirmation and payment verification.",
      content: (
        <>
          <p>
            Orders are processed after successful order confirmation and payment
            verification.
          </p>

          <p>
            Processing time may vary depending on product availability, order
            volume, and other operational factors.
          </p>
        </>
      ),
    },

    {
      id: "delivery",
      title: "Delivery",
      preview:
        "Information about delivery addresses and customer responsibilities.",
      content: (
        <>
          <p>
            Orders are delivered to the shipping address provided by the
            customer during checkout.
          </p>

          <p>
            Customers are responsible for providing a complete and accurate
            delivery address and contact information.
          </p>
        </>
      ),
    },

    {
      id: "delivery-time",
      title: "Delivery Time",
      preview:
        "Estimated delivery timelines and factors that may affect delivery.",
      content: (
        <>
          <p>
            Estimated delivery times may vary depending on the destination,
            courier availability, weather, public holidays, and other
            circumstances beyond our control.
          </p>

          <p>
            Any delivery timeline displayed during checkout or communicated to
            the customer is an estimate and may be subject to change.
          </p>
        </>
      ),
    },

    {
      id: "delivery-delays",
      title: "Delivery Delays",
      preview:
        "Possible reasons for delivery delays and how Native Crunch can assist.",
      content: (
        <>
          <p>
            Delays may occur because of courier operations, weather conditions,
            public holidays, incorrect address information, or other unforeseen
            circumstances.
          </p>

          <p>
            Native Crunch will make reasonable efforts to assist customers when
            delivery issues occur.
          </p>
        </>
      ),
    },

    {
      id: "incorrect-address",
      title: "Incorrect Address",
      preview:
        "Customer responsibility for providing accurate delivery information.",
      content: (
        <>
          <p>
            Customers are responsible for entering the correct delivery address
            during checkout.
          </p>

          <p>
            Delays or additional delivery issues caused by incorrect or
            incomplete address information may not be the responsibility of
            Native Crunch.
          </p>
        </>
      ),
    },

    {
      id: "contact-us",
      title: "Contact Us",
      preview:
        "Contact Native Crunch for questions regarding shipping or delivery.",
      content: (
        <>
          <p>For questions regarding shipping or delivery, please contact:</p>

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
      title="Shipping & Delivery"
      lastUpdated="August 2026"
      sections={sections}
    />
  );
};

export default ShippingPolicy;
