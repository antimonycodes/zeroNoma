import { useRef } from "react";
import AboutUs from "../components/homepage/AboutUs";
import Home from "../components/homepage/Home";
// import Campaigns from "../components/homepage/Campaigns";
// import Blog from "../components/homepage/Blog";
// import Nav from "../components/Nav";
import Campaings from "../components/homepage/Campaings";
import Volunteer from "../components/homepage/Volunteer";
// import Gallery from "../components/homepage/Gallery";
import Team from "../components/homepage/Team";
import Footer from "../components/homepage/Footer";
import Gal from "../components/homepage/Gal";
import Numbers from "../components/homepage/Numbers";

const Homepage = () => {
  // const [activeLink, setActiveLink] = useState<string>("Home");

  // Create refs for each section
  const sectionRefs = {
    Home: useRef<HTMLDivElement>(null),
    AboutUs: useRef<HTMLDivElement>(null),
    Campaigns: useRef<HTMLDivElement>(null),
    Blog: useRef<HTMLDivElement>(null),
    Volunteer: useRef<HTMLDivElement>(null),
  };

  //   const scrollToSection = (sectionId: string) => {
  //     sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
  //   };

  // const onUpdateActiveLink = (value: string) => {
  //   setActiveLink(value);
  // };

  return (
    <div className="">
      <div id="Home" ref={sectionRefs.Home}>
        <Home />
      </div>
      <Numbers />
      <div id="About Us" ref={sectionRefs.AboutUs}>
        <AboutUs />
      </div>
      <div id="Campaigns" ref={sectionRefs.Campaigns}>
        <Campaings />
      </div>
      <div id="Volunteer" ref={sectionRefs.Volunteer}>
        <Volunteer />
      </div>
      <div>
        <Gal />
      </div>
      <div>
        <Team />
      </div>
      {/* <div id="Blog" ref={sectionRefs.Blog}>
        <Blog />
      </div> */}
      <Footer />
    </div>
  );
};

export default Homepage;
