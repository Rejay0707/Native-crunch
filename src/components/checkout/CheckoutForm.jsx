import { useEffect, useState } from "react";

const CheckoutForm = ({
  register,
  errors,
  handleSubmit,
  onSubmit,
  watch,
  setValue,
}) => {
  const [pincodeStatus, setPincodeStatus] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [pincodeData, setPincodeData] = useState([]);

  const pincode = watch("pincode");

  // --------------------------------------------------
  // Normalize values
  // --------------------------------------------------
  const normalizeValue = (value) => {
    return value
      ?.toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/[^\w\s-]/g, "");
  };

  // --------------------------------------------------
  // Pincode API + Automatic City/State Fill
  // --------------------------------------------------
  useEffect(() => {
    const validatePincode = async () => {
      // Reset when pincode is empty or incomplete
      if (!pincode || pincode.length !== 6) {
        setPincodeStatus("");
        setPincodeError("");
        setPincodeData([]);

        // Clear automatically filled fields
        setValue("city", "");
        setValue("state", "");

        return;
      }

      setPincodeStatus("checking");
      setPincodeError("");
      setPincodeData([]);

      try {
        const response = await fetch(
          `https://api.postalpincode.in/pincode/${pincode}`,
        );

        if (!response.ok) {
          throw new Error("Failed to check pincode");
        }

        const data = await response.json();

        // --------------------------------------------------
        // Validate API response
        // --------------------------------------------------
        if (
          !Array.isArray(data) ||
          data.length === 0 ||
          data[0].Status !== "Success" ||
          !Array.isArray(data[0].PostOffice) ||
          data[0].PostOffice.length === 0
        ) {
          setPincodeStatus("invalid");
          setPincodeError(
            "Invalid pincode. Please enter a valid 6-digit pincode.",
          );

          setValue("city", "");
          setValue("state", "");

          return;
        }

        // --------------------------------------------------
        // Store postal data
        // --------------------------------------------------
        const postOffices = data[0].PostOffice;

        setPincodeData(postOffices);

        // --------------------------------------------------
        // Get first valid postal office
        // --------------------------------------------------
        const firstOffice = postOffices[0];

        const apiState = firstOffice?.State?.trim() || "";

        // Postal API can provide District and Name.
        // District is preferred for City.
        const apiCity =
          firstOffice?.District?.trim() || firstOffice?.Name?.trim() || "";

        // --------------------------------------------------
        // Automatically fill City
        // --------------------------------------------------
        if (apiCity) {
          setValue("city", apiCity, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }

        // --------------------------------------------------
        // Automatically fill State
        // --------------------------------------------------
        if (apiState) {
          setValue("state", apiState, {
            shouldValidate: true,
            shouldDirty: true,
          });
        }

        setPincodeStatus("valid");
        setPincodeError("");
      } catch (error) {
        console.error("Pincode validation error:", error);

        setPincodeStatus("error");
        setPincodeError(
          "Unable to verify pincode right now. Please try again.",
        );

        setValue("city", "");
        setValue("state", "");
      }
    };

    validatePincode();
  }, [pincode, setValue]);

  // --------------------------------------------------
  // Submit
  // --------------------------------------------------
  const handleFormSubmit = (data) => {
    // Pincode is still being checked
    if (pincodeStatus === "checking") {
      setPincodeError("Please wait while we verify the pincode.");
      return;
    }

    // Invalid pincode
    if (pincodeStatus === "invalid") {
      setPincodeError("Please enter a valid 6-digit pincode.");
      return;
    }

    // API error
    if (pincodeStatus === "error") {
      setPincodeError("Unable to verify the pincode. Please try again.");
      return;
    }

    // Pincode hasn't been verified
    if (pincodeStatus !== "valid") {
      setPincodeError("Please enter a valid pincode.");
      return;
    }

    // Make sure city/state were actually received
    if (!data.city || !data.state) {
      setPincodeError("Unable to get the city and state for this pincode.");
      return;
    }

    onSubmit(data);
  };

  return (
    <form
      id="checkout-form"
      onSubmit={handleSubmit(handleFormSubmit)}
      className="rounded-3xl bg-white p-8 shadow-lg"
    >
      <h2 className="mb-8 text-3xl font-bold text-[#2E1E13]">
        Shipping Details
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {/* --------------------------------------------- */}
        {/* Full Name */}
        {/* --------------------------------------------- */}
        <div>
          <input
            type="text"
            {...register("fullName", {
              required: "Full Name is required",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Full Name should contain letters only",
              },
            })}
            placeholder="Full Name"
            className="w-full rounded-xl border p-3"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
            }}
          />

          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* --------------------------------------------- */}
        {/* Mobile */}
        {/* --------------------------------------------- */}
        <div>
          <input
            type="tel"
            inputMode="numeric"
            maxLength={10}
            {...register("mobile", {
              required: "Mobile Number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Enter a valid 10-digit mobile number",
              },
            })}
            placeholder="Mobile Number"
            className="w-full rounded-xl border p-3"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
            }}
          />

          {errors.mobile && (
            <p className="mt-1 text-sm text-red-500">{errors.mobile.message}</p>
          )}
        </div>

        {/* --------------------------------------------- */}
        {/* Email */}
        {/* --------------------------------------------- */}
        <div className="md:col-span-2">
          <input
            type="email"
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

        {/* --------------------------------------------- */}
        {/* Address */}
        {/* --------------------------------------------- */}
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

        {/* --------------------------------------------- */}
        {/* Landmark */}
        {/* --------------------------------------------- */}
        <div>
          <input
            type="text"
            {...register("landmark", {
              pattern: {
                value: /^[A-Za-z0-9\s.,/-]+$/,
                message: "Enter a valid landmark",
              },
            })}
            placeholder="Landmark"
            className="w-full rounded-xl border p-3"
            onInput={(e) => {
              e.target.value = e.target.value.replace(
                /[^A-Za-z0-9\s.,/-]/g,
                "",
              );
            }}
          />

          {errors.landmark && (
            <p className="mt-1 text-sm text-red-500">
              {errors.landmark.message}
            </p>
          )}
        </div>

        {/* --------------------------------------------- */}
        {/* Pincode */}
        {/* --------------------------------------------- */}
        <div>
          <input
            type="text"
            inputMode="numeric"
            maxLength={6}
            {...register("pincode", {
              required: "Pincode is required",
              pattern: {
                value: /^\d{6}$/,
                message: "Enter a valid 6-digit pincode",
              },
            })}
            placeholder="Pincode"
            className="w-full rounded-xl border p-3"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\D/g, "").slice(0, 6);
            }}
          />

          {errors.pincode && (
            <p className="mt-1 text-sm text-red-500">
              {errors.pincode.message}
            </p>
          )}

          {/* Checking */}
          {pincodeStatus === "checking" && (
            <p className="mt-1 text-sm text-gray-500">Checking pincode...</p>
          )}

          {/* Valid */}
          {pincodeStatus === "valid" && (
            <p className="mt-1 text-sm text-green-600">
              ✓ Pincode verified. City and state filled automatically.
            </p>
          )}

          {/* Invalid / Error */}
          {(pincodeStatus === "invalid" || pincodeStatus === "error") && (
            <p className="mt-1 text-sm text-red-500">{pincodeError}</p>
          )}
        </div>

        {/* --------------------------------------------- */}
        {/* City - Automatically Filled */}
        {/* --------------------------------------------- */}
        <div>
          <input
            type="text"
            readOnly
            {...register("city", {
              required: "City is required",
            })}
            placeholder="City"
            className="w-full rounded-xl border bg-gray-50 p-3 text-gray-700"
          />

          {errors.city && (
            <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
          )}
        </div>

        {/* --------------------------------------------- */}
        {/* State - Automatically Filled */}
        {/* --------------------------------------------- */}
        <div>
          <input
            type="text"
            readOnly
            {...register("state", {
              required: "State is required",
            })}
            placeholder="State"
            className="w-full rounded-xl border bg-gray-50 p-3 text-gray-700"
          />

          {errors.state && (
            <p className="mt-1 text-sm text-red-500">{errors.state.message}</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
