import Image from "next/image";
import React from "react";
import msme from "../../../public/image/msme logo.webp";
import iso from "../../../public/image/iso logo.jpg";
import vocational from "../../../public/image/cdevc.jpeg";

const Affiliates = () => {
  return (
    <div className="px-4 md:px-10 lg:px-24 pb-10 md:pb-16 lg:pb-20">
      <div className="flex flex-col items-center justify-center max-w-full overflow-hidden">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 text-center">
          Insights
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 lg:space-x-32 space-y-8 md:space-y-0 py-6 max-w-full">
          {/* Affiliate 1 */}
          <div className="flex flex-col items-center">
            <h1 className="font-semibold py-2 md:py-4 underline text-primary text-center">
              Registered as:
            </h1>
            <Image
              src={msme}
              alt="MSME Affiliate"
              className="object-cover rounded"
              width={130}
              height={130}
              sizes="(min-width: 768px) 200px, (min-width: 1024px) 260px, 180px"
            />
          </div>
          {/* Affiliate 2 */}
          <div className="flex flex-col items-center">
            <h1 className="font-semibold py-2 md:py-4 underline text-primary text-center">
              Certified by:
            </h1>
            <Image
              src={iso}
              alt="ISO Certification"
              className="object-cover rounded"
              width={130}
              height={130}
              sizes="(min-width: 768px) 200px, (min-width: 1024px) 260px, 180px"
            />
          </div>
          {/* Affiliate 3 */}
          <div className="flex flex-col items-center">
            <h1 className="font-semibold py-2 md:py-4 underline text-primary text-center">
              Affiliated to:
            </h1>
            <Image
              src={vocational}
              alt="Vocational Affiliate"
              className="object-cover rounded"
              width={130}
              height={130}
              sizes="(min-width: 768px) 200px, (min-width: 1024px) 260px, 180px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliates;
