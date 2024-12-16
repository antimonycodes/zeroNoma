import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/Nomalogo.png";
import brandName from "../assets/logo.png.png";
// import logoWhite from "../assets/footerLogo.png";
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
    { name: "About Us" },
    { name: "Campaigns" },
    // { name: "Blog" },
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
    if (menuOpen) setMenuOpen(false);
  };

  const menuVariants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
    hidden: { opacity: 0 },
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
        duration: 0.6,
      },
    },
  };

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
    console.log("clicked");
  };

  return (
    <div className="  w-full shadow-2xl ">
      <div
        className={` left-0 mx-auto w-[100%] z-[999] rounded-[8px]  py-4 px-4 xl:px-8 flex items-center justify-between ${
          scrolled ? "bg-white shadow-lg" : " bg-white"
        } transition-all duration-300`}
      >
        <div
          className="flex items-center cursor-pointer gap-1 "
          onClick={() => handleItemClick("Home")}
        >
          <img src={logo} alt="logo" width={30} />
          <img src={brandName} alt="brand Name" width={100} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between md:gap-4 xl:gap-12">
          {navlinks.map((navlink, index) => (
            <h2
              key={index}
              className={`cursor-pointer text-[#2E2E2E] lg:text-base xl:text-xl  font-medium hover:text-colored hover:text-opacity-70 transition-colors duration-500 ${
                activeLink === navlink.name ? "font-bold" : ""
              }`}
              onClick={() => handleItemClick(navlink.name)}
            >
              {navlink.name}
            </h2>
          ))}
        </div>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex items-center gap-4">
          <div
            className="border rounded border-[#2E2E2E] px-4 py-1 cursor-pointer"
            onClick={() => handleItemClick("Volunteer")}
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
          className="block md:hidden text-2xl cursor-pointer"
          onClick={handleClick}
          // aria-label="Toggle menu"
        >
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>

        {menuOpen && (
          <motion.div
            className="h-screen py-4 px-4 absolute left-0 top-[3.8rem] flex flex-col items-center gap-4 w-full bg-black transition-all duration-500 ease-in"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <motion.div className="flex flex-col items-center gap-12">
              {navlinks.map((navlink, index) => (
                <motion.h2
                  key={index}
                  variants={itemVariants}
                  className={`cursor-pointer text-white text-xl ${
                    activeLink === navlink.name ? "font-bold" : ""
                  }`}
                  onClick={() => handleItemClick(navlink.name)}
                >
                  {navlink.name}
                </motion.h2>
              ))}
            </motion.div>

            <motion.div className="flex flex-col items-center gap-4">
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
    </div>
  );
};

export default Nav;
