const OrderTracking = ({ status }) => {
  /*
   * ============================================================
   * ORDER STATUS STEPS
   * ============================================================
   *
   * These values must match the backend order.status values.
   */
  const steps = [
    {
      status: "pending",
      title: "Order Placed",
      description:
        "Your order has been received successfully.",
    },
    {
      status: "processing",
      title: "Processing",
      description:
        "Your order is being prepared.",
    },
    {
      status: "shipped",
      title: "Shipped",
      description:
        "Your order has been handed over to the courier.",
    },
    {
      status: "delivered",
      title: "Delivered",
      description:
        "Your order has been delivered successfully.",
    },
  ];

  /*
   * ============================================================
   * CANCELLED ORDER
   * ============================================================
   *
   * Cancelled is not part of the normal delivery flow.
   */
  if (status === "cancelled") {
    return (
      <div className="rounded-3xl bg-white p-6 shadow-lg md:p-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-[#2E1E13]">
            Order Status
          </h2>

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold capitalize text-red-600">
            Cancelled
          </span>
        </div>

        <div className="mt-10 rounded-2xl bg-red-50 p-5">
          <h3 className="font-semibold text-red-700">
            Order Cancelled
          </h3>

          <p className="mt-1 text-sm text-red-600">
            This order has been cancelled and will not be
            delivered.
          </p>
        </div>
      </div>
    );
  }

  /*
   * ============================================================
   * CURRENT STEP
   * ============================================================
   *
   * Example:
   *
   * status = "shipped"
   *
   * currentIndex = 2
   */
  const currentIndex = steps.findIndex(
    (step) => step.status === status
  );

  /*
   * If the backend sends an unexpected status, don't break
   * the UI. Show the first state as the fallback.
   */
  const safeCurrentIndex =
    currentIndex >= 0 ? currentIndex : 0;

  const currentStep = steps[safeCurrentIndex];

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-[#2E1E13]">
          Order Status
        </h2>

        <span className="rounded-full bg-[#EAF4E6] px-4 py-2 text-sm font-semibold text-[#3F8C4F]">
          {currentStep.title}
        </span>
      </div>

      {/* Timeline */}
      <div className="mt-10">
        {steps.map((step, index) => {
          const completed = index <= safeCurrentIndex;
          const isCurrent = index === safeCurrentIndex;

          return (
            <div
              key={step.status}
              className="relative flex gap-4"
            >
              {/* Vertical Line */}
              {index !== steps.length - 1 && (
                <div
                  className={`absolute left-[15px] top-8 h-full w-[2px] ${
                    index < safeCurrentIndex
                      ? "bg-[#C97A34]"
                      : "bg-[#E7D8CA]"
                  }`}
                />
              )}

              {/* Circle */}
              <div
                className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ${
                  completed
                    ? "border-[#C97A34] bg-[#C97A34] text-white"
                    : "border-[#D9C8B8] bg-white text-[#A89685]"
                }`}
              >
                {completed ? "✓" : ""}
              </div>

              {/* Step Content */}
              <div className="pb-10">
                <h3
                  className={`font-semibold ${
                    completed
                      ? "text-[#2E1E13]"
                      : "text-[#9A8B7B]"
                  }`}
                >
                  {step.title}

                  {isCurrent && (
                    <span className="ml-2 text-xs font-medium text-[#C97A34]">
                      Current
                    </span>
                  )}
                </h3>

                <p className="mt-1 text-sm text-[#6A5B4E]">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTracking;
