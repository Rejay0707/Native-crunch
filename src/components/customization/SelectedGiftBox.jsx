import GiftBoxItem from "./GiftBoxItem";

const SelectedGiftBox = ({
  selectedProducts,
  increaseQty,
  decreaseQty,
  removeProduct,
  changeVariant,
}) => {
  if (selectedProducts.length === 0) return null;

  const total = selectedProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  console.log("SelectedGiftBox rendered", selectedProducts);

  return (
    <section className="mt-20">
      <div className="mb-10">
        <p className="font-semibold uppercase tracking-[0.2em] text-[#C97A34]">
          Step 02
        </p>

        <h2 className="mt-3 text-4xl font-bold text-[#2E1E13]">
          Your Gift Box
        </h2>

        <p className="mt-3 text-[#5A4637]">
          Review your selected products before continuing.
        </p>
      </div>

      <div className="space-y-6">
        {selectedProducts.map((item) => (
          <GiftBoxItem
            key={item.id}
            item={item}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            removeProduct={removeProduct}
            changeVariant={changeVariant}
          />
        ))}
      </div>

      <div className="mt-8 rounded-3xl bg-[#2E1E13] p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg text-white/70">Estimated Total</p>

            <h3 className="mt-2 text-4xl font-bold">₹{total}</h3>
          </div>

          <div className="text-right">
            <p className="text-white/70">{selectedProducts.length} Products</p>

            <p className="mt-2 text-sm text-white/60">
              Shipping calculated later
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedGiftBox;
