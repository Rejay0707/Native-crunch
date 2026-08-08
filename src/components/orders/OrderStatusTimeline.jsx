const OrderStatusTimeline = ({ currentStatus = "Processing" }) => {
  const steps = [
    {
      id: 1,
      title: "Order Placed",
      description: "Your order has been placed successfully",
    },
    {
      id: 2,
      title: "Confirmed",
      description: "Your order has been confirmed",
    },
    {
      id: 3,
      title: "Processing",
      description: "Your order is being prepared",
    },
    {
      id: 4,
      title: "Shipped",
      description: "Your package is on the way",
    },
    {
      id: 5,
      title: "Delivered",
      description: "Your order has been delivered",
    },
  ];

  const currentIndex = steps.findIndex((step) => step.title === currentStatus);

  return (
    <div className="mt-8">
      <h3 className="mb-6 text-xl font-bold text-[#2E1E13]">Order Tracking</h3>

      <div className="space-y-6">
        {steps.map((step, index) => {
          const completed = index <= currentIndex;

          return (
            <div key={step.id} className="flex items-start gap-4">
              {/* Circle */}
              <div
                className={`
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  font-bold
                  ${
                    completed
                      ? "bg-[#C97A34] text-white"
                      : "bg-gray-200 text-gray-500"
                  }
                `}
              >
                {index + 1}
              </div>

              {/* Content */}
              <div>
                <h4
                  className={`
                    font-semibold
                    ${completed ? "text-[#2E1E13]" : "text-gray-400"}
                  `}
                >
                  {step.title}
                </h4>

                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderStatusTimeline;
