import { useCustomization } from "../../context/CustomizationProvider";

const GiftBoxPreview = () => {
  const { recipient } = useCustomization();

  return (
    <div className="sticky top-28">

      <div className="rounded-[34px] border border-[#E9DED2] bg-white p-8 shadow-2xl">

        <h3 className="text-center text-sm font-semibold tracking-[0.35em] text-[#8A5A32] uppercase">
          Live Preview
        </h3>

        <p className="mt-2 text-center text-[#7A6658]">
          Your personalized gift box updates instantly.
        </p>

        <div className="mt-8 flex justify-center">

          <div
            className="
            relative
            h-[650px]
            w-[430px]
            overflow-hidden
            rounded-xl
            border
            border-[#C9A57C]
            bg-[#DFC29A]
            shadow-[0_30px_70px_rgba(0,0,0,0.25)]
          "
          >

            {/* Kraft paper texture */}

            <div
              className="
                absolute
                inset-0
                opacity-[0.06]
                bg-[radial-gradient(circle,#7A5B3E_1px,transparent_1px)]
                [background-size:14px_14px]
              "
            />

            {/* Light center */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-[#E7CDA9]
                via-[#DFC29A]
                to-[#D2AE83]
              "
            />

            {/* Edge Shadow */}

            <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_50px_rgba(0,0,0,0.12)]" />

            {/* CONTENT */}

            <div className="relative z-10 flex h-full flex-col items-center px-10">

              {/* Logo */}

              <div className="mt-12 text-center">

                <h1
                  className="text-[58px] leading-none tracking-[0.04em] text-[#4A2813]"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  NATIVE
                </h1>

                <h1
                  className="-mt-3 text-[58px] leading-none tracking-[0.04em] text-[#4A2813]"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  CRUNCH
                </h1>

                <p className="mt-4 text-xs uppercase tracking-[0.35em] text-[#7A5635]">
                  Premium Personalized Gift
                </p>

              </div>

              {/* Divider */}

              <div className="mt-6 h-px w-24 bg-[#A7784F]" />

              {/* Photo */}

              <div className="mt-8">

                <div className="relative">

                  <div className="absolute inset-0 rounded-full blur-xl bg-white/30" />

                  <div className="relative h-44 w-44 overflow-hidden rounded-full border-[6px] border-white shadow-2xl">

                    {recipient.photo ? (
                      <img
                        src={recipient.photo}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[#CFA67D] text-white">
                        Photo
                      </div>
                    )}

                  </div>

                </div>

              </div>

              {/* Name */}

              <h2
                className="mt-8 text-center text-[34px] font-bold uppercase text-[#3A200F]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {recipient.name || "Recipient Name"}
              </h2>

              {/* Occasion */}

              <p
                className="mt-2 text-[34px] text-[#8A5A32]"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                }}
              >
                {recipient.occasion || "Occasion"}
              </p>

              {/* Divider */}

              <div className="mt-6 flex w-full items-center gap-4">

                <div className="h-px flex-1 bg-[#A7784F]" />

                <span className="text-[#8A5A32] text-xl">
                  ♥
                </span>

                <div className="h-px flex-1 bg-[#A7784F]" />

              </div>

              {/* Message */}

              <div className="mt-8 w-full px-4">

                <p
                  className="text-center text-[18px] leading-9 italic text-[#3D281B]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {recipient.message
                    ? `"${recipient.message}"`
                    : `"Your heartfelt message will appear here."`}
                </p>

              </div>

              {/* Bottom */}

              <div className="mt-auto mb-10 flex flex-col items-center">

                <div className="h-px w-40 bg-[#A7784F]" />

                <p className="mt-5 text-xs uppercase tracking-[0.4em] text-[#6D4728]">
                  Crafted with ❤
                </p>

                <p
                  className="mt-2 text-[24px] text-[#4A2813]"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  Native Crunch
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default GiftBoxPreview;