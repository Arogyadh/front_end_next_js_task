"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const images = [
  {
    name: "Be Part of a local festival",
    src: "/assets/1.png",
  },
  {
    name: "Meet the living Goddess Kumari",
    src: "/assets/2.png",
  },
  {
    name: "Explore Chitwan",
    src: "/assets/3.png",
  },
  {
    name: "Magic Pokhara",
    src: "/assets/4.png",
  },
];

const Banner = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full h-full overflow-hidden bg-gray-200 pt-12 ">
      <div className="text-6xl font-dancing ml-10">Offers</div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.src}
              alt={`image ${index + 1}`}
              height={50}
              width={50}
              layout="responsive"
              className="p-7 rounded-[100px] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
