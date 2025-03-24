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
      "Learn the art of hospitality and hotel operations. This course covers everything from front office management to food and beverage services, housekeeping, and customer relationship management.",
    description2:
      "With the hospitality industry growing rapidly, skilled professionals are in high demand. Our program equips you with practical knowledge and industry insights to excel in hotel management.",
    author: "ROSHAN",
    organization: "GSIHM",
    imageUrl: hotelmanagement,
    profileImage: roshan,
  },
  {
    id: 2,
    title: "AVIATION MANAGEMENT",
    description1:
      "Gain a deep understanding of the aviation industry, including airport operations, airline management, and air traffic control. This course is designed for aspiring professionals in the aviation sector.",
    description2:
      "With air travel expanding globally, aviation management professionals play a crucial role in ensuring efficient airline operations. This course provides hands-on learning and industry exposure.",
    author: "ROSHAN",
    organization: "GSIHM",
    imageUrl: aviationmanagement,
    profileImage: roshan,
  },
  {
    id: 3,
    title: "CRUISE MANAGEMENT",
    description1:
      "Embark on an exciting career in the cruise industry. This course covers essential aspects such as cruise operations, hospitality management at sea, maritime regulations, and customer service excellence.",
    description2:
      "Cruise management offers unique career opportunities in luxury hospitality and global tourism. Our program prepares you to navigate the industry with expertise and confidence.",
    author: "ROSHAN",
    organization: "GSIHM",
    imageUrl: cruisemanagement,
    profileImage: roshan,
  },
  {
    id: 4,
    title: "PERSONALITY DEVELOPMENT",
    description1:
      "Enhance your communication skills, confidence, and leadership abilities with this comprehensive personality development program. Learn effective public speaking, body language, and self-presentation techniques.",
    description2:
      "Strong personal and professional skills are essential for career growth. This course helps you build a powerful presence, improve interpersonal relationships, and unlock your full potential.",
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
              {/* <div className="flex items-center">
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
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
