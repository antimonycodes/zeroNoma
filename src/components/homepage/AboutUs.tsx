import aboutImg from "../../assets/about.png";

const AboutUs = () => {
  return (
    <div className="px-8 md:mt-20 md:px-24 py-12 flex flex-col md:flex-row gap-8 md:gap-16">
      <div className="flex-1 flex flex-col items-start gap-4">
        <div className=" text-left">
          <h1 className="text-2xl md:text-5xl font-medium pb-4 text-left ">
            About us
          </h1>
          <p className=" text-base md:text-2xl text-[#2E2E2E] leading-[28px]">
            Join us in our mission to safeguard the lives of African children
            from the devastating impact of noma. Join us in our mission to
            safeguard the lives of African children from the devastating impact
            of noma.Join us in our mission to safeguard the lives of African
            children from the devastating impact of noma.Join us in our mission
            to safeguard the lives of African children from the devastating
            impact of noma.
          </p>
        </div>
        <div className="border border-colored text-colored font-medium px-4 py-2 w-fit rounded-md cursor-pointer hover:bg-colored hover:text-white transition-all duration-700 ">
          See more
        </div>
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
