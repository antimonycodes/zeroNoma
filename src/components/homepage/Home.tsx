// import { useState } from "react";
import { useState } from "react";
import homebg from "../../assets/homebg.png";
import Nav from "../Nav";

const Home = () => {
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

  return (
    <div
      style={{
        backgroundImage: `url(${homebg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
      className="relative"
    >
      <div className="gradient-overlay"></div>
      <div className=" absolute z-[999] top-0 md:top-8 w-full mx-auto px-0 md:px-8">
        <Nav
          activeLink={activeLink}
          setActiveLink={onUpdateActiveLink}
          scrollToSection={scrollToSection}
        />
      </div>
      <div className="absolute inset-0 flex justify-center items-center h-full z-50">
        <div className="flex flex-col gap-4 text-white items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-[96px] leading-tight md:leading-[108%] font-bold">
            Combatting Noma <br /> in Africa
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-[80%] lg:max-w-[746px] font-light leading-[36px]">
            Join us in our mission to safeguard the lives of African children
            from the devastating impact of noma.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
