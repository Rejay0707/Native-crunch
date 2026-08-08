import { useNavigate } from "react-router-dom";

const OrderCard = ({ order }) => {
  const navigate = useNavigate();

  const itemCount = order.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const orderDate = order.orderDate
    ? new Date(order.orderDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "Date not available";

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-[#E9DED2] pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-[#6A5B4E]">Order ID</p>

          <p className="mt-1 font-semibold text-[#C97A34]">#{order.id}</p>
        </div>

        <div className="sm:text-right">
          <p className="text-sm text-[#6A5B4E]">Order Date</p>

          <p className="mt-1 font-medium text-[#2E1E13]">{orderDate}</p>
        </div>
      </div>

      {/* Order Information */}
      <div className="mt-5">
        {order.items.map((item) => (
          <div
            key={`${item.id}-${item.weight}`}
            className="flex items-center justify-between gap-4"
          >
            <div>
              <p className="font-semibold text-[#2E1E13]">{item.name}</p>

              <p className="mt-1 text-sm text-[#6A5B4E]">
                {item.weight} × {item.quantity}
              </p>
            </div>

            <p className="font-semibold text-[#2E1E13]">
              ₹{item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Information */}
      <div className="mt-6 flex flex-col gap-4 border-t border-[#E9DED2] pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="rounded-full bg-[#EAF4E6] px-4 py-2 text-sm font-semibold text-[#3F8C4F]">
            {order.status}
          </span>

          <p className="mt-3 text-sm text-[#6A5B4E]">
            {itemCount} {itemCount === 1 ? "item" : "items"} ·{" "}
            <span className="font-semibold text-[#2E1E13]">₹{order.total}</span>
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate(`/orders/${order.id}`)}
          className="
            cursor-pointer
            rounded-full
            bg-[#C97A34]
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-[#B66E2F]
          "
        >
          Track Order
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
