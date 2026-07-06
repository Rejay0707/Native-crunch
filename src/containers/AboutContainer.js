import peanuts from "../assets/ingredients/peanut.png"
import palmJaggery from "../assets/ingredients/palm-jaggery.png";
import pumpkinSeeds from "../assets/ingredients/pumpkin-seeds.png";
import sesame from "../assets/ingredients/sesame.png";

export const useAboutContainer = () => {
  const ingredients = [
    {
      id: 1,
      title: "Peanuts",
      description:
        "Rich in protein and healthy fats, peanuts provide natural energy and a satisfying crunch.",
      image: peanuts,
    },
    {
      id: 2,
      title: "Palm Jaggery",
      description:
        "A traditional natural sweetener packed with minerals and authentic flavour.",
      image: palmJaggery,
    },
    {
      id: 3,
      title: "Pumpkin Seeds",
      description:
        "Loaded with protein, magnesium, zinc, and essential nutrients for everyday wellness.",
      image: pumpkinSeeds,
    },
    {
      id: 4,
      title: "Sesame",
      description:
        "A rich source of calcium, antioxidants, and healthy fats with a delicious nutty taste.",
      image: sesame,
    },
  ];

  return { ingredients };
};