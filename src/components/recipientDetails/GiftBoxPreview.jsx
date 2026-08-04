// import { useCustomization } from "../../context/CustomizationProvider";
// import logo from "../../assets/logo (2).png";

// const GiftBoxPreview = () => {
//   const { recipient } = useCustomization();

//   return (
//     <div className="sticky top-28">
//       <div className="rounded-[34px] border border-[#E9DED2] bg-white p-8 shadow-2xl">
//         <h3 className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-[#8A5A32]">
//           Live Preview
//         </h3>

//         <p className="mt-2 text-center text-[#7A6658]">
//           Your personalized gift box updates instantly.
//         </p>

//         <div className="mt-8 flex justify-center">
//           <div
//             className="
//               relative
//               h-[500px]
//               w-[380px]
//               overflow-hidden
//               rounded-2xl
//               border
//               border-[#C9A57C]
//               bg-[#DFC29A]
//               shadow-[0_25px_60px_rgba(0,0,0,0.22)]
//             "
//           >
//             {/* Kraft Texture */}
//             <div
//               className="
//                 absolute
//                 inset-0
//                 opacity-[0.06]
//                 bg-[radial-gradient(circle,#7A5B3E_1px,transparent_1px)]
//                 [background-size:14px_14px]
//               "
//             />

//             {/* Background */}
//             <div
//               className="
//                 absolute
//                 inset-0
//                 bg-gradient-to-b
//                 from-[#E8D1AE]
//                 via-[#DFC29A]
//                 to-[#D3AF84]
//               "
//             />

//             {/* Inner Shadow */}
//             <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_45px_rgba(0,0,0,0.12)]" />

//             <div className="relative z-10 flex h-full flex-col p-8">
//               {/* Top */}
//               <div className="flex items-start justify-between">
//                 {/* Logo */}
//                 {/* Logo */}
//                 <div className="flex items-start gap-3">
//                   <img
//                     src={logo}
//                     alt="Native Crunch Logo"
//                     className="h-12 w-12 object-contain"
//                   />

//                   <div>
//                     <h1
//                       className="text-[34px] leading-none tracking-[0.05em] text-[#472614]"
//                       style={{
//                         fontFamily: "'Bebas Neue', sans-serif",
//                       }}
//                     >
//                       NATIVE
//                     </h1>

//                     <h1
//                       className="-mt-2 text-[34px] leading-none tracking-[0.05em] text-[#472614]"
//                       style={{
//                         fontFamily: "'Bebas Neue', sans-serif",
//                       }}
//                     >
//                       CRUNCH
//                     </h1>

//                     <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#7A5635]">
//                       Personalized Edition
//                     </p>
//                   </div>
//                 </div>

//                 {/* Photo */}
//                 {recipient.photo && (
//                   <div className="-mt-0 ml-6 h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-xl">
//                     <img
//                       src={recipient.photo}
//                       alt={recipient.name}
//                       className="h-full w-full object-cover"
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* Divider */}
//               <div className="mt-8 h-px w-full bg-[#B48559]" />

//               {/* Name */}
//               <div className="mt-8">
//                 <h2
//                   className="text-[30px] font-bold uppercase text-[#3A200F]"
//                   style={{
//                     fontFamily: "'Playfair Display', serif",
//                   }}
//                 >
//                   {recipient.name || "Recipient Name"}
//                 </h2>

//                 <p
//                   className="mt-2 text-[28px] text-[#8A5A32]"
//                   style={{
//                     fontFamily: "'Great Vibes', cursive",
//                   }}
//                 >
//                   {recipient.occasion || "Occasion"}
//                 </p>
//               </div>

//               {/* Heart Divider */}
//               <div className="mt-6 flex items-center gap-4">
//                 <div className="h-px flex-1 bg-[#B48559]" />

//                 <span className="text-xl text-[#8A5A32]">♥</span>

//                 <div className="h-px flex-1 bg-[#B48559]" />
//               </div>

//               {/* Message */}
//               {recipient.message && (
//                 <div className="mt-6">
//                   <p
//                     className="text-[17px] italic leading-8 text-[#3D281B]"
//                     style={{
//                       fontFamily: "'Playfair Display', serif",
//                     }}
//                   >
//                     "{recipient.message}"
//                   </p>
//                 </div>
//               )}

//               {/* Empty space like real packaging */}
//               <div className="flex-1" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GiftBoxPreview;

import { useCustomization } from "../../context/CustomizationProvider";
import logo from "../../assets/logo (2).png";

