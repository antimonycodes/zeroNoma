import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/Nomalogo.png";
import brandName from "../assets/logo.png.png";
// import logoWhite from "../assets/footerLogo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

interface NavProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
  scrollToSection: (sectionId: string) => void;
}

const Nav: React.FC<NavProps> = ({
  activeLink,
  setActiveLink,
  scrollToSection,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navlinks = [
    { name: "Home" },
    { name: "AboutUs" },
    { name: "Campaigns" },
    { name: "Blog" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleItemClick = (sectionName: string) => {
    document.body.classList.remove("no-scroll");
    scrollToSection(sectionName);
    setActiveLink(sectionName);
    if (menuOpen) {
      // Only toggle menu if it's open (i.e., mobile view)
      setMenuOpen(false);
    }
  };

  const menuVariants = {
    // hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Reducing stagger to make it feel sleeker
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      }, // Adjusted for smoother, faster animation
    },
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  return (
    <div
      className={` mx-0 md:mx-8 xl:mx-12 py-4 px-4 flex items-center justify-between  md:rounded-none bg-white shadow ${
        scrolled ? "shadow-slate-300" : ""
      }`}
    >
      <div className="flex items-center gap-1">
        <img src={logo} alt="logo" width={30} />
        <img src={brandName} alt="brand Name" width={80} />
      </div>
      <div className="items-center justify-between md:gap-8 xl:gap-12 hidden md:flex">
        {navlinks.map((navlink, index) => (
          <div key={index}>
            <h2
              className={`cursor-pointer xl:text-lg md:text-base  font-medium hover:text-colored hover:text-opacity-70 transition-colors duration-500  ${
                activeLink === navlink.name ? "font-bold" : ""
              }`}
              onClick={() => handleItemClick(navlink.name)}
            >
              {navlink.name}
            </h2>
          </div>
        ))}
      </div>
      <div className="hidden md:flex items-center justify-between gap-4">
        <div
          className="border rounded border-[#2E2E2E] px-4 py-1 cursor-pointer"
          onClick={() => handleItemClick("volunteer")}
        >
          Join us
        </div>
        <div
          className="text-white border rounded bg-[#E60716] px-6 py-1 cursor-pointer"
          onClick={() => handleItemClick("Campaigns")}
        >
          Donate
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className="block md:hidden text-2xl transition-all duration-1000 cursor-pointer"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        {/* <h1 className="cursor-pointer">Menu</h1>  */}
      </div>
      {menuOpen && (
        <motion.div
          className={` h-screen py-4 px-4 absolute left-0 transition-all duration-500 ease-in ${
            menuOpen ? " top-[4rem]" : "top-[-100%]"
          }  flex flex-col items-center gap-4 w-full  bg-black`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
        >
          <div className="flex items-center justify-between">
            {/* <img src={logoWhite} alt="logo" width={200} className="mx-auto" /> */}
            {/* <div className="cursor-pointer absolute top-6 right-4" onClick={() => setMenuOpen(false)}>
            <IoMdClose className=" text-white"/>
            </div> */}
          </div>
          <motion.div className="items-center justify-between gap-12 flex flex-col">
            {navlinks.map((navlink, index) => (
              <motion.div key={index} variants={itemVariants}>
                <h2
                  className={`cursor-pointer text-white text-xl ${
                    activeLink === navlink.name ? "font-bold" : ""
                  }`}
                  onClick={() => handleItemClick(navlink.name)}
                >
                  {navlink.name}
                </h2>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="flex flex-col items-center justify-between gap-4">
            <div
              className="border rounded bg-white border-[#2E2E2E] px-6 py-1 cursor-pointer"
              onClick={() => handleItemClick("volunteer")}
            >
              Join us
            </div>
            <div
              className="text-white border rounded bg-[#E60716] px-6 py-1 cursor-pointer"
              onClick={() => handleItemClick("Campaigns")}
            >
              Donate
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Nav;
