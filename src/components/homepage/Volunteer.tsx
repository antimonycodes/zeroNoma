import contactImg from "../../assets/contact.png";

const Volunteer = () => {
  return (
    <div className="flex  flex-col-reverse md:flex-row justify-center p-4 md:p-12">
      <div className="flex flex-col-reverse md:flex-row gap-8 p-8 md:p-12 bg-secondary rounded-3xl w-full max-w-4xl">
        {/* Form Section */}
        <div className="flex-1 text-white">
          <h1 className="text-center font-semibold text-3xl text-black pb-8">BECOME A VOLUNTEER</h1>
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                id="fullName"
                name="name"
                placeholder="Full Name*"
                className="bg-transparent p-2 rounded-md text-darkText border border-black placeholder:text-black caret-orange-400"
              />
                 <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address*"
                className="bg-transparent p-2 rounded-md text-darkText border border-black placeholder:text-black caret-orange-400"
              />
              <input
                type="text"
                id="phoneNumber"
                name="phone"
                placeholder="Phone Number*"
                className="bg-transparent p-2 rounded-md text-darkText border border-black placeholder:text-black caret-orange-400"
              />
           
              <textarea
                id="message"
                name="message"
                placeholder="Message*"
                className="bg-transparent p-2 rounded-md text-darkText border border-black placeholder:text-black caret-orange-400 h-[200px]"
              />
            </div>
            <button className="bg-colored hover:bg-[#B00512] transition-all duration-700 ease-in-out mx-auto md:mx-0  py-2 px-4 rounded-md text-white w-fit font-semibold">Submit Now</button>
          </form>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <img src={contactImg} alt="Contact Us" className="w-full h-auto object-cover rounded-md shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
