


// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

// const slides = [
//   {
//     id: 1,
//     category: "Seashell",
//     location: "Ras El Hekma",
//     title: "G Developments launches Seashell Ras El Hekma",
//     description:
//       "The first fully-integrated coastal resort at the heart of the North Coast’s Ras El Hekma.",
//     image: "/dis1.jpeg",
//     date: "News - May 2024",
//   },
//   {
//     id: 2,
//     category: "Real Estate",
//     location: "North Coast",
//     title: "G Developments launches Seashell Ras El Hekma",
//     description:
//       "Experience unparalleled luxury with our latest beachfront villas in the North Coast.",
//     image: "/disc2.png",
//     date: "News - May 2024",
//   },
//   {
//     id: 3,
//     category: "Seashell",
//     location: "Ras El Hekma",
//     title: "G Developments launches Seashell Ras El Hekma",
//     description:
//       "The first fully-integrated coastal resort at the heart of the North Coast’s Ras El Hekma.",
//     image: "/disc3.png",
//     date: "News - May 2024",
//   },
//   {
//     id: 4,
//     category: "Real Estate",
//     location: "North Coast",
//     title: "G Developments launches Seashell Ras El Hekma",
//     description:
//       "Experience unparalleled luxury with our latest beachfront villas in the North Coast.",
//     image: "/disc2.png",
//     date: "News - May 2024",
//   },
// ];

// const DiscoverLatest = () => {
//   const progressRef = useRef(null);
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const [progress, setProgress] = useState((1 / slides.length) * 100);
//   const [swiperInstance, setSwiperInstance] = useState(null);

//   useEffect(() => {
//     gsap.fromTo(
//       progressRef.current,
//       { width: "0%" },
//       { width: `${progress}%`, duration: 0.5, ease: "power3.out" }
//     );
//   }, [progress]);

//   useEffect(() => {
//     if (swiperInstance && prevRef.current && nextRef.current) {
//       swiperInstance.params.navigation.prevEl = prevRef.current;
//       swiperInstance.params.navigation.nextEl = nextRef.current;
//       swiperInstance.navigation.init();
//       swiperInstance.navigation.update();
//     }
//   }, [swiperInstance]);

//   const handleProgress = (swiper) => {
//     const newProgress = ((swiper.activeIndex + 1) / slides.length) * 100;
//     gsap.to(progressRef.current, { width: `${newProgress}%`, duration: 0.5 });
//     setProgress(newProgress);
//   };

//   return (
//     <section className="w-full px-6 py-10">
//       <div className="max-w-5xl mx-auto">
//         <div className="flex flex-col items-start mb-6 md:flex-row md:items-center md:justify-between">
//           <h2 className="text-3xl font-bold mb-2 md:mb-0">Discover our latest</h2>
//           <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 md:mt-0 mt-2 justify-center w-[160x] md:w-[160px">
//             Media Center <AiOutlineArrowRight />
//           </button>
//         </div>
//         <div className="relative">
//           <Swiper
//             spaceBetween={20}
//             slidesPerView={1}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 2 },
//               1280: { slidesPerView: 2 },
//             }}
//             onSlideChange={handleProgress}
//             onSwiper={setSwiperInstance} // Capture the Swiper instance
//             className="relative cursor-pointer"
//             modules={[Navigation]}
//           >
//             {slides.map((slide) => (
//               <SwiperSlide key={slide.id} className="relative">
//                 <img src={slide.image} alt={slide.title} className="w-full h-60 object-cover rounded-lg" />
//                 <div className="shadow-lg bg-white pl-5 pt-2 pr-3 md:pr-28 h-full md:h-[170px] rounded-lg mt-2">
//                   <p className="text-[#777777] mb-2"> {slide.date} </p>
//                   <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
//                   <p className="text-sm text-gray-900">{slide.description}</p>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           {/* Navigation buttons visible only on desktop */}
//           <button
//             ref={prevRef}
//             className="hidden md:flex absolute left-[-20px] z-50 top-1/2 transform -translate-y-1/2 bg-black p-3 rounded-full"
//           >
//             <AiOutlineArrowLeft className="text-white" />
//           </button>
//           <button
//             ref={nextRef}
//             className="hidden md:flex absolute right-[-20px] z-50 top-1/2 transform -translate-y-1/2 bg-black p-3 rounded-full"
//           >
//             <AiOutlineArrowRight className="text-white" />
//           </button>
//         </div>
//         <div className="w-full mt-4 h-1 bg-gray-300 rounded-full overflow-hidden">
//           <div ref={progressRef} className="h-full bg-black transition-all duration-300"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DiscoverLatest;


"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

gsap.registerPlugin(ScrollTrigger);

const DiscoverLatest = () => {
  const { t } = useTranslation();
  const slides = t("discover.slides", { returnObjects: true });

  const progressRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [progress, setProgress] = useState((1 / slides.length) * 100);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      progressRef.current,
      { width: "0%" },
      { width: `${progress}%`, duration: 0.5, ease: "power3.out" }
    );
  }, [progress]);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const handleProgress = (swiper) => {
    const newProgress = ((swiper.activeIndex + 1) / slides.length) * 100;
    gsap.to(progressRef.current, { width: `${newProgress}%`, duration: 0.5 });
    setProgress(newProgress);
  };

  return (
    <section className="w-full px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-start mb-6 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold mb-2 md:mb-0">{t("discover.title")}</h2>
          <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 md:mt-0 mt-2 justify-center w-[160x] md:w-[160px">
            {t("discover.button")} <AiOutlineArrowRight />
          </button>
        </div>
        <div className="relative">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 2 },
            }}
            onSlideChange={handleProgress}
            onSwiper={setSwiperInstance}
            className="relative cursor-pointer"
            modules={[Navigation]}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="relative">
                <img src={slide.image} alt={slide.title} className="w-full h-60 object-cover rounded-lg" />
                <div className="shadow-lg bg-white pl-5 pt-2 pr-3 md:pr-28 h-full md:h-[170px] rounded-lg mt-2">
                  <p className="text-[#777777] mb-2"> {slide.date} </p>
                  <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-sm text-gray-900">{slide.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            ref={prevRef}
            className="hidden md:flex absolute left-[-20px] z-50 top-1/2 transform -translate-y-1/2 bg-black p-3 rounded-full"
          >
            <AiOutlineArrowLeft className="text-white" />
          </button>
          <button
            ref={nextRef}
            className="hidden md:flex absolute right-[-20px] z-50 top-1/2 transform -translate-y-1/2 bg-black p-3 rounded-full"
          >
            <AiOutlineArrowRight className="text-white" />
          </button>
        </div>
        <div className="w-full mt-4 h-1 bg-gray-300 rounded-full overflow-hidden">
          <div ref={progressRef} className="h-full bg-black transition-all duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverLatest;
