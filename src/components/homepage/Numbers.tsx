import React from 'react';

const Numbers = () => {
  const numbers = [
    { no: "0+", title: "Children reached" },
    { no: "0+", title: "Children reached" },
    { no: "0+", title: "Children reached" },
  ];

  return (
    <div className='mx-0 my-8 md:mx-16  md:flex  md:items-center md:justify-center'>
      <div className='md:absolute bottom-[-10%] md:px-40 bg-white md:bg-black text-white mx-auto w-full md:w-fit py-4 flex flex-col md:flex-row gap-8 md:gap-24 items-center'>
        {numbers.map((number, index) => (
          <div key={index} className='flex items-center justify-center py-8 bg-black w-full'>
            <div className='flex flex-col items-center gap-2 md:gap-4'>
              <h1 className='text-4xl md:text-6xl'>{number.no}</h1>
              <h2 className='text-lg md:text-xl'>{number.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
