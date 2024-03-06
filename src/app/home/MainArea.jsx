import Banner from "./Banner";
import LeftSidebar from "../shared/LeftSidebar";
import RightSidebar from "../shared/RightSidebar";
import LatestBlog from "./LatestBlogs";
import GlobalEconomy from "./GlobalEconomoy";
import ErrorPage from "./ErrorPage";

export default async function MainArea() {
  const data = fetch(`${process.env.URL}/home`).then((res) => res.json()) || [];
  return (
    <main className="min-h-[85vh]  md:mx-auto bg-gray">
      <div className="">
        {/* sidebar for pc left  */}
        {/* <div className="hidden p-4 md:p-10 md:block col-span-2 bg-slate-200">
          <LeftSidebar></LeftSidebar>
        </div> */}
        <div className="bg-white">
          {/* here is content area in pc */}
          {/* banner section */}
          <section className=" p-4 md:p-10">
            <Banner></Banner>
          </section>

          {data[0]?.catagories?.map((doc) => {
            <section className="md:w-[70%] p-4 md:p-10 mx-auto">
              <h1 className="uppercase  text-3xl my-6 pt-4">{doc?.title}</h1>
              <div className="md:grid grid-cols-3 lg:grid-cols-3 gap-10">
                {doc?.body}
              </div>
            </section>;
          }) || (
            <div className="p-2 md:p-10 text-center">
              <p>currently no other details added</p>
            </div>
          )}
        </div>
        {/* sidebar for pc right */}
        {/* <div className="col-span-2 p-4 md:p-10 hidden md:block bg-slate-200">
          <RightSidebar></RightSidebar>
        </div> */}
      </div>
    </main>
  );
}
