import { useState } from "react";
import homebg from "../../assets/homebg.png";
import Nav from "../Nav";
// import Numbers from './Numbers';

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
      className=" h-screen relative"
    >
      {/*  */}
      <div className=" absolute top-0 left-0 w-full h-screen  bg-gradient-to-b bg-[#2D0202CC] bg-[#2D020214] opacity-50"></div>
      <div className=" absolute top-0 md:top-8 w-full">
        <Nav
          activeLink={activeLink}
          setActiveLink={onUpdateActiveLink}
          scrollToSection={scrollToSection}
        />
      </div>
      <div className=" mx-0 xl:mx-[15%] flex justify-center items-center h-full absolute z-50 ">
        <div className=" flex flex-col gap-4 text-white items-center text-center">
          <h1 className=" text-4xl xl:text-[96px] leading-[108%] text-center font-bold">
            Combatting Noma <br /> in Africa
          </h1>
          <p className=" text-2xl  max-w-[100%] zl:max-w-[85%]">
            Join us in our mission to safeguard the lives of African children{" "}
            <br />
            from the devastating impact of noma
          </p>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Home;
