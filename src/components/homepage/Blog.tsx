import campaignsImg from "../../assets/campaigns.png";

const Blog = () => {
    const blogs = [
        { img: campaignsImg, heading: "Bring together people who care about a cause", createdAt: "29,Aug, 2024", current:40, total:100 },
        { img: campaignsImg, heading: "Bring together people who care about a cause", createdAt: "29,Aug, 2024", current:50, total:100 },
        { img: campaignsImg, heading: "Bring together people who care about a cause", createdAt: "29,Aug, 2024",current:10, total:100 }
      ];
        const getProgressPercentage =(current:number, total:number) => {
          return (current / total) * 100;

        }

  return (
    <div className="px-4 md:px-16 py-4 mb-16">
      <h1 className="text-4xl font-bold text-center text-black">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 my-8 mx-auto ">
        {blogs.map((blog,i)=>(
            <div key={i} className="p-4 bg-white w-fit flex flex-col gap-2 rounded-2xl shadow-lg">
                <img src={blog.img} alt="" />
                <h2  className="text-xl font-bold">{blog.heading}</h2>
                {/*  */}
                 {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
              <div
                className="bg-black h-1 rounded-full"
                style={{ width: `${getProgressPercentage(blog.current, blog.total)}%` }}
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