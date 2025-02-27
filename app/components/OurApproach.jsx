// "use client";

// import { useState } from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// const approachData = [
//   {
//     id: 1,
//     title: "Location",
//     content:
//       "Location serves as the foundation upon which we curate remarkable living spaces. We rigorously evaluate each plot we choose, with a focus on accessibility, convenience, and potential for growth. Our strategic selection spans diverse areas across the city, guaranteeing you the best of every neighborhood.",
//   },
//   {
//     id: 2,
//     title: "Design",
//     content:
//       "Our design philosophy combines aesthetics and functionality to create timeless living spaces. Each project is carefully crafted to reflect modern elegance while ensuring practicality and comfort.",
//   },
//   {
//     id: 3,
//     title: "Construction",
//     content:
//       "We employ advanced construction techniques and high-quality materials to ensure durability and sustainability. Our rigorous quality control measures guarantee that every project meets industry standards.",
//   },
//   {
//     id: 4,
//     title: "End-to-End Service",
//     content:
//       "From initial planning to final execution, our team provides comprehensive project management, ensuring a seamless and hassle-free experience for our clients.",
//   },
// ];

// const OurApproach = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="w-full flex justify-center px-4 bg-white">
//       <div className="max-w-[1000px] w-full flex flex-col md:flex-row">
//         {/* Left Heading */}
//         <div className="w-full md:w-1/3">
//           <h2 className="text-2xl font-semibold text-[#777777]">Our Approach</h2>
//         </div>

//         {/* Right Accordion Content */}
//         <div className="w-full md:w-2/3">
//           {approachData.map((item, index) => (
//             <div
//               key={item.id}
//               className="border-b border-gray-300 py-4 cursor-pointer"
//               onClick={() => toggleAccordion(index)}
//             >
//               {/* Title & Icon */}
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-medium text-black">
//                   {item.id.toString().padStart(2, "0")} {item.title}
//                 </h3>
//                 {activeIndex === index ? (
//                   <AiOutlineMinus className="w-5 h-5 text-gray-900" />
//                 ) : (
//                   <AiOutlinePlus className="w-5 h-5 text-gray-900" />
//                 )}
//               </div>

//               {/* Expanded Content */}
//               {activeIndex === index && (
//                 <p className="text-gray-600 mt-2 text-sm">{item.content}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurApproach;


"use client";

import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const OurApproach = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0); // First tab open by default

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center px-4 bg-white">
      <div className="max-w-[1000px] w-full flex flex-col md:flex-row">
        {/* Left Heading */}
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-semibold text-[#777777]">{t("approach.title")}</h2>
        </div>

        {/* Right Accordion Content */}
        <div className="w-full md:w-2/3">
          {t("approach.sections", { returnObjects: true }).map((item, index) => (
            <div
              key={item.id}
              className="border-b border-gray-300 py-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              {/* Title & Icon */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-black">
                  {item.id.toString().padStart(2, "0")} {item.title}
                </h3>
                {activeIndex === index ? (
                  <AiOutlineMinus className="w-5 h-5 text-gray-900" />
                ) : (
                  <AiOutlinePlus className="w-5 h-5 text-gray-900" />
                )}
              </div>

              {/* Expanded Content */}
              {activeIndex === index && (
                <p className="text-gray-600 mt-2 text-sm">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
