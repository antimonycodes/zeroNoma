import logo from "../../assets/footerLogo.png";
import facebook from "../../assets/facebook.svg";
import insta from "../../assets/insta.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
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

  const icons = [
    { img: facebook },
    { img: insta },
    { img: twitter },
  ];

  return (
    <div className="bg-black px-4 md:px-16 py-8 flex flex-col md:flex-row md:justify-between items-center md:items-start">
      <div className="mb-6 md:mb-0">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-6 md:mb-0">
        <div className="flex flex-col gap-4 text-center md:text-left">
          {footerlinks.map((footerlink, index) => (
            <div key={index} className="text-white">
              <h2>{footerlink.name}</h2>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          {footerlinkBs.map((footerlinkB, index) => (
            <div key={index} className="text-white">
              <h2>{footerlinkB.name}</h2>
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
