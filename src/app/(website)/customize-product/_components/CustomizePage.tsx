"use client";

import React from "react";
import CustomizeCards from "@/components/customizeCards/CustomizeCards";
import cusotmimage from "@/Public/images/customCardImage.png";

const customizeSections = [
  {
    imageUrl: cusotmimage,
    altText: "Fashion Style 1",
    title: "Customize the Coat however you want.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur diam non sodales eleifend.",
    buttonText: "Customize Coat",
    hrf: "/suits"
  },
  {
    imageUrl: cusotmimage,
    altText: "Fashion Style 2",
    title: "Customize the Shirt however you want.",
    description:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    buttonText: "Customize Shirt",
    hrf: "/shirts"
  },
  {
    imageUrl: cusotmimage,
    altText: "Fashion Style 3",
    title: "Customize the Jacket however you want.",
    description:
      "Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus.",
    buttonText: "Customize Jacket",
    hrf: "/jackets "
  },
  {
    imageUrl: cusotmimage,
    altText: "Fashion Style 4",
    title: "Customize the Pants however you want.",
    description: "Vivamus suscipit tortor eget felis porttitor volutpat.",
    buttonText: "Customize Pants",
    hrf: ""
  },
  {
    imageUrl: cusotmimage,
    altText: "Fashion Style 4",
    title: "Customize the Suit however you want.",
    description: "Vivamus suscipit tortor eget felis porttitor volutpat.",
    buttonText: "Customize Suit ",
    hrf: ""
  }
];

function CustomizePage() {
  return (
    <div className="lg:space-y-[100px] md:space-y-[70px] space-y-[60px]">
      {customizeSections.map((section, index) => (
        <CustomizeCards
          key={index}
          imageUrl={section.imageUrl}
          altText={section.altText}
          title={section.title}
          description={section.description}
          buttonText={section.buttonText}
          reverse={index % 2 !== 0} // Alternate layout: true for odd index
        />
      ))}
    </div>
  );
}

export default CustomizePage;
