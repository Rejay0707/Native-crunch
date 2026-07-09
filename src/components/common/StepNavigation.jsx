import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StepNavigation = ({
  backPath,
  nextPath,
  backLabel = "Back",
  nextLabel = "Continue",
  onNext,
}) => {
  const navigate = useNavigate();

  return (
    <div className="mt-16 rounded-[32px] border border-[#E8DED3] bg-white p-6 shadow-lg">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <button
          onClick={() => navigate(backPath)}
          className="
            flex items-center justify-center gap-3
            rounded-full
            border border-[#D7C5B6]
            px-8 py-4
            font-semibold
            text-[#2E1E13]
            transition-all
            hover:bg-[#F8F2EA]
            cursor-pointer
          "
        >
          <ArrowLeft size={20} />
          {backLabel}
        </button>

        <button
          onClick={() => {
            if (onNext) {
              onNext();
            } else {
              navigate(nextPath);
            }
          }}
          className="
            flex items-center justify-center gap-3
            rounded-full
            bg-[#C97A34]
            px-10 py-4
            font-semibold
            text-white
            shadow-lg
            transition-all
            hover:scale-[1.02]
            hover:bg-[#B86D2D]
            cursor-pointer
          "
        >
          {nextLabel}
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default StepNavigation;