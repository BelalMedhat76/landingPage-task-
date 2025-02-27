

// "use client";
// import { useEffect, useState } from "react";
// import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
// import { AiOutlineArrowUp } from "react-icons/ai";
// import Link from "next/link";
// import { gsap } from "gsap";
// import { useLayoutEffect } from "react";

// const Footer = () => {
//   const [showScroll, setShowScroll] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScroll(window.scrollY > 300);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useLayoutEffect(() => {
//     gsap.fromTo(
//       ".footer-content",
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.3 }
//     );
//   }, []);

//   return (
//     <footer className="bg-[#000000] text-white px-4 sm:px-8 lg:px-14 py-8 sm:py-12 lg:py-16 relative w-full">
//       {/* Top Navigation - Left Aligned */}
//       <nav className="flex flex-wrap gap-4 sm:gap-6 text-sm mb-8">
//         <Link href="/about" className="hover:underline">
//           About us
//         </Link>
//         <Link href="/connection" className="hover:underline">
//           Our Connection
//         </Link>
//         <Link href="/updates" className="hover:underline">
//           Latest Updates
//         </Link>
//         <Link href="/cations" className="hover:underline">
//           Careers
//         </Link>
//         <Link href="/faqs" className="hover:underline">
//           FAQs
//         </Link>
//         <Link href="/contact" className="hover:underline">
//           Contact us
//         </Link>
//       </nav>

//       {/* Main Footer Content - Centered */}
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start relative py-6 lg:py-10 footer-content">
//         {/* LEFT - Branding (Bottom Left) */}
//         <h1 className="text-3xl sm:text-5xl lg:text-5xl absolute bottom-[-10px] left-[-10px] font-extrabold">
//           G Developments
//         </h1>

//         {/* RIGHT - Row Layout */}
//         <div className="w-full relative lg:w-auto flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-20 text-left ml-auto">
//           {/* Interest Form Section */}
//           <div className="lg:absolute lg:top-[-80px] mb-8 sm:mb-0">
//             <h3 className="text-sm text-gray-400">INTEREST FORM</h3>
//             <p className="text-sm mt-1">Looking for something specific</p>
//             <Link
//               href="/submit-interest"
//               className="text-white font-bold flex items-center gap-2 hover:underline"
//             >
//               Submit Your Interest <AiOutlineArrowUp className="transform rotate-45" />
//             </Link>
//           </div>

//           {/* SOCIAL Section */}
//           <div>
//             <h3 className="text-sm text-gray-400">SOCIAL</h3>
//             <ul className="mt-2 space-y-1">
//               <li>
//                 <Link href="https://instagram.com" className="flex items-center gap-2 hover:underline">
//                   Instagram
//                 </Link>
//               </li>
//               <li>
//                 <Link href="https://linkedin.com" className="flex items-center gap-2 hover:underline">
//                   LinkedIn
//                 </Link>
//               </li>
//               <li>
//                 <Link href="https://facebook.com" className="flex items-center gap-2 hover:underline">
//                   Facebook
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* CONTACTINFO Section */}
//           <div className="mb-5">
//             <h3 className="text-sm text-gray-400">CONTACT INFO</h3>
//             <p className="text-sm mt-1">info@gdevelopments.com</p>
//             <p className="text-sm mt-1">16738</p>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section - Centered */}
//       <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400 mt-8 sm:mt-12">
//         <p className="mb-4 sm:mb-0">© 2024 G Developments. All rights reserved.</p>
//         <div className="flex gap-4 mb-4 sm:mb-0">
//           <Link href="/privacy" className="hover:underline">
//             Privacy
//           </Link>
//           <Link href="/terms" className="hover:underline">
//             Terms & Conditions
//           </Link>
//         </div>
//         <p>
//           Website by{" "}
//           <Link href="https://zebiadealers.com" className="text-white hover:underline">
//             Mitch Designs
//           </Link>
//         </p>
//       </div>

//       {/* Scroll to Top Button (Fixed at Top-Right of Footer) */}
//       {showScroll && (
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="z-50 absolute top-4 right-4 sm:top-6 sm:right-6  bg-black text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-300 transition-all"
//         >
//           <AiOutlineArrowUp size={20} />
//         </button>
//       )}
//     </footer>
//   );
// };

// export default Footer;

"use client";
import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";
import Link from "next/link";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".footer-content",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  return (
    <footer className="bg-[#000000] text-white px-4 sm:px-8 lg:px-14 py-8 sm:py-12 lg:py-16 relative w-full">
      {/* Top Navigation - Left Aligned */}
      <nav className="flex flex-wrap gap-4 sm:gap-6 text-sm mb-8">
        <Link href="/about" className="hover:underline">{t("about_us")}</Link>
        <Link href="/connection" className="hover:underline">{t("our_connection")}</Link>
        <Link href="/updates" className="hover:underline">{t("latest_updates")}</Link>
        <Link href="/careers" className="hover:underline">{t("careers")}</Link>
        <Link href="/faqs" className="hover:underline">{t("faqs")}</Link>
        <Link href="/contact" className="hover:underline">{t("contact_us")}</Link>
      </nav>

      {/* Main Footer Content - Centered */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start relative py-6 lg:py-10 footer-content">
        <h1 className="text-3xl sm:text-5xl lg:text-5xl absolute bottom-[-10px] left-[-10px] font-extrabold">
          G Developments
        </h1>

        <div className="w-full relative lg:w-auto flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-20 text-left ml-auto">
          <div className="lg:absolute lg:top-[-80px] mb-8 sm:mb-0">
            <h3 className="text-sm text-gray-400">{t("interest_form")}</h3>
            <p className="text-sm mt-1">{t("looking_for_something")}</p>
            <Link href="/submit-interest" className="text-white font-bold flex items-center gap-2 hover:underline">
              {t("submit_your_interest")} <AiOutlineArrowUp className="transform rotate-45" />
            </Link>
          </div>

          <div>
            <h3 className="text-sm text-gray-400">{t("social")}</h3>
            <ul className="mt-2 space-y-1">
              <li><Link href="https://instagram.com" className="flex items-center gap-2 hover:underline">{t("instagram")}</Link></li>
              <li><Link href="https://linkedin.com" className="flex items-center gap-2 hover:underline">{t("linkedin")}</Link></li>
              <li><Link href="https://facebook.com" className="flex items-center gap-2 hover:underline">{t("facebook")}</Link></li>
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="text-sm text-gray-400">{t("contact_info")}</h3>
            <p className="text-sm mt-1">{t("email")}</p>
            <p className="text-sm mt-1">{t("phone")}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400 mt-8 sm:mt-12">
        <p className="mb-4 sm:mb-0">{t("copyright")}</p>
        <div className="flex gap-4 mb-4 sm:mb-0">
          <Link href="/privacy" className="hover:underline">{t("privacy")}</Link>
          <Link href="/terms" className="hover:underline">{t("terms_conditions")}</Link>
        </div>
        <p>
          {t("website_by")} <Link href="https://zebiadealers.com" className="text-white hover:underline">{t("mitch_designs")}</Link>
        </p>
      </div>

      {showScroll && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="z-50 absolute top-4 right-4 sm:top-6 sm:right-6 bg-black text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-300 transition-all">
          <AiOutlineArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
