
import mangoPeanutButterBar from "../assets/products/mango-peanut-butter-bar.jpeg";
import mangoPeanutButterBarBack from "../assets/products/mango-peanut-butter-bar-back.jpeg";

import orangePeanutButterBar from "../assets/products/orange-peanut-butter-bar.jpeg";
import orangePeanutButterBarBack from "../assets/products/orange-peanut-butter-bar-back.jpeg";

import chocolatePeanutButterBar from "../assets/products/chocolate-peanut-butter-bar.jpeg";
import chocolatePeanutButterBarBack from "../assets/products/chocolate-peanut-butter-bar-back.jpeg";

import orangePeanutChikkiBar from "../assets/products/orange-peanut-chikki-bar.jpeg";
import orangePeanutChikkiBarBack from "../assets/products/orange-peanut-chikki-bar-back.jpeg";

import palmJaggeryPeanutChikkiBar from "../assets/products/palm-jaggery-peanut-chikki-bar.jpeg";
import palmJaggeryPeanutChikkiBarBack from "../assets/products/palm-jaggery-peanut-chikki-bar-back.jpeg";

import countryJaggeryPeanutChikkiBar from "../assets/products/country-jaggery-peanut-chikki-bar.jpeg";
import countryJaggeryPeanutChikkiBarBack from "../assets/products/country-jaggery-peanut-chikki-bar-back.jpeg";

import kulfiPeanutChikkiBar from "../assets/products/kulfi-peanut-chikki-bar.jpeg";
import kulfiPeanutChikkiBarBack from "../assets/products/kulfi-peanut-chikki-bar-back.jpeg";

import chilliGuavaPeanutChikkiBar from "../assets/products/chilli-guava-peanut-chikki-bar.jpeg";
import chilliGuavaPeanutChikkiBarBack from "../assets/products/chilli-guava-peanut-chikki-bar-back.jpeg";

import palmJaggerySesameChikkiBar from "../assets/products/palm-jaggery-sesame-chikki-bar.jpeg";
import palmJaggerySesameChikkiBarack from "../assets/products/palm-jaggery-sesame-chikki-bar-back.jpeg";

import palmJaggeryPumpkinBar from "../assets/products/palm-jaggery-pumpkin-bar.jpeg";
import palmJaggeryPumpkinBarBack from "../assets/products/palm-jaggery-pumpkin-bar-back.jpeg";

import pumpkinBar from "../assets/products/pumpkin-bar.jpeg";
import pumpkinBarBack from "../assets/products/pumpkin-bar-back.jpeg";

import peanutBar from "../assets/products/peanut-bar.jpeg";
import peanutBarBack from "../assets/products/peanut-bar-back.jpeg";

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
    variants: [
      { weight: "25g", price: 25 },
      { weight: "50g", price: 40 },
      { weight: "75g", price: 60 },
    ],
    image: mangoPeanutButterBar,
    backImage: mangoPeanutButterBarBack,
  },

  {
    id: 2,
    name: "Orange Peanut Butter Bar",
    category: "peanut-butter",
    tags: ["Natural Flavours", "Vegan"],
    variants: [
      { weight: "25g", price: 25 },
      { weight: "50g", price: 40 },
      { weight: "75g", price: 60 },
    ],
    image: orangePeanutButterBar,
    backImage: orangePeanutButterBarBack,
  },

  {
    id: 3,
    name: "Chocolate Peanut Butter Bar",
    category: "peanut-butter",
    tags: ["Natural Flavours", "Vegan"],
    variants: [
      { weight: "25g", price: 25 },
      { weight: "50g", price: 40 },
      { weight: "75g", price: 60 },
    ],
    image: chocolatePeanutButterBar,
    backImage: chocolatePeanutButterBarBack,
  },

  {
    id: 4,
    name: "Country Jaggery Peanut Chikki Bar (Classic)",
    category: "peanut-chikki",
    tags: ["No Refined Sugar", "No Liquid Glucose", "Vegan"],
    variants: [
      { weight: "25g", price: 20 },
      { weight: "50g", price: 35 },
      { weight: "75g", price: 50 },
    ],
    image: countryJaggeryPeanutChikkiBar,
    backImage: countryJaggeryPeanutChikkiBarBack,
  },

  {
    id: 5,
    name: "Orange Peanut Chikki Bar",
    category: "peanut-chikki",
    tags: ["No Refined Sugar", "No Liquid Glucose", "Vegan"],
    variants: [
      { weight: "25g", price: 25 },
      { weight: "50g", price: 40 },
      { weight: "75g", price: 60 },
    ],
    image: orangePeanutChikkiBar,
    backImage: orangePeanutChikkiBarBack,
  },

  {
    id: 6,
    name: "Kulfi Peanut Chikki Bar",
    category: "peanut-chikki",
    tags: ["No Refined Sugar", "No Liquid Glucose", "Vegan"],
    variants: [
      { weight: "25g", price: 25 },
      { weight: "50g", price: 40 },
      { weight: "75g", price: 60 },
    ],
    image: kulfiPeanutChikkiBar,
    backImage: kulfiPeanutChikkiBarBack,
  },
  {
    id: 7,
    name: "Chilli Guava Peanut Chikki Bar",
    category: "peanut-chikki",
    tags: ["No Refined Sugar", "No Liquid Glucose", "Vegan"],
    variants: [
      { weight: "25g", price: 25 },
      { weight: "50g", price: 40 },
      { weight: "75g", price: 60 },
    ],
    image: chilliGuavaPeanutChikkiBar,
    backImage: chilliGuavaPeanutChikkiBarBack,
  },

  {
    id: 8,
    name: "Palm Jaggery Peanut Chikki Bar",
    category: "palm-jaggery",
    tags: ["No Refined Sugar", "No Liquid Glucose", "Vegan"],
    variants: [
      { weight: "25g", price: 25 },
      { weight: "50g", price: 50 },
      { weight: "75g", price: 70 },
    ],
    image: palmJaggeryPeanutChikkiBar,
    backImage: palmJaggeryPeanutChikkiBarBack,
  },

  {
    id: 9,
    name: "Palm Jaggery Sesame Chikki Bar",
    category: "palm-jaggery",
    tags: ["No Refined Sugar", "No Liquid Glucose", "Vegan"],
    variants: [
      { weight: "25g", price: 25 },
      { weight: "50g", price: 50 },
      { weight: "75g", price: 70 },
    ],
    image: palmJaggerySesameChikkiBar,
    backImage: palmJaggerySesameChikkiBarack,
  },

  {
    id: 10,
    name: "Palm Jaggery Pumpkin Bar",
    category: "palm-jaggery",
    tags: ["No Refined Sugar", "No Liquid Glucose", "Vegan"],
    variants: [
      { weight: "20g", price: 30 },
      { weight: "40g", price: 55 },
    ],
    image: palmJaggeryPumpkinBar,
    backImage: palmJaggeryPumpkinBarBack,
  },

  {
    id: 11,
    name: "Pumpkin Bar",
    category: "no-added-sugar",
    tags: ["No Added Sugar", "Monk Fruit Sweetened", "Vegan"],
    variants: [
      { weight: "20g", price: 35 },
      { weight: "40g", price: 65 },
    ],
    image: pumpkinBar,
    backImage: pumpkinBarBack,
  },

  {
    id: 12,
    name: "Peanut Bar",
    category: "no-added-sugar",
    tags: ["No Added Sugar", "Monk Fruit Sweetened", "Vegan"],
    variants: [
      { weight: "25g", price: 30 },
      { weight: "50g", price: 55 },
    ],
    image: peanutBar,
    backImage: peanutBarBack,
  },
];
