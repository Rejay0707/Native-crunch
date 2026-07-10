import { User, Gift, MessageSquare } from "lucide-react";
import RecipientPhotoUpload from "./RecipientPhotoUpload";

const RecipientForm = ({ recipient, setRecipient, errors }) => {
  return (
    <div className="rounded-[32px] bg-white p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-[#2E1E13]">
        Recipient Information
      </h2>

      <p className="mt-2 text-[#5A4637]">Tell us who this gift is for.</p>

      {/* Recipient Name */}

      <div className="mt-8">
        <label className="mb-2 flex items-center gap-2 font-semibold text-[#2E1E13]">
          <User size={18} />
          Recipient Name <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          placeholder="Enter recipient name"
          value={recipient.name}
          onChange={(e) =>
            setRecipient({
              ...recipient,
              name: e.target.value,
            })
          }
          className={`w-full rounded-2xl bg-[#FCFAF8] px-5 py-4 outline-none transition
          ${
            errors?.name
              ? "border-2 border-red-500"
              : "border border-[#E6D9CB] focus:border-[#C97A34]"
          }`}
        />

        {errors?.name && (
          <p className="mt-2 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Occasion */}

      <div className="mt-6">
        <label className="mb-2 flex items-center gap-2 font-semibold text-[#2E1E13]">
          <Gift size={18} />
          Occasion <span className="text-red-500">*</span>
        </label>

        <select
          value={recipient.occasion}
          onChange={(e) =>
            setRecipient({
              ...recipient,
              occasion: e.target.value,
            })
          }
          className={`w-full rounded-2xl bg-[#FCFAF8] px-5 py-4 outline-none transition
          ${
            errors?.occasion
              ? "border-2 border-red-500"
              : "border border-[#E6D9CB] focus:border-[#C97A34]"
          }`}
        >
          <option value="">Select Occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Wedding</option>
          <option>Festival</option>
          <option>Congratulations</option>
          <option>Thank You</option>
          <option>Corporate Gift</option>
          <option>Other</option>
        </select>

        {errors?.occasion && (
          <p className="mt-2 text-sm text-red-500">{errors.occasion}</p>
        )}
      </div>

      {/* Message */}

      <div className="mt-6">
        <label className="mb-2 flex items-center gap-2 font-semibold text-[#2E1E13]">
          <MessageSquare size={18} />
          Gift Message
          <span className="text-sm font-normal text-gray-400">(Optional)</span>
        </label>

        <textarea
          rows={6}
          placeholder="Write a heartfelt message..."
          value={recipient.message}
          onChange={(e) =>
            setRecipient({
              ...recipient,
              message: e.target.value,
            })
          }
          className="w-full resize-none rounded-2xl border border-[#E6D9CB] bg-[#FCFAF8] px-5 py-4 outline-none transition focus:border-[#C97A34]"
        />
      </div>

      {/* Photo Upload */}

      <RecipientPhotoUpload recipient={recipient} setRecipient={setRecipient} />
    </div>
  );
};

export default RecipientForm;
