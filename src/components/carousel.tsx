"use client";

// import { useState, useEffect } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carouselImages = [
  "/carousel_image/carousel1.webp", // Replace with actual image paths
  "/carousel_image/carousel2.webp",
  "/carousel_image/carousel1.webp",
];

export default function HeroCarousel() {
  return (
    <div className="w-full relative mt-4 z-10 bg-white">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={600}
        emulateTouch
      >
        {carouselImages.map((src, index) => (
          <div key={index} className="relative w-full h-[500px]">
            <Image
              src={src}
              alt={`Carousel Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            //   className="rounded-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
