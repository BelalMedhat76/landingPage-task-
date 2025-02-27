

// "use client";
// import { useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import gsap from "gsap";
// import Image from "next/image";

// const Hero = () => {
//   const heroRef = useRef(null);
//   const textRef = useRef(null);
//   const descRef1 = useRef(null);
//   const descRef2 = useRef(null);
//   const { t } = useTranslation();

//   useEffect(() => {
//     gsap.fromTo(
//       heroRef.current,
//       { opacity: 0, scale: 1.1 },
//       { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
//     );

//     gsap.fromTo(
//       textRef.current,
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
//     );

//     gsap.fromTo(
//       descRef1.current,
//       { y: 30, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.8 }
//     );

//     gsap.fromTo(
//       descRef2.current,
//       { y: 30, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1 }
//     );
//   }, []);

//   return (
//     <div ref={heroRef} className="relative w-full h-screen">
//       <Image
//         src="/hero.png" // Replace with your image path
//         alt="Hero Background"
//         height={100}
//         width={100}
//         className="absolute w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 flex flex-col justify-center items-start px-10 lg:px-24 text-white">
//         <h1
//           ref={textRef}
//           className="font-['Helvetica Now Display'] font-medium text-[10vw] lg:text-[120px] leading-[10vw] lg:leading-[150px] text-[#FFFFFF]"
//         >
//           {t("about_us")}
//         </h1>
//      <div className="w-[956px] ">
//      <p
//           ref={descRef1}
//           className="font-['Helvetica Now Display'] font-medium text-[28px] leading-[35px] text-[#FFFFFF] mt-4 max-w-2xl"
//         >
//           {t("about_us_desc1")}
//         </p>
       
//           <p
//             ref={descRef2}
//             className="font-['Helvetica Now Display'] font-medium text-[28px] leading-[35px] text-[#FFFFFF] text-ellipsis overflow-hidden"
//           >
//             {t("about_us_desc2")}
//           </p>
      
//      </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// "use client";
// import { useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import gsap from "gsap";
// import Image from "next/image";

// const Hero = () => {
//   const heroRef = useRef(null);
//   const textRef = useRef(null);
//   const descRef1 = useRef(null);
//   const descRef2 = useRef(null);
//   const { t } = useTranslation();

//   useEffect(() => {
//     gsap.fromTo(
//       heroRef.current,
//       { opacity: 0, scale: 1.1 },
//       { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
//     );

//     gsap.fromTo(
//       textRef.current,
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
//     );

//     gsap.fromTo(
//       descRef1.current,
//       { y: 30, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.8 }
//     );

//     gsap.fromTo(
//       descRef2.current,
//       { y: 30, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1 }
//     );
//   }, []);

//   return (
//     <div ref={heroRef} className="relative w-full h-screen">
//       <Image
//         src="/hero.png" // Replace with your image path
//         alt="Hero Background"
//         height={100}
//         width={100}
//         className="absolute w-full h-full object-cover"
//       />
//       <div className="absolute bottom-20 left-10 lg:left-24 flex flex-col text-white px-5 lg:px-10">
//         <h1
//           ref={textRef}
//           className="font-['Helvetica Now Display'] font-medium text-[10vw] lg:text-[100px] leading-[10vw] lg:leading-[110px] text-[#FFFFFF]"
//         >
//           {t("about_us")}
//         </h1>
//         <div className="max-w-[95%] lg:max-w-[956px]">
//           <p
//             ref={descRef1}
//             className="font-['Helvetica Now Display'] font-medium text-[5vw] lg:text-[28px] leading-[6vw] lg:leading-[35px] text-[#FFFFFF] "
//           >
//             {t("about_us_desc1")}
//           </p>
//           <p
//             ref={descRef2}
//             className="font-['Helvetica Now Display'] font-medium text-[5vw] lg:text-[28px] leading-[6vw] lg:leading-[35px] text-[#FFFFFF] text-ellipsis overflow-hidden"
//           >
//             {t("about_us_desc2")}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


"use client";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import Image from "next/image";

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const descRef1 = useRef(null);
  const descRef2 = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
    );

    gsap.fromTo(
      descRef1.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.8 }
    );

    gsap.fromTo(
      descRef2.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1 }
    );
  }, []);

  return (
    <div ref={heroRef} className="relative w-full h-screen">
      {/* Hero Image */}
      <Image
        src="/hero.png" // Replace with your image path
        alt="Hero Background"
        height={100}
        width={100}
        className="absolute w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute w-full h-full bg-gradient-to-tr from-transparent via-black/50 to-black/90"
      ></div>

      {/* Text Content */}
      <div className="absolute bottom-20 left-10 lg:left-24 flex flex-col text-white px-5 lg:px-10">
        <h1
          ref={textRef}
          className="font-['Helvetica Now Display'] font-medium text-[10vw] lg:text-[100px] leading-[10vw] lg:leading-[110px] text-[#FFFFFF]"
        >
          {t("about_us")}
        </h1>
        <div className="max-w-[95%] mt-3 lg:max-w-[956px]">
          <p
            ref={descRef1}
            className="font-['Helvetica Now Display'] font-medium text-[5vw] lg:text-[28px] leading-[6vw] lg:leading-[35px] text-[#FFFFFF] "
          >
            {t("about_us_desc1")}
          </p>
          <p
            ref={descRef2}
            className="font-['Helvetica Now Display'] font-medium text-[5vw] lg:text-[28px] leading-[6vw] lg:leading-[35px] text-[#FFFFFF] text-ellipsis overflow-hidden"
          >
            {t("about_us_desc2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;