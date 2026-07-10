const GiftPreviewCard = ({ recipient }) => {
  return (
    <div className="rounded-[32px] overflow-hidden bg-white shadow-xl border border-[#E8DED3]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#C97A34] to-[#8B5E3C] p-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-white/80">
          Native Crunch
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          {recipient.occasion || "Your Special Gift"}
        </h2>
      </div>

      {/* Body */}
      <div className="p-10 bg-[#FCFAF8]">
        {/* Photo Placeholder */}
        <div className="mb-8 flex justify-center">
          {recipient.photo ? (
            <img
              src={recipient.photo}
              alt="Recipient"
              className="h-40 w-40 rounded-full object-cover border-4 border-white shadow-lg"
            />
          ) : (
            <div className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-dashed border-[#D8C5B4] bg-white text-sm text-gray-400">
              No Photo
            </div>
          )}
        </div>

        <h3 className="text-center text-3xl font-bold text-[#2E1E13]">
          Dear {recipient.name},
        </h3>

        {recipient.message ? (
          <p className="mx-auto mt-8 max-w-xl text-center text-lg leading-9 text-[#5A4637] italic">
            "{recipient.message}"
          </p>
        ) : (
          <p className="mx-auto mt-8 max-w-xl text-center text-[#8B7A6C] italic">
            No personal message added.
          </p>
        )}

        <div className="mt-14 border-t border-[#E6D9CB] pt-8 text-center">
          <p className="text-lg font-semibold text-[#2E1E13]">
            Crafted with ❤️ by Native Crunch
          </p>

          <p className="mt-2 text-[#7C6658]">
            Healthy. Natural. Made with Love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GiftPreviewCard;
