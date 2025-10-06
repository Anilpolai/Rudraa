// src/jsfile/team.js

import chef1 from "../img/Team/team1.jpeg";
import chef2 from "../img/Team/team4.jpeg";
import chef3 from "../img/Team/team1.jpeg";
import chef4 from "../img/Team/team4.jpeg";

// Team data file – exports team member details
const team = {
  members: [
    {
      id: 1,
      name: "Alexander Petllo",
      role: "ASSISTANT CHEF",
      image: chef1,
      experience: "5 Years",
      description:
        "Alexander specializes in Italian cuisine and is known for his precision and attention to flavor balance.",
    },
    {
      id: 2,
      name: "Mendia Juxef",
      role: "BURGER KING",
      image: chef2,
      experience: "4 Years",
      description:
        "Mendia is the burger expert who brings creative twists to classic fast food with homemade sauces.",
    },
    {
      id: 3,
      name: "Petro William",
      role: "MAIN CHEF",
      image: chef3,
      experience: "8 Years",
      description:
        "Petro leads the kitchen with a passion for fine dining and excellence in presentation and taste.",
    },
    {
      id: 4,
      name: "Kunnel Jexos",
      role: "PIZZA MASTER",
      image: chef4,
      experience: "6 Years",
      description:
        "Kunnel is our pizza artisan, perfecting every crust and sauce combination with a joyful attitude.",
    },
  ],
};

export default team;
