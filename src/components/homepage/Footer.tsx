
import logo from "../../assets/footerLogo.png"
import facebook from "../../assets/facebook.svg"
import insta from "../../assets/insta.svg"
import twitter from "../../assets/twitter.svg"
const Footer = () => {
    const footerlinks = [
        { name: "Home" },
        { name: "AboutUs" },
        { name: "Campaigns" },
        { name: "Volunteers" }
      ];
      const footerlinkBs = [
        { name: "Donate" },
        { name: "Gallery" },
        { name: "Blog" },
      ];

      const icons =[
        {img: facebook},
        {img: insta},
        {img: twitter},
      ]


  return (
    <div className=' bg-black px-4 md:px-16 py-8 flex justify-between'>
        <div> <img src={logo} alt="" /></div>
        <div className=' flex gap-12'>
            <div className=' flex flex-col gap-4'>
                {footerlinks.map((footerlink,index)=>(
                    <div key={index} className=' text-white flex flex-col gap-4'>
                        <h2>{footerlink.name}</h2>
                    </div>
                ))}
            </div>
            <div className=' flex flex-col gap-4'>
            {footerlinkBs.map((footerlinkB,index)=>(
                    <div key={index} className=' text-white flex flex-col gap-4'>
                        <h2>{footerlinkB.name}</h2>
                    </div>
                ))}
            </div>
        </div>
        {/* icons */}
        <div className=" flex gap-4">
            {icons.map((icon,index)=>(
                <div key={index} className=" border border-white bg-white rounded-full py-1 px-1 w-fit h-fit">
                    <img src={icon.img} alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Footer