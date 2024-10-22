import logo from "../../assets/footerLogo.png";
import facebook from "../../assets/facebook.svg";
import insta from "../../assets/insta.svg";
import twitter from "../../assets/twitter.svg";
import { useEffect, useState } from "react";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const footerlinks = [
    { name: "Home" },
    { name: "AboutUs" },
    { name: "Campaigns" },
    { name: "Volunteers" },
  ];
  const footerlinkBs = [
    { name: "Donate" },
    { name: "Gallery" },
    { name: "Blog" },
  ];
  const [activeLink, setActiveLink] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

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

  const icons = [{ img: facebook }, { img: insta }, { img: twitter }];

  return (
    <div className="bg-black px-4 md:px-24 py-8 flex flex-col md:flex-row md:justify-between items-center md:items-start">
      <div className="mb-6 md:mb-0">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-6 md:mb-0">
        <div className="flex flex-col gap-4 text-center md:text-left">
          {footerlinks.map((footerlink, index) => (
            <div key={index} className="text-white cursor-pointer">
              <h2 onClick={() => handleItemClick(footerlink.name)}>
                {footerlink.name}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          {footerlinkBs.map((footerlinkB, index) => (
            <div key={index} className="text-white cursor-pointer">
              <h2 onClick={() => handleItemClick(footerlinkB.name)}>
                {footerlinkB.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="border border-white bg-white rounded-full p-2 w-fit h-fit"
          >
            <img src={icon.img} alt={`Icon ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
