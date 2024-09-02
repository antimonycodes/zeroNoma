import aboutImg from "../../assets/about.png";

const AboutUs = () => {
  return (
    <div className="px-4 md:px-16 py-12 flex flex-col md:flex-row gap-8 md:gap-16">
      <div className="flex-1 flex flex-col items-center md:items-start gap-8">
        <div className=" text-left">
          <h1 className="text-4xl font-bold pb-8 text-center md:text-left ">About Us</h1>
          <p className="text-xl">
           Join us in our mission to safeguard the lives of African children from the devastating impact of noma. Join us in our mission to safeguard the lives of African children from the devastating impact of noma.Join us in our mission to safeguard the lives of African children from the devastating impact of noma.Join us in our mission to safeguard the lives of African children from the devastating impact of noma.
          </p>
        </div>
        <div className="border border-colored text-colored font-semibold px-4 py-2 w-fit rounded-md cursor-pointer hover:bg-colored hover:text-white transition-all duration-700 ">See more</div>
      </div>
      <div className="flex-1 flex items-center max-h-[400px]">
        <img
          src={aboutImg}
          alt="About Us"
          className="w-full h-full object-cover object-center rounded-3xl leading-loose"
        />
      </div>
    </div>
  );
};

export default AboutUs;
