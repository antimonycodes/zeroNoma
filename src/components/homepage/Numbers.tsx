// import React from 'react';

const Numbers = () => {
  const cards = [
    { no: "200+", title: "Children reached" },
    { no: "100+", title: "Children reached" },
    { no: "50+", title: "Children reached" },
  ];

  return (
    <div className="mx-0  md:mx-16  md:flex  md:items-center md:justify-center">
      <div className="md:absolute bottom-[-10%] md:px-40 bg-[#6F0007] text-white mx-auto w-full  py-4 flex flex-col md:flex-row gap-8 md:gap-24 items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex items-center justify-center py-8 md:py-0 w-full"
          >
            <div className="flex flex-col items-center gap-2 md:gap-4">
              <h1 className="text-4xl md:text-6xl">{card.no}</h1>
              <h2 className="text-lg md:text-xl">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
