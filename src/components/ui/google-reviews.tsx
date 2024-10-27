"use client";
import React, { useState } from "react";
import { Button } from "./button";
import { FaStar } from "react-icons/fa";
import rating from "../../../public/image/new/starRating.jpg";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

const GoogleReviews = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const listItems = [
    "We provide the best quality education to our students",
    "We provide Global exposure",
    "We place students globally",
    "We provide 100% placement to our students",
    "We have the best faculty members",
    "We have the best infrastructure",
    "We provide the best placement opportunities",
    "We provide the best training facilities",
    "We provide the best industrial exposure",
    "We provide the best practical training",
    "We provide the best learning environment",
  ];

  const visibleItems = isExpanded ? listItems : listItems.slice(0, 4);

  const renderListItem = (item) => {
    const boldWords = [
      "Global",
      "infrastructure",
      "placement opportunities",
      "training facilities",
      "industrial exposure",
      "practical training",
      "learning environment",
    ];

    const parts = item.split(new RegExp(`(${boldWords.join("|")})`, "gi"));

    return parts.map((part, index) =>
      boldWords.includes(part) ? <b key={index}>{part}</b> : part
    );
  };

  return (
    <div className="px-6 md:px-12 lg:px-36 py-10 md:py-10 lg:py-10">
      <div className="flex flex-col lg:flex-row justify-center items-center shadow-2xl p-6 md:p-10">
        <div className="w-full lg:w-1/2">
          <Image
            src={rating}
            alt="Rating"
            layout="responsive"
            width={500}
            height={500}
            className="rounded-md"
          />
        </div>

        <div className="mt-8 lg:mt-0 lg:ml-12 w-full lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-5">
            GOOGLE REVIEWS
          </h1>

          <div className="flex items-center mb-5">
            <FcGoogle size={60} />
            <div className="flex ml-4">
              <FaStar color="yellow" size={30} />
              <FaStar color="yellow" size={30} />
              <FaStar color="yellow" size={30} />
              <FaStar color="yellow" size={30} />
              <FaStar color="yellow" size={30} />
            </div>
          </div>

          <p className="font-semibold flex items-center mb-8">
            We have a total of 4.8/5 rating on
            <FcGoogle size={25} className="ml-2" />
          </p>

          <h1 className="font-medium text-primary text-xl text-center mb-5">
            THE REASON IS QUITE SIMPLE
          </h1>

          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <ul className="list-disc space-y-3 text-lg">
              {visibleItems.map((item, index) => (
                <li key={index}>{renderListItem(item)}</li>
              ))}
            </ul>
            {!isExpanded && (
              <button
                onClick={handleToggle}
                className="mt-4 text-primary font-bold"
              >
                Show More
              </button>
            )}
            {isExpanded && (
              <button
                onClick={handleToggle}
                className="mt-4 text-primary font-bold"
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;
