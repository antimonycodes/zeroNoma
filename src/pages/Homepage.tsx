import  { useRef, useState } from "react";
import AboutUs from "../components/homepage/AboutUs";
import Home from "../components/homepage/Home";
// import Campaigns from "../components/homepage/Campaigns";
import Blog from "../components/homepage/Blog";
// import Nav from "../components/Nav";
import Campaings from "../components/homepage/Campaings";

const Homepage = () => {
  const [activeLink, setActiveLink] = useState<string>("Home");

  // Create refs for each section
  const sectionRefs = {
    Home: useRef<HTMLDivElement>(null),
    AboutUs: useRef<HTMLDivElement>(null),
    Campaigns: useRef<HTMLDivElement>(null),
    Blog: useRef<HTMLDivElement>(null),
  };

//   const scrollToSection = (sectionId: string) => {
//     sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
//   };

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <div className="">
  
      <div id="Home" ref={sectionRefs.Home}>
        <Home />
      </div>
      <div id="AboutUs" ref={sectionRefs.AboutUs}>
        <AboutUs />
      </div>
      <div id="Campaigns" ref={sectionRefs.Campaigns}>
        <Campaings/>
      </div>
      <div id="Blog" ref={sectionRefs.Blog}>
        <Blog />
      </div>
    </div>
  );
};

export default Homepage;
