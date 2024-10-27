import Image from "next/image";
import React from "react";
import image1 from "../../../public/image/new/IMG-20240508-WA0016.jpg";
import image2 from "../../../public/image/new/IMG-20240508-WA0017.jpg";
import image4 from "../../../public/image/new/IMG-20240508-WA0019.jpg";
import image5 from "../../../public/image/new/IMG-20240508-WA0020.jpg";
import image7 from "../../../public/image/new/IMG-20240508-WA0022.jpg";
import image9 from "../../../public/image/new/IMG-20240508-WA0024.jpg";
import image13 from "../../../public/image/new/IMG-20240508-WA0028.jpg";
import image15 from "../../../public/image/new/IMG-20240508-WA0030.jpg";
import avatar1 from "../../../public/image/new/avatar1.jpg";
import avatar2 from "../../../public/image/new/avatar2.jpg";
import avatar3 from "../../../public/image/new/avatar3.jpg";
import image16 from "../../../public/image/new/IMG-20240508-WA0031.jpg";
import image18 from "../../../public/image/new/IMG-20240508-WA0033.jpg";
import image19 from "../../../public/image/new/IMG-20240508-WA0034.jpg";
import image20 from "../../../public/image/new/IMG-20240508-WA0035.jpg";
import image21 from "../../../public/image/new/IMG-20240508-WA0036.jpg";
import image24 from "../../../public/image/new/IMG-20240508-WA0039.jpg";
import image25 from "../../../public/image/new/IMG-20240508-WA0040.jpg";
import image26 from "../../../public/image/new/IMG-20240508-WA0041.jpg";
import image27 from "../../../public/image/new/IMG-20240529-WA0012.jpg";
import image28 from "../../../public/image/new/IMG-20240614-WA0013.jpg";
import image29 from "../../../public/image/new/IMG-20240615-WA0018.jpg";
import image30 from "../../../public/image/new/IMG-20240615-WA0019.jpg";
import image31 from "../../../public/image/new/IMG-20240615-WA0020.jpg";
import image33 from "../../../public/image/new/IMG-20240615-WA0022.jpg";
import image34 from "../../../public/image/new/IMG-20240705-WA0023.jpg";
import image35 from "../../../public/image/new/IMG-20240705-WA0024.jpg";
import image36 from "../../../public/image/new/IMG-20240705-WA0025.jpg";
import image37 from "../../../public/image/new/IMG-20240705-WA0026.jpg";
import image38 from "../../../public/image/new/IMG-20240705-WA0027.jpg";
import image39 from "../../../public/image/new/IMG-20240705-WA0028.jpg";
import image40 from "../../../public/image/new/IMG-20240705-WA0029.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Daniella Doe",
      avatar: avatar1,
      role: "Mobile Developer",
      content:
        "The courses at this institute were incredibly comprehensive and hands-on. The instructors were experienced professionals who provided us with real-world scenarios to solve. I feel fully prepared for my career thanks to this program.",
    },
    {
      name: "Akriti Sharma",
      avatar: avatar2,
      role: "Marketing Specialist",
      content:
        "My time here has been transformative. The marketing strategies I learned have been directly applicable to my current job. The networking opportunities provided have also been invaluable.",
    },
    {
      name: "John Doe",
      avatar: avatar3,
      role: "Web Developer",
      content:
        "I had an amazing experience at this institute. The curriculum was up-to-date with the latest industry standards, and the projects we worked on really helped solidify my skills.",
    },
    {
      name: "Yanick Doe",
      avatar: image13,
      role: "Developer",
      content:
        "The learning environment here is fantastic. The small class sizes allowed for personalized attention, and the faculty's dedication to student success is evident in every aspect of the program.",
    },
    {
      name: "Sophia Liu",
      avatar: image15,
      role: "Chef",
      content:
        "As a culinary student, I appreciated the state-of-the-art kitchens and the diverse range of cuisines we were exposed to. The practical training was second to none.",
    },
    {
      name: "Michael Johnson",
      avatar: image4,
      role: "Hotel Manager",
      content:
        "The hospitality management program offered a perfect blend of theory and practice. The internships arranged by the institute gave me a head start in my career.",
    },
    {
      name: "Emily Carter",
      avatar: image5,
      role: "Event Planner",
      content:
        "Planning events has always been my passion, and this institute helped turn that passion into a profession. The hands-on projects and real-world case studies were incredibly beneficial.",
    },
    {
      name: "Daniel Lee",
      avatar: image7,
      role: "Restaurant Manager",
      content:
        "The training I received here was instrumental in my current role as a restaurant manager. The business acumen and operational skills taught were directly applicable.",
    },
    {
      name: "Ava Martinez",
      avatar: image9,
      role: "Pastry Chef",
      content:
        "The pastry and baking program exceeded my expectations. The instructors were master chefs who shared their wealth of knowledge and techniques with us.",
    },
    {
      name: "Noah Brown",
      avatar: image13,
      role: "Sommelier",
      content:
        "I gained an in-depth understanding of wine and spirits through the sommelier certification program. The tasting sessions and field trips were highlights of my education here.",
    },
    {
      name: "Isabella Wilson",
      avatar: image16,
      role: "Concierge",
      content:
        "The hospitality program prepared me well for the challenges of working in a luxury hotel. The customer service training was particularly valuable.",
    },
    {
      name: "Liam Davis",
      avatar: image18,
      role: "Catering Manager",
      content:
        "The institute's focus on practical experience meant that I was ready to hit the ground running in my first job. The faculty's industry connections helped me land my dream job.",
    },
    {
      name: "Mia Robinson",
      avatar: image19,
      role: "Travel Consultant",
      content:
        "Studying travel and tourism here was an incredible experience. The curriculum was diverse and covered all aspects of the industry, from travel planning to customer service.",
    },
    {
      name: "Elijah Clark",
      avatar: image20,
      role: "Bartender",
      content:
        "The bartending course was thorough and fun. I learned everything from classic cocktails to the latest trends in mixology. The hands-on training was particularly effective.",
    },
    {
      name: "Charlotte Lewis",
      avatar: image21,
      role: "Housekeeping Manager",
      content:
        "The housekeeping management program provided a deep dive into the operational aspects of hotel management. The skills I acquired here have been crucial in my career progression.",
    },
    {
      name: "Lucas Walker",
      avatar: image24,
      role: "Front Desk Supervisor",
      content:
        "This institute's focus on customer service excellence prepared me well for my role at the front desk. The role-playing exercises and real-world scenarios were particularly helpful.",
    },
    {
      name: "Amelia Hall",
      avatar: image25,
      role: "Tour Guide",
      content:
        "The tourism program was exceptional. The field trips and practical experiences helped me develop the skills needed to become a successful tour guide.",
    },
    {
      name: "James Young",
      avatar: image26,
      role: "Food and Beverage Manager",
      content:
        "The food and beverage management course was comprehensive and insightful. The focus on current trends and operational skills was particularly beneficial.",
    },
    {
      name: "Harper King",
      avatar: image27,
      role: "Event Coordinator",
      content:
        "The event management program offered at this institute was outstanding. The hands-on projects and real-world case studies were incredibly beneficial.",
    },
    {
      name: "Benjamin Scott",
      avatar: image28,
      role: "Chef de Cuisine",
      content:
        "The culinary arts program here is top-notch. The instructors are experienced chefs who provided invaluable insights and mentorship.",
    },
    {
      name: "Evelyn Harris",
      avatar: image29,
      role: "Hotel Front Office Manager",
      content:
        "The front office management course provided me with the skills and knowledge needed to excel in my current role. The practical training was particularly valuable.",
    },
    {
      name: "Henry Mitchell",
      avatar: image30,
      role: "Travel Agent",
      content:
        "The travel and tourism program was comprehensive and well-structured. The faculty's industry connections helped me secure a great job after graduation.",
    },
    {
      name: "Grace Carter",
      avatar: image31,
      role: "Executive Chef",
      content:
        "The culinary program offered at this institute was exceptional. The hands-on training and real-world experience were invaluable.",
    },

    {
      name: "Abigail Thompson",
      avatar: image33,
      role: "Bartender",
      content:
        "The bartending course was thorough and engaging. The practical training and real-world scenarios were particularly effective.",
    },
    {
      name: "William Adams",
      avatar: image34,
      role: "Hotel General Manager",
      content:
        "The hotel management program prepared me well for the challenges of working in a luxury hotel. The customer service training was particularly valuable.",
    },
    {
      name: "Emily Martin",
      avatar: image35,
      role: "Event Planner",
      content:
        "The event management program was comprehensive and well-structured. The faculty's industry connections helped me secure a great job after graduation.",
    },
    {
      name: "Alexander Anderson",
      avatar: image36,
      role: "Travel Consultant",
      content:
        "The travel and tourism program was exceptional. The field trips and practical experiences helped me develop the skills needed to become a successful travel consultant.",
    },
    {
      name: "Charlotte Martinez",
      avatar: image37,
      role: "Pastry Chef",
      content:
        "The pastry and baking program exceeded my expectations. The instructors were master chefs who shared their wealth of knowledge and techniques with us.",
    },
    {
      name: "James Taylor",
      avatar: image38,
      role: "Concierge",
      content:
        "The hospitality program prepared me well for the challenges of working in a luxury hotel. The customer service training was particularly valuable.",
    },
    {
      name: "Sophia Wilson",
      avatar: image39,
      role: "Catering Manager",
      content:
        "The institute's focus on practical experience meant that I was ready to hit the ground running in my first job. The faculty's industry connections helped me land my dream job.",
    },
    {
      name: "Benjamin Brown",
      avatar: image40,
      role: "Restaurant Manager",
      content:
        "The training I received here was instrumental in my current role as a restaurant manager. The business acumen and operational skills taught were directly applicable.",
    },
  ];

  return (
    <div
      className="text-gray-600 dark:text-gray-300 py-10 dark:bg-gray-900"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-10 bg-primary space-y-4 py-10 rounded-md px-6 md:px-0">
          <h2 className="text-4xl px-5 font-bold  text-white">Wall of love</h2>
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
      </div>
    </div>
  );
};

export default Testimonial;
