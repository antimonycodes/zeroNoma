import campaignsImg from "../../assets/campaigns.png";

const Blog = () => {
    const blogs = [
        { img: campaignsImg, heading: "Bring together people who care about a cause", createdAt: "29,Aug, 2024" },
        { img: campaignsImg, heading: "Bring together people who care about a cause", createdAt: "29,Aug, 2024" },
        { img: campaignsImg, heading: "Bring together people who care about a cause", createdAt: "29,Aug, 2024" }
      ];
  return (
    <div className="px-4 md:px-16 py-4">
      <h1 className="text-4xl font-bold text-center text-black">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 my-8 mx-auto ">
        {blogs.map((blog,i)=>(
            <div key={i} className="p-4 bg-white w-fit flex flex-col gap-2 rounded-2xl shadow-lg">
                <img src={blog.img} alt="" />
                <h2  className="text-xl font-bold">{blog.heading}</h2>
                {/*  */}
                <div className="w-full bg-gray-200 rounded-full h-[1px] mt-2">
              <div
                className="bg-black h-[1px] rounded-full"
                // style={{ width: `${getProgressPercentage(card.currentAmount, card.totalAmount)}%` }}
              ></div>
            </div>

                <p>{blog.createdAt}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Blog