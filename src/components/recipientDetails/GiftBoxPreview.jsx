import { useCustomization } from "../../context/CustomizationProvider";
import logo from "../../assets/logo (2).png";

const GiftBoxPreview = () => {
  const { recipient } = useCustomization();

  return (
    <div className="sticky top-28">
      <div className="rounded-[34px] border border-[#E9DED2] bg-white p-8 shadow-2xl">
        <h3 className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-[#8A5A32]">
          Live Preview
        </h3>

        <p className="mt-2 text-center text-[#7A6658]">
          Your personalized gift box updates instantly.
        </p>

        <div className="mt-8 flex justify-center">
          <div
            className="
              relative
              h-[500px]
              w-[380px]
              overflow-hidden
              rounded-2xl
              border
              border-[#C9A57C]
              bg-[#DFC29A]
              shadow-[0_25px_60px_rgba(0,0,0,0.22)]
            "
          >
            {/* Kraft Texture */}
            <div
              className="
                absolute
                inset-0
                opacity-[0.06]
                bg-[radial-gradient(circle,#7A5B3E_1px,transparent_1px)]
                [background-size:14px_14px]
              "
            />

            {/* Background */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-[#E8D1AE]
                via-[#DFC29A]
                to-[#D3AF84]
              "
            />

            {/* Inner Shadow */}
            <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_45px_rgba(0,0,0,0.12)]" />

            <div className="relative z-10 flex h-full flex-col p-8">
              {/* Top */}
              <div className="flex items-start justify-between">
                {/* Logo */}
                {/* Logo */}
                <div className="flex items-start gap-3">
                  <img
                    src={logo}
                    alt="Native Crunch Logo"
                    className="h-12 w-12 object-contain"
                  />

                  <div>
                    <h1
                      className="text-[34px] leading-none tracking-[0.05em] text-[#472614]"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                      }}
                    >
                      NATIVE
                    </h1>

                    <h1
                      className="-mt-2 text-[34px] leading-none tracking-[0.05em] text-[#472614]"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                      }}
                    >
                      CRUNCH
                    </h1>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#7A5635]">
                      Personalized Edition
                    </p>
                  </div>
                </div>

                {/* Photo */}
                {recipient.photo && (
                  <div className="-mt-0 ml-6 h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-xl">
                    <img
                      src={recipient.photo}
                      alt={recipient.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="mt-8 h-px w-full bg-[#B48559]" />

              {/* Name */}
              <div className="mt-8">
                <h2
                  className="text-[30px] font-bold uppercase text-[#3A200F]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {recipient.name || "Recipient Name"}
                </h2>

                <p
                  className="mt-2 text-[28px] text-[#8A5A32]"
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                  }}
                >
                  {recipient.occasion || "Occasion"}
                </p>
              </div>

              {/* Heart Divider */}
              <div className="mt-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-[#B48559]" />

                <span className="text-xl text-[#8A5A32]">♥</span>

                <div className="h-px flex-1 bg-[#B48559]" />
              </div>

              {/* Message */}
              {recipient.message && (
                <div className="mt-6">
                  <p
                    className="text-[17px] italic leading-8 text-[#3D281B]"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    "{recipient.message}"
                  </p>
                </div>
              )}

              {/* Empty space like real packaging */}
              <div className="flex-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftBoxPreview;
