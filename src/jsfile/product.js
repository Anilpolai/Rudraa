
import d1 from "../img/popular/DarkSoya/1.png";
import d2 from "../img/popular/DarkSoya/2.png";
import d3 from "../img/popular/DarkSoya/3.png";
import d4 from "../img/popular/DarkSoya/4.png";
import d5 from "../img/popular/DarkSoya/5.png";
import d6 from "../img/popular/DarkSoya/6.png";
import d7 from "../img/popular/DarkSoya/7.png";

import g1 from "../img/popular/greenchilli/1.png";
import g2 from "../img/popular/greenchilli/2.png";
import g3 from "../img/popular/greenchilli/3.png";
import g4 from "../img/popular/greenchilli/4.png";
import g5 from "../img/popular/greenchilli/5.png";
import g6 from "../img/popular/greenchilli/6.png";
import g7 from "../img/popular/greenchilli/7.png";
import g8 from "../img/popular/greenchilli/8.png";
import g9 from "../img/popular/greenchilli/9.png";

import r1 from "../img/popular/redchilli/1.png";
import r2 from "../img/popular/redchilli/2.png";
import r3 from "../img/popular/redchilli/3.png";
import r4 from "../img/popular/redchilli/4.png";
import r5 from "../img/popular/redchilli/5.png";
import r6 from "../img/popular/redchilli/6.png";
import r7 from "../img/popular/redchilli/7.png";
import r8 from "../img/popular/redchilli/8.png";

import w1 from "../img/popular/Whitevinegar/1.png";
import w2 from "../img/popular/Whitevinegar/2.png";
import w3 from "../img/popular/Whitevinegar/3.png";
import w4 from "../img/popular/Whitevinegar/4.png";
import w5 from "../img/popular/Whitevinegar/5.png";
import w6 from "../img/popular/Whitevinegar/6.png";
import w7 from "../img/popular/Whitevinegar/7.png";

