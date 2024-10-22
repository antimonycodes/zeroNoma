import olamide from "../../assets/olamide.png";
import chris from "../../assets/chris.png";
const Team = () => {
  const teams = [
    { img: olamide, name: "Olamide Olamide", role: "President" },
    { img: chris, name: "Olamide Chris", role: "Content Manager" },
    { img: olamide, name: "Olamide", role: "Role Manager" },
    { img: olamide, name: "Olamide", role: "President" },
  ];

  return (
    <div className="bg-secondary my-16 px-4 md:px-24 py-4">
      <h1 className=" text-2xl md:text-5xl font-medium text-center text-black">
        Our amazing team
      </h1>
      {/*  */}
      <div
        className={` w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8 my-8 mx-4 md:mx-auto `}
      >
        {teams.map((team, index) => (
          <div
            key={index}
            className=" w-full bg-white   flex flex-col gap-2 rounded-[12px] pb-2"
          >
            <img src={team.img} alt="team" className=" rounded-t-[12px] " />
            <h2 className="text-center text-[#3A1700] text-xl ">{team.name}</h2>
            <p className=" text-[#3A170080] text-center">{team.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
