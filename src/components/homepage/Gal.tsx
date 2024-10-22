// import campaignsImg from "../../assets/campaigns.png"
import img1 from "../../assets/gallery1.png";
import img2 from "../../assets/gallery2.png";
import img3 from "../../assets/gallery3.png";
import img4 from "../../assets/gallery4.png";
import img5 from "../../assets/gallery5.png";
import img6 from "../../assets/gallery6.png";
import img7 from "../../assets/gallery7.png";

const Gal = () => {
  return (
    <div className=" mt-8 text-center px-2 md:px-16 ">
      <div>
        <h2 className=" text-2xl md:text-5xl font-medium leading-tight text-gray-900 mb-8">
          Gallery
        </h2>
        {/* <p className="mb-12 text-lg text-gray-600">Here are a few of the awesome Services we provide.</p> */}
      </div>
      <div className="container gap-4 mx-auto mb-8">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
      </div>
    </div>
  );
};

export default Gal;
