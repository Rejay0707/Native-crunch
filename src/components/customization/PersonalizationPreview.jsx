import wrapperImage from "../../assets/customization/wrapper.png";
// import boxImage from "../../assets/customization/box.png"; // Later

import { ArrowRight } from "lucide-react";
import { useCustomization } from "../../context/CustomizationProvider";

const PersonalizationPreview = ({ onContinue }) => {
  const { customizationType } = useCustomization();

  if (!customizationType) return null;

  const isWrapper = customizationType === "wrapper";

  return (
    <section className="mt-14 rounded-[36px] bg-white p-8 shadow-xl lg:p-12">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Preview */}

        <div className="flex justify-center">
          <div className="overflow-hidden rounded-3xl border border-[#E9DED2] bg-[#F8F2EA] p-6 shadow-lg">
            <img
              src={wrapperImage}
              alt="Customization Preview"
              className="w-full max-w-[420px] object-contain"
            />
          </div>
        </div>

        {/* Content */}

        <div>
          <p className="font-semibold uppercase tracking-[0.25em] text-[#C97A34]">
            Step 02
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#2E1E13]">
            {isWrapper ? "Personalized Wrapper" : "Personalized Gift Box"}
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5A4637]">
            {isWrapper
              ? "Create a beautiful personalized wrapper by adding your recipient's name, photo and heartfelt message. Your design will be printed directly onto the wrapper."
              : "Create a premium personalized gift box with your own photo, recipient details and heartfelt message."}
          </p>

          <div className="mt-10 rounded-2xl bg-[#F8F2EA] p-6">
            <h3 className="font-semibold text-[#2E1E13]">
              What you'll customize
            </h3>

            <ul className="mt-4 space-y-3 text-[#5A4637]">
              <li>✓ Recipient Name</li>
              <li>✓ Occasion</li>
              <li>✓ Personal Photo (Optional)</li>
              <li>✓ Gift Message (Optional)</li>
            </ul>
          </div>

          <button
            onClick={onContinue}
            className="mt-10 flex items-center gap-3 rounded-full bg-[#C97A34] px-8 py-4 font-semibold text-white transition hover:bg-[#B86D2D] cursor-pointer"
          >
            {isWrapper ? "Customize Wrapper" : "Customize Gift Box"}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonalizationPreview;
