import olamide from "../../assets/olamide.png"
import chris from "../../assets/chris.png"
const Team = () => {
  const teams = [
    {img: olamide, name: "Olamide Olamide", role:"President"},
    {img: chris, name: "Olamide Chris", role:"Content Manager"},
    {img: olamide, name: "Olamide", role:"Role Manager"},
    {img: olamide, name: "Olamide", role:"President"},
  ]
  
  return (
    <div className="bg-secondary my-8 px-4 md:px-16 py-4">
      <h1 className="text-4xl font-bold text-center text-black">Our amazing team</h1> 
      {/*  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8 my-8 mx-auto ">
        {teams.map((team,index)=>(
          <div key={index} className=" bg-white w-fit flex flex-col gap-2 rounded-md pb-2">
            <img src={team.img} alt="team" />
            <h2 className="text-center text-xl font-bold">{team.name}</h2>
            <p  className=" text-customGray text-center">{team.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team