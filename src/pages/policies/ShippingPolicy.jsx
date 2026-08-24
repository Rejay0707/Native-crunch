import PolicyLayout from "../../components/policies/PolicyLayout";

const ShippingPolicy = () => {
  return (
    <PolicyLayout
      title="Shipping & Delivery"
      lastUpdated="August 2026"
    >
      <h2>Shipping & Delivery Policy</h2>

      <p>
        Native Crunch aims to process and deliver customer orders safely and
        efficiently. This policy explains how orders are handled after
        successful payment and order confirmation.
      </p>

      <h2>1. Order Processing</h2>

      <p>
        Orders are processed after successful order confirmation and payment
        verification.
      </p>

      <p>
        Processing time may vary depending on product availability, order
        volume, and other operational factors.
      </p>

      <h2>2. Delivery</h2>

      <p>
        Orders are delivered to the shipping address provided by the customer
        during checkout.
      </p>

      <p>
        Customers are responsible for providing a complete and accurate
        delivery address and contact information.
      </p>

      <h2>3. Delivery Time</h2>

      <p>
        Estimated delivery times may vary depending on the destination,
        courier availability, weather, public holidays, and other
        circumstances beyond our control.
      </p>

      <p>
        Any delivery timeline displayed during checkout or communicated to the
        customer is an estimate and may be subject to change.
      </p>

      <h2>4. Delivery Delays</h2>

      <p>
        Delays may occur because of courier operations, weather conditions,
        public holidays, incorrect address information, or other unforeseen
        circumstances.
      </p>

      <p>
        Native Crunch will make reasonable efforts to assist customers when
        delivery issues occur.
      </p>

      <h2>5. Incorrect Address</h2>

      <p>
        Customers are responsible for entering the correct delivery address
        during checkout. Delays or additional delivery issues caused by
        incorrect or incomplete address information may not be the
        responsibility of Native Crunch.
      </p>

      <h2>6. Contact Us</h2>

      <p>
        For questions regarding shipping or delivery, please contact:
      </p>

      <p>
        <strong>Email:</strong> info@nativecrunch.com
        <br />
        <strong>Phone:</strong> +91 70103 00199
      </p>
    </PolicyLayout>
  );
};

export default ShippingPolicy;