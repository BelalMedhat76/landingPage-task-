

// "use client";
// import { useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import { useRouter, usePathname } from "next/navigation";
// import gsap from "gsap";
// import Link from "next/link";
// import { FiGlobe } from "react-icons/fi";

// export default function Navbar() {
//   const { i18n, t } = useTranslation();
//   const router = useRouter();
//   const pathname = usePathname();
//   const navRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       navRef.current,
//       { opacity: 0, y: -30 },
//       { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
//     );
//   }, []);

//   const toggleLanguage = () => {
//     const newLang = i18n.language === "en" ? "ar" : "en";
//     i18n.changeLanguage(newLang);
//     router.push(pathname);
//   };

//   return (
//     <nav
//       ref={navRef}
//       className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-5 bg-black bg-opacity-50 backdrop-blur-lg text-white z-50"
//     >
//       {/* Logo */}
//       <h1 className="text-2xl font-bold">{t("G Developments")}</h1>

//       {/* Navbar Links */}
//       <div className="hidden md:flex items-center gap-8">
//         <Link href="#" className="hover:opacity-80 transition">
//           {t("Our Communities")}
//         </Link>
//         <Link href="#" className="hover:opacity-80 transition">
//           {t("Latest Updates")}
//         </Link>

//         {/* Language Switcher */}
//         <button onClick={toggleLanguage} className="flex items-center gap-2">
         
//           <span>{i18n.language === "en" ? "العربية" : "English"}</span>
//           <FiGlobe className="text-xl" />
//         </button>

//         {/* Get in Touch Button */}
//         <button className="bg-white text-black px-5 py-2 rounded-full font-semibold">
//           {t("Get In Touch")}
//         </button>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden flex items-center">
//         <button className="text-white text-2xl">☰</button>
//       </div>
//     </nav>
//   );
// }


// "use client";
// import { useEffect, useRef, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useRouter, usePathname } from "next/navigation";
// import gsap from "gsap";
// import Link from "next/link";
// import { FiGlobe } from "react-icons/fi";

// export default function Navbar() {
//   const { i18n, t } = useTranslation();
//   const router = useRouter();
//   const pathname = usePathname();
//   const navRef = useRef(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Handle scroll event
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // GSAP animation for navbar
//   useEffect(() => {
//     gsap.fromTo(
//       navRef.current,
//       { opacity: 0, y: -30 },
//       { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
//     );
//   }, []);

//   // Toggle language
//   const toggleLanguage = () => {
//     const newLang = i18n.language === "en" ? "ar" : "en";
//     i18n.changeLanguage(newLang);
//     router.push(pathname);
//   };

//   // Toggle mobile menu
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav
//         ref={navRef}
//         className={`fixed top-0 left-0 w-full flex justify-between items-center px-8 py-5 ${
//           isScrolled ? "bg-black" : "bg-transparent"
//         }  text-white z-50 transition-colors duration-300`}
//       >
//         {/* Logo */}
//         <h1 className="text-2xl font-bold">{t("G Developments")}</h1>

//         {/* Desktop Navbar Links */}
//         <div className="hidden md:flex items-center gap-8">
//           <Link href="#" className="hover:opacity-80 transition ">
//             {t("Our Communities")}
//           </Link>
//           <Link href="#" className="hover:opacity-80 transition">
//             {t("Latest Updates")}
//           </Link>

//           {/* Language Switcher */}
//           <button onClick={toggleLanguage} className="flex items-center gap-2 bg-transparent">
//             <span>{i18n.language === "en" ? "العربية" : "English"}</span>
//             <FiGlobe className="text-xl" />
//           </button>

//           {/* Get in Touch Button */}
//           <button className="bg-white text-black px-4 py-2  rounded-full font-semibold">
//             {t("Get In Touch")}
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={toggleMobileMenu}
//             className="text-white text-2xl focus:outline-none bg-transparent"
//           >
//             {isMobileMenuOpen ? "✕" : "☰"}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 left-0 w-full h-1/2 bg-black bg-opacity-95 backdrop-blur-lg text-white z-40 transform transition-transform duration-300 ${
//           isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="flex flex-col items-center justify-center mt-10 h-full gap-6">
//           <Link href="#" className="hover:opacity-80 transition">
//             {t("Our Communities")}
//           </Link>
//           <Link href="#" className="hover:opacity-80 transition">
//             {t("Latest Updates")}
//           </Link>

//           {/* Language Switcher */}
//           <button onClick={toggleLanguage} className="flex items-center gap-2 bg-transparent">
//             <span>{i18n.language === "en" ? "العربية" : "English"}</span>
//             <FiGlobe className="text-xl" />
//           </button>

//           {/* Get in Touch Button */}
//           <button className="bg-white text-black px-5 py-2 rounded-full font-semibold">
//             {t("Get In Touch")}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import Link from "next/link";
import { FiGlobe } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation for navbar
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  // GSAP animation for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(menuRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
    } else {
      gsap.to(menuRef.current, { y: "-100%", opacity: 0, duration: 0.5, ease: "power2.in" });
    }
  }, [isMobileMenuOpen]);

  // Toggle language
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    router.push(pathname);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-8 py-5 ${
          isScrolled ? "bg-black" : "bg-transparent"
        } text-white z-50 transition-colors duration-300`}
      >
        {/* Logo */}
        <h1 className="text-2xl font-bold">{t("G Developments")}</h1>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="hover:opacity-80 transition ">{t("Our Communities")}</Link>
          <Link href="#" className="hover:opacity-80 transition">{t("Latest Updates")}</Link>
          
          {/* Language Switcher */}
          <button onClick={toggleLanguage} className="flex items-center gap-2 bg-transparent">
            <span>{i18n.language === "en" ? "العربية" : "English"}</span>
            <FiGlobe className="text-xl" />
          </button>
          
          {/* Get in Touch Button */}
          <button className="bg-white text-black px-4 py-2 rounded-full font-semibold">
            {t("Get In Touch")}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white text-3xl focus:outline-none bg-transparent">
            {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 backdrop-blur-lg text-white z-40 flex flex-col items-center justify-center gap-8 opacity-0 -translate-y-full"
      >
        <Link href="#" onClick={toggleMobileMenu} className="hover:opacity-80 transition text-xl">
          {t("Our Communities")}
        </Link>
        <Link href="#" onClick={toggleMobileMenu} className="hover:opacity-80 transition text-xl">
          {t("Latest Updates")}
        </Link>

        {/* Language Switcher */}
        <button onClick={toggleLanguage} className="flex items-center gap-2 text-xl bg-transparent">
          <span>{i18n.language === "en" ? "العربية" : "English"}</span>
          <FiGlobe className="text-2xl" />
        </button>

        {/* Get in Touch Button */}
        <button onClick={toggleMobileMenu} className="bg-white text-black px-6 py-3 rounded-full font-semibold text-lg">
          {t("Get In Touch")}
        </button>
      </div>
    </>
  );
}
