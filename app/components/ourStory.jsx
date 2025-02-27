


// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const OurStory = () => {
//   const storyRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       storyRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.5 }
//     );
//   }, []);

//   return (
//     <section
//       ref={storyRef}
//       className="w-full max-w-[1400px] flex flex-col lg:flex-row justify-between items-start gap-[40px] lg:gap-[100px] mx-auto p-[40px_20px] lg:p-[40px_56px]"
//     >
//       {/* Left Side */}
//       <div className="w-full lg:w-1/2 text-left font-['Helvetica Now Display'] font-medium text-[24px] lg:text-[28px]  lg:px-10 leading-[30px] lg:leading-[35px] text-[#777777]">
//         Our Story
//       </div>

//       {/* Right Side */}
//       <div className="w-full lg:w-1/2 font-['Helvetica Now Display'] font-medium text-[20px] lg:text-[28px] leading-[30px] lg:leading-[35px] text-[#000000]">
//         We are a family-owned real estate development company based in Egypt.
//         Since 1955, we have been committed to delivering timeless, quality
//         developments that epitomize comfort and functionality.
//       </div>
//     </section>
//   );
// };

// export default OurStory;

"use client";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";

const OurStory = () => {
  const { t } = useTranslation();
  const storyRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      storyRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <section
      ref={storyRef}
      className="w-full max-w-[1400px] flex flex-col lg:flex-row justify-between items-start gap-[40px] lg:gap-[100px] mx-auto p-[40px_20px] lg:p-[40px_56px]"
    >
      {/* Left Side */}
      <div className="w-full lg:w-1/2 text-left font-['Helvetica Now Display'] font-medium text-[24px] lg:text-[28px]  lg:px-10 leading-[30px] lg:leading-[35px] text-[#777777]">
        {t("our_story")}
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 font-['Helvetica Now Display'] font-medium text-[20px] lg:text-[23px] leading-[30px] lg:leading-[35px] text-[#000000]">
        {t("company_description")}
      </div>
    </section>
  );
};

export default OurStory;
