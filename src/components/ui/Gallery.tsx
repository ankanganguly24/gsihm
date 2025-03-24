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
import image41 from "../../../public/image/new/IMG-20240705-WA0031.jpg";
import image42 from "../../../public/image/new/IMG-20240705-WA0032.jpg";
import image43 from "../../../public/image/new/IMG-20240705-WA0033.jpg";
import image44 from "../../../public/image/new/IMG-20240705-WA0034.jpg";
import image45 from "../../../public/image/new/IMG-20240705-WA0035.jpg";
import image46 from "../../../public/image/new/IMG-20240705-WA0036.jpg";
import image47 from "../../../public/image/new/IMG-20240723-WA0014.jpg";
import image48 from "../../../public/image/new/IMG-20240723-WA0018.jpg";
import image49 from "../../../public/image/new/avatar1.jpg";
import image50 from "../../../public/image/new/avatar2.jpg";
import image51 from "../../../public/image/new/avatar3.jpg";
import image52 from "../../../public/image/new/aboutusimg.jpg";
import image53 from "../../../public/image/shristy.jpeg";

type GalleryProps = {
  count?: number;
  showHeader?: boolean;
};

const Gallery: React.FC<GalleryProps> = ({ count, showHeader = true }) => {
  const images = [
    image1,
    image2,
    image4,
    image5,
    image7,
    image9,
    image13,
    image15,
    image16,
    image18,
    image19,
    image20,
    image21,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image33,
    image34,
    image35,
    image36,
    image37,
    image38,
    image39,
    image40,
    image41,
    image42,
    image43,
    image44,
    image45,
    image46,
    image47,
    image48,
    image49,
    image50,
    image51,
    image52,
    image53,
  ];

  // If count is provided and is a positive number, limit the number of images
  const displayedImages = count && count > 0 ? images.slice(0, count) : images;

  return (
    <>
      {showHeader && (
        <div className="bg-primary text-white h-32 px-6 md:px-32 flex flex-col justify-center">
          <h1 className="text-2xl font-bold">Home / Gallery</h1>
        </div>
      )}
      <div className="px-6 md:px-32 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {displayedImages.map((src, index) => (
            <div key={index} className="grid gap-4">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={src}
                alt=""
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
