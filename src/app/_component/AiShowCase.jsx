import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function AiShowCase() {
  const images1 = [
    { id: 1, image: "/img1.jpg" },
    { id: 2, image: "/img2.jpg" },
    { id: 3, image: "/img3.jpg" },
    { id: 4, image: "/img4.jpg" },
    { id: 5, image: "/img5.jpg" },
    { id: 6, image: "/img6.jpg" },
    { id: 7, image: "/img7.jpg" },
    { id: 8, image: "/img8.jpg" },
  ];
  const images2 = [
    { id: 9, image: "/img9s.jpg" },
    { id: 10, image: "/img10.jpg" },
    { id: 11, image: "/img11.jpg" },
    { id: 12, image: "/img12.jpg" },
    { id: 13, image: "/img13.jpg" },
    { id: 14, image: "/img14.jpg" },
    { id: 15, image: "/img15.jpg" },
    { id: 16, image: "/img16.jpg" },
  ];

  return (
    <div className="overflow-hidden mt-10 space-y-6">
      <div>
        <Marquee speed={80}>
          {images1.map((item) => (
            <Image
              key={item.id}
              src={item.image}
              alt="AI Showcase"
              width={1300}
              height={600}
              className="w-72 h-52 object-cover mx-2 rounded-2xl shadow-lg"
            />
          ))}
        </Marquee>
      </div>
      <div>
        <Marquee speed={80} direction="right">
          {images2.map((item) => (
            <Image
              key={item.id}
              src={item.image}
              alt="AI Showcase"
              width={1300}
              height={600}
              className="w-72 h-52 object-cover mx-2 rounded-2xl shadow-lg"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