import t1 from "../img/popular/tomatoketchup/1.png";
import t2 from "../img/popular/tomatoketchup/2.png";
import t3 from "../img/popular/tomatoketchup/3.png";
import t4 from "../img/popular/tomatoketchup/4.png";
import t5 from "../img/popular/tomatoketchup/5.png";
import t6 from "../img/popular/tomatoketchup/6.png";
import t7 from "../img/popular/tomatoketchup/7.png";
import t8 from "../img/popular/tomatoketchup/8.png";
import t9 from "../img/popular/tomatoketchup/9.png";
import t10 from "../img/popular/tomatoketchup/10.png";
import t11 from "../img/popular/tomatoketchup/11.png";
import t12 from "../img/popular/tomatoketchup/12.png";
import t13 from "../img/popular/tomatoketchup/13.png";
import t14 from "../img/popular/tomatoketchup/14.png";
import t15 from "../img/popular/tomatoketchup/15.png";
import t16 from "../img/popular/tomatoketchup/16.png";
import t17 from "../img/popular/tomatoketchup/17.png";
import t18 from "../img/popular/tomatoketchup/18.png";

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
    {
      id: 6,
      name: "Organic Ketchup",
      category: "Natural, Eco-Friendly",
      price: 5.5,
      oldPrice: null,
      badge: "100% Organic",
      weight: "1kg",
      image: [d4,d5,d6,d7],
      description:
        "Made from certified organic tomatoes with no artificial additives. Ideal for health-conscious consumers and organic retailers.",
    },
    {
      id: 7,
      name: "Spicy Chili Ketchup",
      category: "Hot, Fiery Flavor",
      price: 4.99,
      oldPrice: null,
      badge: "Hot!",
      weight: "1kg",
      image: [g4,g5,g6],
      description:
        "A bold blend of fresh chili peppers and premium tomato puree for those who love a little heat in every bite.",
    },
    {
      id: 8,
      name: "No Sugar Added Ketchup",
      category: "Healthy, Low Calorie",
      price: 4.2,
      oldPrice: 4.8,
      badge: "Healthy Choice",
      weight: "1kg",
      image: [g7,g8,g9],
      description:
        "Delicious tomato ketchup with zero added sugar — perfect for diabetics and fitness enthusiasts who value natural sweetness.",
    },{
      id: 9,
      name: "No Sugar Added Ketchup",
      category: "Healthy, Low Calorie",
      price: 4.2,
      oldPrice: 4.8,
      badge: "Healthy Choice",
      weight: "1kg",
      image: [r7,r8],
      description:
        "Delicious tomato ketchup with zero added sugar — perfect for diabetics and fitness enthusiasts who value natural sweetness.",
    },
    {
      id: 10,
      name: "No Sugar Added Ketchup",
      category: "Healthy, Low Calorie",
      price: 4.2,
      oldPrice: 4.8,
      badge: "Healthy Choice",
      weight: "1kg",
      image: [w3,w4,w5],
      description:
        "Delicious tomato ketchup with zero added sugar — perfect for diabetics and fitness enthusiasts who value natural sweetness.",
    },{
      id: 11,
      name: "No Sugar Added Ketchup",
      category: "Healthy, Low Calorie",
      price: 4.2,
      oldPrice: 4.8,
      badge: "Healthy Choice",
      weight: "1kg",
      image: [w6,w7],
      description:
        "Delicious tomato ketchup with zero added sugar — perfect for diabetics and fitness enthusiasts who value natural sweetness.",
    },
    {
      id: 12,
      name: "Premium Tomato Ketchup",
      category: "Classic, Rich Taste",
      price: 4.5,
      oldPrice: 5.0,
      badge: "Best Seller",
      weight: "1kg",
      image: [t1, t2,t3],
      description:
        "Crafted from the finest sun-ripened tomatoes, this ketchup delivers a perfectly balanced tangy and sweet flavor ideal for all meals.",
    },
    {
      id: 13,
      name: "Organic Ketchup",
      category: "Natural, Eco-Friendly",
      price: 5.5,
      oldPrice: null,
      badge: "100% Organic",
      weight: "1kg",
      image: [t4,t5],
      description:
        "Made from certified organic tomatoes with no artificial additives. Ideal for health-conscious consumers and organic retailers.",
    },
    {
      id: 14,
      name: "Spicy Chili Ketchup",
      category: "Hot, Fiery Flavor",
      price: 4.99,
      oldPrice: null,
      badge: "Hot!",
      weight: "1kg",
      image: [t6,t7],
      description:
        "A bold blend of fresh chili peppers and premium tomato puree for those who love a little heat in every bite.",
    },
    {
      id: 15,
      name: "Premium Tomato Ketchup",
      category: "Classic, Rich Taste",
      price: 4.5,
      oldPrice: 5.0,
      badge: "Best Seller",
      weight: "1kg",
      image: [t8, t9,t10,t11,t12],
      description:
        "Crafted from the finest sun-ripened tomatoes, this ketchup delivers a perfectly balanced tangy and sweet flavor ideal for all meals.",
    },
    {
      id: 16,
      name: "Organic Ketchup",
      category: "Natural, Eco-Friendly",
      price: 5.5,
      oldPrice: null,
      badge: "100% Organic",
      weight: "1kg",
      image: [t12,t13],
      description:
        "Made from certified organic tomatoes with no artificial additives. Ideal for health-conscious consumers and organic retailers.",
    },
    {
      id: 17,
      name: "Spicy Chili Ketchup",
      category: "Hot, Fiery Flavor",
      price: 4.99,
      oldPrice: null,
      badge: "Hot!",
      weight: "1kg",
      image: [t14,t15],
      description:
        "A bold blend of fresh chili peppers and premium tomato puree for those who love a little heat in every bite.",
    },
    {
      id: 18,
      name: "Premium Tomato Ketchup",
      category: "Classic, Rich Taste",
      price: 4.5,
      oldPrice: 5.0,
      badge: "Best Seller",
      weight: "1kg",
      image: [t16, t17,t18],
      description:
        "Crafted from the finest sun-ripened tomatoes, this ketchup delivers a perfectly balanced tangy and sweet flavor ideal for all meals.",
    },
    
  ],
};

export default product;