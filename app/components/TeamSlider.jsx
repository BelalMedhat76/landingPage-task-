

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import { IoMdAdd } from "react-icons/io"; // Plus Icon

// // Register GSAP Plugin
// gsap.registerPlugin(ScrollTrigger);

// const teamMembers = [
//   { id: 1, name: "Akram Ziyad", title: "Vice President - Strategy", image: "/prof1.png" },
//   { id: 2, name: "Ahmed Khaled", title: "Vice President - Real Estate", image: "/prof2.png" },
//   { id: 3, name: "Mona Wael", title: "Head of People", image: "/prof3.png" },
//   { id: 4, name: "Sara Ali", title: "Marketing Director", image: "/prof2.png" },
//   { id: 5, name: "Omar Nasser", title: "CTO", image: "/prof1.png" },
//   { id: 6, name: "Layla Hassan", title: "CFO", image: "/prof3.png" },
// ];

// const TeamSlider = () => {
//   const sliderRef = useRef(null);
//   const progressRef = useRef(null);
//   const swiperRef = useRef(null);
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const [progress, setProgress] = useState(100 / teamMembers.length);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect screen size for responsive behavior
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     gsap.fromTo(
//       sliderRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sliderRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   }, []);

//   // Function to move to the next slide when clicking the Plus button
//   const goToNextSlide = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slideNext();
//     }
//   };

//   return (
//     <section ref={sliderRef} className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-10">
//       <div className="relative w-full max-w-[1000px]">
//       <Swiper
//   spaceBetween={20} // Increased spacing for mobile
//   slidesPerView={1}
//   breakpoints={{
//     640: { slidesPerView: 1, spaceBetween: 20 }, // More space on small screens
//     768: { slidesPerView: 2, spaceBetween: 15 }, 
//     1024: { slidesPerView: 3, spaceBetween: 10 }, // Default spacing for large screens
//   }}
//   onSwiper={(swiper) => {
//     swiperRef.current = swiper;
//     setTimeout(() => {
//       if (swiper.params.navigation) {
//         swiper.params.navigation.prevEl = prevRef.current;
//         swiper.params.navigation.nextEl = nextRef.current;
//         swiper.navigation.init();
//         swiper.navigation.update();
//       }
//     });
//   }}
//   onSlideChange={(swiper) => {
//     const totalSlides = teamMembers.length;
//     const newProgress = ((swiper.activeIndex + 1) / totalSlides) * 100;
//     setProgress(newProgress);
//   }}
//   modules={[Navigation]}
//   className="relative"
//   navigation={false} // ❌ Disabled default navigation arrows
// >

//           {teamMembers.map((member) => (
//             <SwiperSlide key={member.id} className="flex justify-center pl-10">
//               <div className="relative w-[300px] h-[420px] bg-[#F6F6F6] md:w-[320px] md:h-[440px] rounded-lg overflow-hidden shadow-lg">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   width={320}
//                   height={440}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 w-[300px] py-3 shadow-md text-start">
//                   <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
//                   <p className="text-sm text-gray-600">{member.title}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Desktop Navigation Arrows */}
//         {!isMobile && (
//           <>
//             <button
//               ref={prevRef}
//               className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-black p-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300 z-50"
//               onClick={() => swiperRef.current?.slidePrev()}
//             >
//               <AiOutlineArrowLeft className="w-6 h-6 text-white" />
//             </button>
//             <button
//               ref={nextRef}
//               className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-black p-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300 z-50"
//               onClick={() => swiperRef.current?.slideNext()}
//             >
//               <AiOutlineArrowRight className="w-6 h-6 text-white" />
//             </button>
//           </>
//         )}

//         {/* Mobile Plus Button (Shows Only on Small Screens) */}
//         {isMobile && (
//           <button
//             onClick={goToNextSlide}
//             className="absolute right-2 bottom-10 bg-black text-white p-4 rounded-full shadow-md flex items-center justify-center transition duration-300 hover:bg-gray-800 z-50"
//           >
//             <IoMdAdd className="w-3 h-3" />
//           </button>
//         )}

//         {/* Progress Bar */}
//         <div className="w-full mt-6 h-1 bg-gray-300 rounded-full overflow-hidden">
//           <div
//             ref={progressRef}
//             className="h-full bg-black transition-all duration-300"
//             style={{ width: `${progress}%` }}
//           ></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSlider;


"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io"; // Plus Icon
import { useTranslation } from "react-i18next"; // Import translation

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const TeamSlider = () => {
  const { t } = useTranslation();
  const sliderRef = useRef(null);
  const progressRef = useRef(null);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [progress, setProgress] = useState(100 / 6);
  const [isMobile, setIsMobile] = useState(false);

  const teamMembers = [
    { id: 1, name: t("akram_ziyad_name"), title: t("akram_ziyad_title"), image: "/prof1.png" },
    { id: 2, name: t("ahmed_khaled_name"), title: t("ahmed_khaled_title"), image: "/prof2.png" },
    { id: 3, name: t("mona_wael_name"), title: t("mona_wael_title"), image: "/prof3.png" },
    { id: 4, name: t("sara_ali_name"), title: t("sara_ali_title"), image: "/prof2.png" },
    { id: 5, name: t("omar_nasser_name"), title: t("omar_nasser_title"), image: "/prof1.png" },
    { id: 6, name: t("layla_hassan_name"), title: t("layla_hassan_title"), image: "/prof3.png" },
  ];

  // Detect screen size for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      sliderRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section ref={sliderRef} className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-[1000px]">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setTimeout(() => {
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
          onSlideChange={(swiper) => {
            const totalSlides = teamMembers.length;
            const newProgress = ((swiper.activeIndex + 1) / totalSlides) * 100;
            setProgress(newProgress);
          }}
          modules={[Navigation]}
          className="relative"
          navigation={false}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id} className="flex justify-center pl-10">
              <div className="relative w-[300px] h-[420px] bg-[#F6F6F6] md:w-[320px] md:h-[440px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={320}
                  height={440}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 w-[300px] py-3 shadow-md text-start">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Desktop Navigation Arrows */}
        {!isMobile && (
          <>
            <button
              ref={prevRef}
              className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-black p-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300 z-50"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <AiOutlineArrowLeft className="w-6 h-6 text-white" />
            </button>
            <button
              ref={nextRef}
              className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-black p-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300 z-50"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <AiOutlineArrowRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}

        {/* Mobile Plus Button */}
        {isMobile && (
          <button
            onClick={goToNextSlide}
            className="absolute right-2 bottom-10 bg-black text-white p-4 rounded-full shadow-md flex items-center justify-center transition duration-300 hover:bg-gray-800 z-50"
          >
            <IoMdAdd className="w-3 h-3" />
          </button>
        )}

        {/* Progress Bar */}
        <div className="w-full mt-6 h-1 bg-gray-300 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-black transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;
