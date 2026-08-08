const OrderTracking = ({ tracking }) => {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#2E1E13]">Order Status</h2>

        <span className="rounded-full bg-[#EAF4E6] px-4 py-2 text-sm font-semibold text-[#3F8C4F]">
          {tracking.find((item) => item.completed)?.title}
        </span>
      </div>

      <div className="mt-10">
        {tracking.map((step, index) => (
          <div key={step.title} className="relative flex gap-4">
            {/* Vertical Line */}
            {index !== tracking.length - 1 && (
              <div
                className={`absolute left-[15px] top-8 h-full w-[2px] ${
                  step.completed ? "bg-[#C97A34]" : "bg-[#E7D8CA]"
                }`}
              />
            )}

            {/* Circle */}
            <div
              className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ${
                step.completed
                  ? "border-[#C97A34] bg-[#C97A34] text-white"
                  : "border-[#D9C8B8] bg-white text-[#A89685]"
              }`}
            >
              {step.completed && "✓"}
            </div>

            {/* Text */}
            <div className="pb-10">
              <h3
                className={`font-semibold ${
                  step.completed ? "text-[#2E1E13]" : "text-[#9A8B7B]"
                }`}
              >
                {step.title}
              </h3>

              <p className="mt-1 text-sm text-[#6A5B4E]">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTracking;
