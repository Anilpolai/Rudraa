import { g } from "framer-motion/client";
import d1 from "../img/popular/DarkSoya/1.png";
import d2 from "../img/popular/DarkSoya/2.png";
import d3 from "../img/popular/DarkSoya/3.png";

import g1 from "../img/popular/GreenChilli/1.png";
import g2 from "../img/popular/GreenChilli/2.png";
import g3 from "../img/popular/GreenChilli/3.png";

import r1 from "../img/popular/RedChilli/1.png";
import r2 from "../img/popular/RedChilli/2.png";
import r3 from "../img/popular/RedChilli/3.png";

import r4 from "../img/popular/RedChilli/4.png";
import r5 from "../img/popular/RedChilli/5.png";
import r6 from "../img/popular/RedChilli/6.png";

import w1 from "../img/popular/Whitevinegar/1.png";
import w2 from "../img/popular/Whitevinegar/2.png";

const product = {
  dishes: [
    {
      id: 1,
      name: "Premium Tomato Ketchup",
      category: "Classic, Rich Taste",
      price: 4.5,
      oldPrice: 5.0,
      badge: "Best Seller",
      weight: "500g",
      image: [d1, d2, d3],
      description:
        "Crafted from the finest sun-ripened tomatoes, this ketchup delivers a perfectly balanced tangy and sweet flavor ideal for all meals.",
    },
    {
      id: 2,
      name: "Organic Ketchup",
      category: "Natural, Eco-Friendly",
      price: 5.5,
      oldPrice: null,
      badge: "100% Organic",
      weight: "500g",
      image: [g1, g2, g3],
      description:
        "Made from certified organic tomatoes with no artificial additives. Ideal for health-conscious consumers and organic retailers.",
    },
    {
      id: 3,
      name: "Spicy Chili Ketchup",
      category: "Hot, Fiery Flavor",
      price: 4.99,
      oldPrice: null,
      badge: "Hot!",
      weight: "500g",
      image: [r1, r2, r3],
      description:
        "A bold blend of fresh chili peppers and premium tomato puree for those who love a little heat in every bite.",
    },
    {
      id: 4,
      name: "No Sugar Added Ketchup",
      category: "Healthy, Low Calorie",
      price: 4.2,
      oldPrice: 4.8,
      badge: "Healthy Choice",
      weight: "500g",
      image: [r4, r5, r6],
      description:
        "Delicious tomato ketchup with zero added sugar — perfect for diabetics and fitness enthusiasts who value natural sweetness.",
    },
    {
      id: 5,
      name: "Premium Tomato Ketchup",
      category: "Classic, Rich Taste",
      price: 4.5,
      oldPrice: 5.0,
      badge: "Best Seller",
      weight: "1kg",
      image: [w1, w2],
      description:
        "Crafted from the finest sun-ripened tomatoes, this ketchup delivers a perfectly balanced tangy and sweet flavor ideal for all meals.",
    },
    // {
    //   id: 6,
    //   name: "Organic Ketchup",
    //   category: "Natural, Eco-Friendly",
    //   price: 5.5,
    //   oldPrice: null,
    //   badge: "100% Organic",
    //   weight: "1kg",
    //   image: [],
    //   description:
    //     "Made from certified organic tomatoes with no artificial additives. Ideal for health-conscious consumers and organic retailers.",
    // },
    // {
    //   id: 7,
    //   name: "Spicy Chili Ketchup",
    //   category: "Hot, Fiery Flavor",
    //   price: 4.99,
    //   oldPrice: null,
    //   badge: "Hot!",
    //   weight: "1kg",
    //   image: [],
    //   description:
    //     "A bold blend of fresh chili peppers and premium tomato puree for those who love a little heat in every bite.",
    // },
    // {
    //   id: 8,
    //   name: "No Sugar Added Ketchup",
    //   category: "Healthy, Low Calorie",
    //   price: 4.2,
    //   oldPrice: 4.8,
    //   badge: "Healthy Choice",
    //   weight: "1kg",
    //   image: [],
    //   description:
    //     "Delicious tomato ketchup with zero added sugar — perfect for diabetics and fitness enthusiasts who value natural sweetness.",
    // },
  ],
};

export default product;