const CheckoutForm = ({ register, errors, handleSubmit, onSubmit }) => {
  return (
    <form
      id="checkout-form"
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl bg-white p-8 shadow-lg"
    >
      <h2 className="mb-8 text-3xl font-bold text-[#2E1E13]">
        Shipping Details
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Full Name */}
        <div>
          <input
            {...register("fullName", {
              required: "Full Name is required",
            })}
            placeholder="Full Name"
            className="w-full rounded-xl border p-3"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <input
            {...register("mobile", {
              required: "Mobile Number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Enter a valid mobile number",
              },
            })}
            placeholder="Mobile Number"
            className="w-full rounded-xl border p-3"
          />
          {errors.mobile && (
            <p className="mt-1 text-sm text-red-500">{errors.mobile.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="md:col-span-2">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            })}
            placeholder="Email"
            className="w-full rounded-xl border p-3"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <textarea
            rows={4}
            {...register("address", {
              required: "Address is required",
            })}
            placeholder="Address"
            className="w-full rounded-xl border p-3"
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-500">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* Landmark */}
        <div>
          <input
            {...register("landmark")}
            placeholder="Landmark"
            className="w-full rounded-xl border p-3"
          />
        </div>

        {/* City */}
        <div>
          <input
            {...register("city", {
              required: "City is required",
            })}
            placeholder="City"
            className="w-full rounded-xl border p-3"
          />
          {errors.city && (
            <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
          )}
        </div>

        {/* State */}
        <div>
          <input
            {...register("state", {
              required: "State is required",
            })}
            placeholder="State"
            className="w-full rounded-xl border p-3"
          />
          {errors.state && (
            <p className="mt-1 text-sm text-red-500">{errors.state.message}</p>
          )}
        </div>

        {/* Pincode */}
        <div>
          <input
            {...register("pincode", {
              required: "Pincode is required",
              pattern: {
                value: /^\d{6}$/,
                message: "Enter a valid pincode",
              },
            })}
            placeholder="Pincode"
            className="w-full rounded-xl border p-3"
          />
          {errors.pincode && (
            <p className="mt-1 text-sm text-red-500">
              {errors.pincode.message}
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
