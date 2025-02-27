
// "use client";
// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const stats = [
//   {
//     id: 1,
//     image: "/pro1.png",
//     number: "9,588,112",
//     title: "Total landbank",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sit amet consectetur adipiscing elit.",
//   },
//   {
//     id: 2,
//     image: "/pro2.png",
//     number: "8",
//     title: "Projects",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sit amet consectetur adipiscing elit.",
//   },
//   {
//     id: 3,
//     image: "/pro3.png",
//     number: "60",
//     title: "Years of operation",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna sit amet consectetur adipiscing elit.",
//   },
// ];

// const StatsSection = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const sections = sectionRef.current.querySelectorAll(".stat-item");

//     gsap.fromTo(
//       sections,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         stagger: 0.3,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   }, []);

//   return (
//     <section ref={sectionRef} className="w-full max-w-[1400px] mx-auto px-4 md:px-20 py-10">
//       {stats.map((stat, index) => (
//         <div
//           key={stat.id}
//           className={`stat-item flex flex-col md:flex-row items-stretch gap-6 md:gap-10 h-auto md:h-[300px] border-b border-gray-300 pb-6 md:pb-10 px-1 md:px-1 mt-1 md:mt-10 mb-6 md:mb-10 ${
//             index === stats.length - 1 ? "border-none" : ""
//           }`} 
//         >
//           {/* Left Side - Image (Same Height as Text) */}
//           <div className="w-full md:w-1/2 flex h-auto md:h-full">
//             <Image
//               src={stat.image}
//               alt={stat.title}
//               width={700}
//               height={300}
//               className="w-full h-auto md:h-full object-cover"
//             />
//           </div>

//           {/* Right Side - Content (Aligned Left) */}
//           <div className="w-full md:w-1/2 flex flex-col justify-center text-left px-1 md:px-1">
//             <h2 className="text-[28px] md:text-[40px] font-semibold">{stat.number}</h2>
//             <h3 className="text-[22px] md:text-[28px] font-medium mt-2">{stat.title}</h3>
//             <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] mt-4 text-gray-600">
//               {stat.description}
//             </p>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default StatsSection;


"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 1,
      image: "/pro1.png",
      number: t("total_landbank_number"),
      title: t("total_landbank_title"),
      description: t("total_landbank_description"),
    },
    {
      id: 2,
      image: "/pro2.png",
      number: t("projects_number"),
      title: t("projects_title"),
      description: t("projects_description"),
    },
    {
      id: 3,
      image: "/pro3.png",
      number: t("years_of_operation_number"),
      title: t("years_of_operation_title"),
      description: t("years_of_operation_description"),
    },
  ];

  useEffect(() => {
    const sections = sectionRef.current.querySelectorAll(".stat-item");

    gsap.fromTo(
      sections,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-full max-w-[1400px] mx-auto px-4 md:px-20 py-10">
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className={`stat-item flex flex-col md:flex-row items-stretch gap-6 md:gap-10 h-auto md:h-[300px] border-b border-gray-300 pb-6 md:pb-10 px-1 md:px-1 mt-1 md:mt-10 mb-6 md:mb-10 ${
            index === stats.length - 1 ? "border-none" : ""
          }`} 
        >
          {/* Left Side - Image (Same Height as Text) */}
          <div className="w-full md:w-1/2 flex h-auto md:h-full">
            <Image
              src={stat.image}
              alt={stat.title}
              width={700}
              height={300}
              className="w-full h-auto md:h-full object-cover"
            />
          </div>

          {/* Right Side - Content (Aligned Left) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-left px-1 md:px-1">
            <h2 className="text-[28px] md:text-[40px] font-semibold">{stat.number}</h2>
            <h3 className="text-[22px] md:text-[28px] font-medium mt-2">{stat.title}</h3>
            <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] mt-4 text-gray-600">
              {stat.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
