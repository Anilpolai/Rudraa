// src/jsfile/review.js

const review = {
  reviews: [
    {
      id: 1,
      title: "Incredible Ketchup Quality!",
      stars: 5,
      text: "This ketchup brings a perfect balance of sweetness and tang. It elevated every dish we tried it with. The packaging and taste both scream premium!",
      foodImg: "/images/review-food1.jpg",
      userImg: "/images/user1.jpg",
      name: "Emma Johnson",
      role: "Restaurant Owner",
    },
    {
      id: 2,
      title: "Our Customers Love It!",
      stars: 5,
      text: "We’ve switched entirely to this ketchup brand in our diner. Customers keep complimenting its freshness and flavor. Highly recommend for bulk buyers!",
      foodImg: "/images/review-food2.jpg",
      userImg: "/images/user2.jpg",
      name: "Liam Carter",
      role: "Café Manager",
    },
  ],
  currentIndex: 0,
};

export default review;
