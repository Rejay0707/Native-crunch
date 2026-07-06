import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";

const CartDrawer = () => {
  const { cart, setCart, isCartOpen, setIsCartOpen } = useCart();

  const changeVariant = (id, oldWeight, newWeight) => {
    setCart((prev) => {
      const currentItem = prev.find(
        (item) => item.id === id && item.weight === oldWeight,
      );

      if (!currentItem) return prev;

      const newVariant = currentItem.variants.find(
        (v) => v.weight === newWeight,
      );

      // If same product with selected weight already exists, merge quantities
      const existing = prev.find(
        (item) =>
          item.id === id &&
          item.weight === newWeight &&
          item.weight !== oldWeight,
      );

      if (existing) {
        return prev
          .filter(
            (item) =>
              !(
                item.id === id &&
                (item.weight === oldWeight || item.weight === newWeight)
              ),
          )
          .concat({
            ...existing,
            quantity: existing.quantity + currentItem.quantity,
          });
      }

      return prev.map((item) =>
        item.id === id && item.weight === oldWeight
          ? {
              ...item,
              weight: newVariant.weight,
              price: newVariant.price,
            }
          : item,
      );
    });
  };

  const increaseQty = (id, weight) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.weight === weight
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decreaseQty = (id, weight) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.weight === weight
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id, weight) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.weight === weight)),
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-bold text-[#2E1E13]">Your Cart</h2>

          <button onClick={() => setIsCartOpen(false)}>
            <X />
          </button>
        </div>

        {/* Cart Items */}
        <div className="h-[calc(100%-170px)] overflow-y-auto p-5">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.id}-${item.weight}`}
                className="mb-5 flex gap-4 border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 rounded-lg object-contain bg-[#faf7f2]"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-[#2E1E13]">{item.name}</h3>

                  <select
                    value={item.weight}
                    onChange={(e) =>
                      changeVariant(item.id, item.weight, e.target.value)
                    }
                    className="mt-1 rounded border border-gray-300 px-2 py-1 text-sm"
                  >
                    {item.variants.map((variant) => (
                      <option key={variant.weight} value={variant.weight}>
                        {variant.weight}
                      </option>
                    ))}
                  </select>

                  <p className="font-bold mt-1">₹{item.price}</p>

                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => decreaseQty(item.id, item.weight)}
                      className="rounded border p-1"
                    >
                      <Minus size={16} />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id, item.weight)}
                      className="rounded border p-1"
                    >
                      <Plus size={16} />
                    </button>

                    <button
                      onClick={() => removeItem(item.id, item.weight)}
                      className="ml-auto text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full border-t bg-white p-5">
          <div className="mb-4 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button className="w-full rounded-full bg-[#C97A34] py-3 text-white font-semibold hover:bg-[#b56d2f]">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
