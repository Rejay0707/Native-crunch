import { useState } from "react";
import { X } from "lucide-react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden border-b border-[#ece2d7] bg-[#F8F2EA] py-0.5">
  <button
    onClick={() => setIsVisible(false)}
    className="
      absolute
      right-3
      top-1/2
      z-10
      -translate-y-1/2
      cursor-pointer
      text-[#2E1E13]
      hover:opacity-70
    "
  >
    <X size={16} />
  </button>

  <div className="animate-announcement whitespace-nowrap">
    <span
      className="
        text-[#2E1E13]
        text-base
        lg:text-[18px]
        font-semibold
        tracking-wide
      "
    >
      ✨ Clean Snacks. Real Ingredients. Honest Flavours.
    </span>
  </div>
</div>
  );
};

export default AnnouncementBar;