const GiftBoxPreview = () => {
  const { recipient } = useCustomization();

  return (
    <div
      className="
    sticky
    top-28
    w-full
    w-[340px]
    sm:w-[420px]
    md:w-[560px]
    lg:w-[700px]
    xl:w-[760px]
    mx-auto
  "
    >
      <div className="rounded-[34px] border border-[#E9DED2] bg-white p-6 lg:p-8 shadow-2xl">
        <h3 className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-[#8A5A32]">
          Live Preview
        </h3>

        <p className="mt-2 text-center text-[#7A6658]">
          Your personalized wrapper updates instantly.
        </p>

        <div className="mt-8 flex justify-center">
          <div
            className="
              relative
              h-[430px]
              w-[330px]
              sm:h-[500px]
              sm:w-[390px]
              md:h-[560px]
              md:w-[500px]
              lg:h-[590px]
              lg:w-[680px]
              xl:w-[720px]
              overflow-hidden
              border-[4px]
              border-[#a98a63]
              bg-[#c9a67d]
              shadow-lg
            "
          >
            {/* Kraft Texture */}
            <div
              className="
                absolute
                inset-0
                opacity-[0.05]
                bg-[radial-gradient(circle,#6e4d2f_1px,transparent_1px)]
                [background-size:15px_15px]
              "
            />

            <div className="relative z-10 flex h-full flex-col px-4 py-5 sm:px-6 sm:py-6 md:px-7 md:py-8 lg:px-8 lg:py-9">
              {/* ================= HEADER ================= */}

              <div className="flex items-center">
                <img
                  src={logo}
                  alt="Native Crunch"
                  className="
      h-[48px]
      w-[48px]
      sm:h-[60px]
      sm:w-[60px]
      md:h-[74px]
      md:w-[74px]
      lg:h-[88px]
      lg:w-[88px]
      object-contain
      flex-shrink-0
    "
                />

                <div className="w-3 sm:w-4 md:w-6 lg:w-8" />

                <div className="flex-1 min-w-0">
                  <h1
                    className="
      text-center
      uppercase
      text-black
      text-[22px]
      sm:text-[30px]
      md:text-[40px]
      lg:text-[52px]
      leading-none
    "
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: "0.12em",
                      fontSize:
                        window.innerWidth >= 1024
                          ? (recipient.occasion || "").length > 15
                            ? "38px"
                            : (recipient.occasion || "").length > 10
                              ? "44px"
                              : "52px"
                          : undefined,
                    }}
                  >
                    {recipient.occasion || "Birthday"}
                  </h1>
                </div>
              </div>

              <div className="mt-4 sm:mt-5 lg:mt-6 h-[3px] lg:h-[4px] w-full bg-[#f07a20]" />

              {/* ================= BODY ================= */}

              <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-1 items-start justify-between gap-4 lg:gap-8">
                {/* ================= PHOTO ================= */}

                <div
                  className="
                    h-[190px]
                    w-[120px]
                    sm:h-[250px]
                    sm:w-[150px]
                    md:h-[300px]
                    md:w-[190px]
                    lg:h-[340px]
                    lg:w-[250px]
                    overflow-hidden
                    rounded-[18px]
                    border-[4px]
                    lg:border-[5px]
                    border-[#f07a20]
                    bg-[#d5b18a]
                    flex-shrink-0
                  "
                >
                  {recipient.photo ? (
                    <img
                      src={recipient.photo}
                      alt={recipient.name}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-center text-xs sm:text-sm md:text-base font-medium text-white px-2">
                      Upload Photo
                    </div>
                  )}
                </div>

                {/* ================= MESSAGE ================= */}

                <div
                  className="
                    flex
                    w-[150px]
                    sm:w-[180px]
                    md:w-[200px]
                    lg:w-[250px]
                    flex-col
                    items-center
                    justify-center
                    text-center
                    self-center
                  "
                >
                  <p
                    className="
                      whitespace-pre-wrap
                      break-words
                      uppercase
                      text-black
                      text-[16px]
                      sm:text-[22px]
                      md:text-[28px]
                      lg:text-[34px]
                      leading-[1.45]
                    "
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                    }}
                  >
                    {recipient.message ||
                      "THANKS FOR\nMAKING MY\nBIRTHDAY EXTRA\nSWEET!"}
                  </p>

                  <div className="mt-4 sm:mt-5 lg:mt-6 flex items-center gap-2 lg:gap-3">
                    <span
                      className="
                        text-[22px]
                        sm:text-[28px]
                        md:text-[34px]
                        lg:text-[42px]
                      "
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                      }}
                    >
                      —
                    </span>

                    <h2
                      className="
                        uppercase
                        text-[20px]
                        sm:text-[28px]
                        md:text-[34px]
                        lg:text-[40px]
                        truncate
                      "
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                      }}
                    >
                      {recipient.name || "Recipient"}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftBoxPreview;
