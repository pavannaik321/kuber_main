'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const data = [
  {
    src: '/carousel_image/mou2.jpeg',
    caption: 'Brainstorming session-VISION 2030',
  },
  {
    src: '/carousel_image/mou2.jpeg',
    caption: 'Glimpse of ZENITH Performance',
  },
  {
    src: '/carousel_image/mou2.jpeg',
    caption:
      'Project exhibition was organised during the Science Week Celebration "Vigyan Sarvatra Pujyate".',
  },
  {
    src: '/carousel_image/mou2.jpeg',
    caption:
      'Project exhibition was organised during the Science Week Celebration "Vigyan Sarvatra Pujyate".',
  },
  // ...more items
];

export default function CampusGlimpses() {
  return (
    <div className="relative text-center py-12 bg-white">
      <h2 className="text-3xl font-bold mb-10">
        <span className="text-red-600">CAMPUS </span>
        <span className="text-slate-800">GLIMPSES</span>
      </h2>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Swiper Arrows - Absolute Positioned */}
        <div className="swiper-button-prev !text-white absolute -left-6 top-1/2 -translate-y-1/2 z-10 ml-3" />
        <div className="swiper-button-next !text-white absolute -right-6 top-1/2 -translate-y-1/2 z-10 mr-3" />

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-md group">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/placeholder.png';
                  }}
                />
                <div className="absolute bottom-0 w-full bg-[#314863] bg-opacity-60 text-white text-sm p-3">
                  {item.caption}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
