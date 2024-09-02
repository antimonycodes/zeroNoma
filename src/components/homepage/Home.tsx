
import { useState } from 'react';
import homebg from '../../assets/homebg.png'; 
import Nav from '../Nav';
import Numbers from './Numbers';

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
        backgroundPosition: 'center',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        height: '100vh', 
        width: '100%' 
      }}
      className=' h-screen relative'
    >
        <div className=' absolute top-0 md:top-8 w-full'>
        <Nav  activeLink={activeLink}
          setActiveLink={onUpdateActiveLink}
          scrollToSection={scrollToSection}/>
        </div>
        <div className=' mx-0 xl:mx-[25%] flex justify-center items-center h-full '>
            <div className=' flex flex-col gap-4 text-white items-center text-center'>
                <h1 className=' text-4xl xl:text-7xl text-center font-bold'>Combatting Noma in Africa</h1>
                <p className=' text-lg font-medium max-w-[100%] zl:max-w-[85%]'>Join us in our mission to safeguard the lives of African children from the devastating impact of noma</p>
                </div>
        </div>
        {/*  */}
    </div>
  );
};

export default Home;
