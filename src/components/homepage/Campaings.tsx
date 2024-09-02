import campaignsImg from "../../assets/campaigns.png";

const Campaigns = () => {
  const cards = [
    { img: campaignsImg, heading: "Fundraising For Children in Kaduna", currentAmount: 10200, totalAmount: 50000 },
    { img: campaignsImg, heading: "Fundraising For Children in Kaduna", currentAmount: 50200, totalAmount: 100000 },
    { img: campaignsImg, heading: "Fundraising For Children in Kaduna", currentAmount: 80200, totalAmount: 200000 }
  ];

  const getProgressPercentage = (currentAmount: number, totalAmount: number) => {
    return (currentAmount / totalAmount) * 100;
  };

  return (
    <div className="bg-secondary px-4 md:px-16 py-4">
      <h1 className="text-4xl font-bold text-center text-black">Campaigns</h1>
      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 my-8 mx-auto ">
        {cards.map((card, i) => (
          <div key={i} className=" mx-auto p-4 bg-white w-fit flex flex-col gap-2 rounded-md shadow-lg">
            <img src={card.img} alt="Campaign" className="rounded-md" />
            <h2 className="text-xl font-bold">{card.heading}</h2>
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">{`#${card.currentAmount.toLocaleString()}`}</h2>
              <h2 className="text-xl font-bold text-slate-300">{`#${card.totalAmount.toLocaleString()}`}</h2>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-colored h-2 rounded-full"
                style={{ width: `${getProgressPercentage(card.currentAmount, card.totalAmount)}%` }}
              ></div>
            </div>
            <div className="border bg-colored hover:bg-coloredLight text-white  transition-all duration-700 w-fit p-2 rounded-md mt-2 cursor-pointer">Donate now</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
