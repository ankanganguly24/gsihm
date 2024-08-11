import Image from "next/image";
import React from "react";
import hotelmanagement from "../../../public/image/new/hotelmanagement.jpeg";
import aviationmanagement from "../../../public/image/new/aviation.jpeg";
import cruisemanagement from "../../../public/image/new/cruise.jpeg";
import personalitydevelopment from "../../../public/image/new/personality development.jpeg";
import roshan from "../../../public/image/new/Roshan.jpeg";

const courses = [
  {
    id: 1,
    title: "HOTEL MANAGEMENT",
    description1:
      "From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.",
    description2:
      "We can't believe how far we have come in the last 6 months. I really did not think this awesome career move would come so quickly. Thanks to each of you put into SI and the partner relationships.",
    author: "ROSHAN",
    organization: "GSIHM",
    imageUrl: hotelmanagement,
    profileImage: roshan,
  },
  {
    id: 2,
    title: "AVIATION MANAGEMENT",
    description1:
      "From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.",
    description2:
      "We can't believe how far we have come in the last 6 months. I really did not think this awesome career move would come so quickly. Thanks to each of you put into SI and the partner relationships.",
    author: "ROSHAN",
    organization: "GSIHM",
    imageUrl: aviationmanagement,
    profileImage: roshan,
  },
  {
    id: 3,
    title: "CRUISE MANAGEMENT",
    description1:
      "From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.",
    description2:
      "We can't believe how far we have come in the last 6 months. I really did not think this awesome career move would come so quickly. Thanks to each of you put into SI and the partner relationships.",
    author: "ROSHAN",
    organization: "GSIHM",
    imageUrl: cruisemanagement,
    profileImage: roshan,
  },
  {
    id: 4,
    title: "PERSONALITY DEVELOPMENT",
    description1:
      "From local banks to local government, we partner with organizations on their journey to digital transformation. Our customers include 15 million professionals in 175 countries and 800 of the fortune 1000.",
    description2:
      "We can't believe how far we have come in the last 6 months. I really did not think this awesome career move would come so quickly. Thanks to each of you put into SI and the partner relationships.",
    author: "ROSHAN",
    organization: "GSIHM",
    imageUrl: personalitydevelopment,
    profileImage: roshan,
  },
];

const Courses = () => {
  return (
    <>
      <div className="bg-primary text-white h-32 px-6 md:px-32 flex flex-col justify-center">
        <h1 className="text-3xl font-bold">Home / Courses</h1>
      </div>

      <div className="p-6 md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-900 rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-64">
              <Image
                src={course.imageUrl}
                alt={course.title}
                className="object-cover object-center w-full h-full"
                layout="fill"
              />
            </div>
            <div className="p-4 text-primary">
              <h2 className="text-xl font-bold mb-2">{course.title}</h2>
              <p className="text-base mb-2">{course.description1}</p>
              <p className="text-base mb-4">{course.description2}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 mr-4">
                  <Image
                    src={course.profileImage}
                    alt={course.author}
                    className="object-cover rounded-full"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <p className="font-semibold">{course.author}</p>
                  <p className="text-sm text-gray-300">{course.organization}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
