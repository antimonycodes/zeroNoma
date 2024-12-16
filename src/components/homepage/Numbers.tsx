// import React from 'react';

const Numbers = () => {
  const cards = [
    { no: "0+", title: "Outreaches done" },
    { no: "0+", title: "LGAs Visited " },
    { no: "0+", title: "Children screened" },
  ];

  return (
    <div className=" md:flex  md:items-center md:justify-center">
      <div className="md:bottom-[-10%] lg:px-24 xl:px-40 bg-[#6F0007] text-white mx-auto w-full  py-4 flex flex-col md:flex-row gap-8 lg:gap-24 items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex items-center justify-center py-8 md:py-0 w-full"
          >
            <div className="flex flex-col items-center gap-2 md:gap-4 pt-4">
              <h1 className="text-6xl lg:text-[96px] font-medium">{card.no}</h1>
              <h2 className="text-lg md:text-xl">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
