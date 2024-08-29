import aboutImg from "../../assets/about.png";

const AboutUs = () => {
  return (
    <div className="px-4 md:px-16 py-12 flex flex-col md:flex-row justify-between gap-8 md:gap-16">
      <div className="flex-1 flex flex-col gap-8">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis mollitia voluptatum vero perferendis molestiae
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis mollitia voluptatum vero perferendis molestiae
          tempora quidem? Porro dicta commodi officiis veritatis labore ipsam in sunt voluptate. Nesciunt temporibus eum quam.
        </p>
        <div className="border px-4 py-2 w-fit rounded-md cursor-pointer">See more</div>
      </div>
      <div className="flex-1">
        <img src={aboutImg} alt="About Us" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default AboutUs;
