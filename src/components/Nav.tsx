import React, { useEffect, useState } from "react";
import logo from "../assets/Nomalogo.png";
import brandName from "../assets/logo.png.png";

interface NavProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
  scrollToSection: (sectionId: string) => void;
}

const Nav: React.FC<NavProps> = ({ activeLink, setActiveLink, scrollToSection }) => {
  const navlinks = [
    { name: "Home" },
    { name: "AboutUs" },
    { name: "Campaigns" },
    { name: "Blog" }
  ];

  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleItemClick = (sectionName: string) => {
    scrollToSection(sectionName);
    setActiveLink(sectionName);
  };

  return (
    <div className={`mx-12 py-4 px-4 flex items-center justify-between bg-white shadow ${scrolled ? 'shadow-slate-300' : ''}`}>
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" width={30} />
        <img src={brandName} alt="brand Name" width={100} />
      </div>
      <div className="flex items-center justify-between gap-12">
        {navlinks.map((navlink, index) => (
          <div key={index}>
            <h2
              className={`cursor-pointer ${activeLink === navlink.name ? 'font-bold' : ''}`}
              onClick={() => handleItemClick(navlink.name)}
            >
              {navlink.name}
            </h2>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="border rounded border-[#2E2E2E] px-4 py-1 cursor-pointer">Join us</div>
        <div className="text-white border rounded bg-[#E60716] px-6 py-1 cursor-pointer">Donate</div>
      </div>
    </div>
  );
};

export default Nav;
