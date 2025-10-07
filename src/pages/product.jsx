import React from "react";
import { CardBody, CardContainer, CardItem } from "../component/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var" containerClassName="bg-gray-100 rounded-xl">
      <CardBody className="bg-white rounded-xl shadow-xl">
        <CardItem translateZ={50} rotateY={15} className="bg-red-400 h-24 w-24 rounded-lg" />
        <CardItem translateZ={30} rotateX={10} className="bg-blue-400 h-20 w-20 rounded-lg absolute top-16 left-16" />
      </CardBody>
    </CardContainer>
  );
}

export default ThreeDCardDemo;
