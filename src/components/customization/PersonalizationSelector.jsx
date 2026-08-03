import { Package, Gift } from "lucide-react";
import { useCustomization } from "../../context/CustomizationProvider";

const PersonalizationSelector = ({ onSelect }) => {
  const { customizationType, setCustomizationType } = useCustomization();

  const cards = [
    {
      id: "box",
      title: "Gift Box",
      subtitle:
        "Customize the entire gift box with your own photo and message.",
      icon: Package,
    },
    {
      id: "wrapper",
      title: "Wrapper",
      subtitle:
        "Customize only the front wrapper with your own design, photo and message.",
      icon: Gift,
    },
  ];

  return (
    <section id="product-selection" className="mt-12">
      <div className="text-center">
        <p className="font-semibold uppercase tracking-[0.25em] text-[#C97A34]">
          Step 01
        </p>

        <h2 className="mt-3 text-4xl font-bold text-[#2E1E13]">
          Choose Personalization Type
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[#5A4637]">
          Select how you'd like your Native Crunch gift to be personalized.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {cards.map((card) => {
          const Icon = card.icon;

          const active = customizationType === card.id;

          return (
            <button
              key={card.id}
              onClick={() => {
                setCustomizationType(card.id);
                onSelect?.();
              }}
              className={`
                group
                rounded-[34px]
                border-2
                bg-white
                p-10
                text-left
                transition-all
                duration-300
                cursor-pointer
                hover:-translate-y-1
                hover:shadow-2xl
                ${
                  active
                    ? "border-[#C97A34] ring-4 ring-[#F4E2D3]"
                    : "border-[#E8DDD0]"
                }
              `}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#F8F2EA]">
                <Icon
                  size={42}
                  className="text-[#C97A34] transition group-hover:scale-110"
                />
              </div>

              <h3 className="mt-8 text-3xl font-bold text-[#2E1E13]">
                {card.title}
              </h3>

              <p className="mt-4 leading-8 text-[#6C5646]">{card.subtitle}</p>

              <div className="mt-10 inline-flex items-center rounded-full bg-[#C97A34] px-6 py-3 font-semibold text-white">
                {active ? "Selected ✓" : `Choose ${card.title}`}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default PersonalizationSelector;
