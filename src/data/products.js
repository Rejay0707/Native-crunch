import mangoPeanutButterBar from "../assets/products/mango-peanut-butter-bar.jpeg";
import orangePeanutButterBar from "../assets/products/orange-peanut-butter-bar.jpeg";
import chocolatePeanutButterBar from "../assets/products/chocolate-peanut-butter-bar.jpeg";
import orangePeanutChikkiBar from "../assets/products/orange-peanut-chikki-bar.jpeg";
import palmJaggeryPeanutChikkiBar from "../assets/products/palm-jaggery-peanut-chikki-bar.jpeg";
import countryJaggeryPeanutChikkiBar from "../assets/products/country-jaggery-peanut-chikki-bar.jpeg";
import kulfiPeanutChikkiBar from "../assets/products/kulfi-peanut-chikki-bar.jpeg";
import chilliGuavaPeanutChikkiBar from "../assets/products/chilli-guava-peanut-chikki-bar.jpeg";
import palmJaggerySesameChikkiBar from "../assets/products/palm-jaggery-sesame-chikki-bar.jpeg";
import palmJaggeryPumpkinBar from "../assets/products/palm-jaggery-pumpkin-bar.jpeg";
import pumpkinBar from "../assets/products/pumpkin-bar.jpeg";
import peanutBar from "../assets/products/peanut-bar.jpeg";

export const categories = [
  {
    id: "all",
    label: "All Products",
  },
  {
    id: "peanut-butter",
    label: "Peanut Butter Bar",
  },
  {
    id: "peanut-chikki",
    label: "Peanut Chikki Bar",
  },
  {
    id: "palm-jaggery",
    label: "Palm Jaggery",
  },
  {
    id: "no-added-sugar",
    label: "No Added Sugar",
  },
];

export const products = [
  {
    id: 1,
    name: "Mango Peanut Butter Bar",
    category: "peanut-butter",
    tags: ["Natural Flavours", "Vegan"],
    price: 149,
    image: mangoPeanutButterBar,
  },
  {
    id: 2,
    name: "Orange Peanut Butter Bar",
    category: "peanut-butter",
    tags: ["Natural Flavours", "Vegan"],
    price: 149,
    image: orangePeanutButterBar,
  },
  {
    id: 3,
    name: "Chocolate Peanut Butter Bar",
    category: "peanut-butter",
    tags: ["Natural Flavours", "Vegan"],
    price: 149,
    image: chocolatePeanutButterBar,
  },
  {
    id: 4,
    name: "Orange Peanut Chikki Bar",
    category: "peanut-chikki",
    tags: ["No Refined Sugar", "No Liquid Glucose", "Vegan"],
    price: 129,
    image: orangePeanutChikkiBar,
  },
  {
    id: 5,
    name: "Palm Jaggery Peanut Chikki Bar",
    category: "palm-jaggery",
    tags: ["No Refined Sugar", "No Liquid Glucose", "Vegan"],
    price: 129,
    image: palmJaggeryPeanutChikkiBar,
  },
  {
    id: 6,
    name: "Country Jaggery Peanut Chikki Bar (Classic)",
    category: "peanut-chikki",
    tags: ["No Refined Sugar", "No Liquid Glucose", "Vegan"],
    price: 129,
    image: countryJaggeryPeanutChikkiBar,
  },
  {
    id: 7,
    name: "Kulfi Peanut Chikki Bar",
    category: "peanut-chikki",
    tags: ["No Refined Sugar", "No Liquid Glucose", "Vegan"],
    price: 139,
    image: kulfiPeanutChikkiBar,
  },
  {
    id: 8,
    name: "Chilli Guava Peanut Chikki Bar",
    category: "peanut-chikki",
    tags: ["No Refined Sugar", "No Liquid Glucose", "Vegan"],
    price: 139,
    image: chilliGuavaPeanutChikkiBar,
  },
  {
    id: 9,
    name: "Palm Jaggery Sesame Chikki Bar",
    category: "palm-jaggery",
    tags: ["No Refined Sugar", "No Liquid Glucose", "Vegan"],
    price: 129,
    image: palmJaggerySesameChikkiBar,
  },
  {
    id: 10,
    name: "Palm Jaggery Pumpkin Bar",
    category: "palm-jaggery",
    tags: ["No Refined Sugar", "No Liquid Glucose", "Vegan"],
    price: 139,
    image: palmJaggeryPumpkinBar,
  },
  {
    id: 11,
    name: "Pumpkin Bar",
    category: "no-added-sugar",
    tags: ["No Added Sugar", "Monk Fruit Sweetened", "Vegan"],
    price: 139,
    image: pumpkinBar,
  },
  {
    id: 12,
    name: "Peanut Bar",
    category: "no-added-sugar",
    tags: ["No Added Sugar", "Monk Fruit Sweetened", "Vegan"],
    price: 119,
    image: peanutBar,
  },
];