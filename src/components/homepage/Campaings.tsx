import campaignsImg from "../../assets/campaigns.png";
import dostbanner from "../../assets/dots-banner.png";
import { motion } from "framer-motion";

const Campaigns = () => {
  const cards = [
    {
      img: dostbanner,
      heading: "Project DOTS",
      currentAmount: 10200,
      totalAmount: 50000,
    },
    {
      img: campaignsImg,
      heading: "Project CDS ",
      currentAmount: 50200,
      totalAmount: 100000,
    },
    {
      img: dostbanner,
      heading: "BeatNTDs ",
      currentAmount: 80200,
      totalAmount: 200000,
    },
  ];

  const getProgressPercentage = (
    currentAmount: number,
    totalAmount: number
  ) => {
    return (currentAmount / totalAmount) * 100;
  };

  return (
    <div className="bg-secondary px-4 md:px-16 py-12">
      <h1 className="text-2xl md:text-5xl font-medium text-center text-black">
        Campaigns
      </h1>
      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8   my-8 mx-auto ">
        {cards.map((card, i) => (
          <div
            key={i}
            className=" mx-auto px-4 py-8 bg-white w-fit flex flex-col gap-2 rounded-md shadow-lg"
          >
            <img src={card.img} alt="Campaign" className="rounded-md" />
            <h2 className="text-base md:text-xl text-[#1D1D1D]  font-medium">
              {card.heading}
            </h2>
            {/* <div className="flex justify-between">
              <h2 className=" text-base md:text-xl font-medium text-[#1D1D1D]">{`#${card.currentAmount.toLocaleString()}`}</h2>
              <h2 className="text-base md:text-xl font-medium text-[#8A8A8A]">{`#${card.totalAmount.toLocaleString()}`}</h2>
            </div> */}
            {/* Progress Bar */}
            {/* <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-colored h-2 rounded-full"
                style={{
                  width: `${getProgressPercentage(
                    card.currentAmount,
                    card.totalAmount
                  )}%`,
                }}
              ></div>
            </div> */}
            <motion.div
              whileHover={{ scale: 0.95, rotate: "2.5deg" }}
              whileTap={{ scale: 0.95, rotate: "2.5deg" }}
              transition={{
                duration: 0.125,
                ease: "easeInOut",
              }}
              className="border bg-colored  text-white  transition-all duration-700 w-fit p-2 rounded-md mt-2 cursor-pointer"
            >
              Donate now
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
