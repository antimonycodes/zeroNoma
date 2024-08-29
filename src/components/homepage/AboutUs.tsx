import aboutImg from "../../assets/about.png";

const AboutUs = () => {
  return (
    <div className="px-4 md:px-16 py-12 flex flex-col md:flex-row gap-8 md:gap-16">
      <div className="flex-1 flex flex-col justify-between gap-8">
        <div>
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis mollitia voluptatum vero perferendis molestiae
            tempora quidem? Porro dicta commodi officiis veritatis labore ipsam in sunt voluptate. Nesciunt temporibus eum quam.
          </p>
        </div>
        <div className="border px-4 py-2 w-fit rounded-md cursor-pointer">See more</div>
      </div>
      <div className="flex-1 flex items-center max-h-[400px]">
        <img
          src={aboutImg}
          alt="About Us"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default AboutUs;
