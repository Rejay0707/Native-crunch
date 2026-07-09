import { useCustomization } from "../../context/CustomizationProvider";

const ReviewSummary = () => {
  const { selectedProducts, recipient } = useCustomization();

  const total = selectedProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="mt-12 space-y-8">

      {/* Products */}

      <div className="rounded-[32px] bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-[#2E1E13]">
          Selected Products
        </h2>

        <div className="mt-8 space-y-6">
          {selectedProducts.map((item) => (
            <div
              key={`${item.id}-${item.weight}`}
              className="flex items-center justify-between border-b border-[#EFE5DB] pb-5"
            >
              <div className="flex items-center gap-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 rounded-2xl bg-[#F8F2EA] object-contain p-2"
                />

                <div>
                  <h3 className="font-semibold text-[#2E1E13]">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-[#7C6658]">
                    {item.weight} × {item.quantity}
                  </p>
                </div>
              </div>

              <p className="text-xl font-bold text-[#C97A34]">
                ₹{item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Recipient */}

      <div className="rounded-[32px] bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-[#2E1E13]">
          Recipient Details
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">
              Recipient Name
            </p>

            <h3 className="mt-1 text-lg font-semibold">
              {recipient.name}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Occasion
            </p>

            <h3 className="mt-1 text-lg font-semibold">
              {recipient.occasion}
            </h3>
          </div>
        </div>

        {recipient.message && (
          <div className="mt-8">
            <p className="text-sm text-gray-500">
              Gift Message
            </p>

            <div className="mt-3 rounded-2xl bg-[#F8F2EA] p-5 italic text-[#5A4637]">
              "{recipient.message}"
            </div>
          </div>
        )}
      </div>

      {/* Total */}

      <div className="rounded-[32px] bg-[#2E1E13] p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/70">
              Estimated Total
            </p>

            <h2 className="mt-2 text-5xl font-bold">
              ₹{total}
            </h2>
          </div>

          <div className="text-right">
            <p>
              {selectedProducts.length} Product
              {selectedProducts.length > 1 && "s"}
            </p>

            <p className="mt-2 text-sm text-white/60">
              Ready for Checkout
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ReviewSummary;