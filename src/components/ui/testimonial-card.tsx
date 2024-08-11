import Image from "next/image";
import React from "react";
import avatar1 from "../../../public/image/new/avatar1.jpg";
import avatar2 from "../../../public/image/new/avatar2.jpg";
import avatar3 from "../../../public/image/new/avatar3.jpg";
import { Button } from "./button";
import { CiLocationArrow1 } from "react-icons/ci";
import image1 from "../../../public/image/new/IMG-20240508-WA0016.jpg";
import image2 from "../../../public/image/new/IMG-20240508-WA0017.jpg";
import image4 from "../../../public/image/new/IMG-20240508-WA0019.jpg";
import image5 from "../../../public/image/new/IMG-20240508-WA0020.jpg";
import image7 from "../../../public/image/new/IMG-20240508-WA0022.jpg";
import image9 from "../../../public/image/new/IMG-20240508-WA0024.jpg";
import image13 from "../../../public/image/new/IMG-20240508-WA0028.jpg";
import image15 from "../../../public/image/new/IMG-20240508-WA0030.jpg";

const TestimonialCard = () => {
  const testimonials = [
    {
      name: "Daniella Doe",
      avatar: avatar1,
      role: "Mobile dev",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
    },
    {
      name: "AKRITI",
      avatar: avatar2,
      role: "Marketing",
      content:
        "Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
    },
    
    {
      name: "Jhon Doe",
      avatar: avatar3,
      role: "Web dev",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
    },

      {
        name: "Yanick Doe",
        avatar: image13,
        role: "Developer",
        content:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
      },
        {
            name: "Yanick Doe",
            avatar: image15,
            role: "Developer",
            content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
        },
        {
            name: "Yanick Doe",
            avatar: image4,
            role: "Developer",
            content:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
          },
            {
                name: "Yanick Doe",
                avatar: image5,
                role: "Developer",
                content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
            },
            {
                name: "Yanick Doe",
                avatar: image7,
                role: "Developer",
                content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
            },
            {
                name: "Yanick Doe",
                avatar: image9,
                role: "Developer",
                content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
            },
  ];

  return (
    <div
      className="text-gray-600 dark:text-gray-300 py-10 dark:bg-gray-900"
      id="reviews"
    >
      <div className="max-w-7xl  mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-10 space-y-4 py-10 rounded-md px-6 md:px-0">
          <h2 className="text-4xl px-5 text-center font-bold  text-primary">
            SEE WHAT OUR STUDENTS SAYS
          </h2>
        </div>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
            >
              <div className="flex gap-4">
                <Image
                  className="w-12 h-12 rounded-full"
                  src={testimonial.avatar}
                  alt="user avatar"
                  loading="lazy"
                  width={300}
                  height={300}
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                    {testimonial.name}
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="mt-8">{testimonial.content}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col my-10 justify-center items-center">
          <Button size="lg">
            Read more <CiLocationArrow1 size={20} width={10} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
