import Banner from "./Banner";
import LeftSidebar from "../shared/LeftSidebar";
import RightSidebar from "../shared/RightSidebar";
import LatestBlog from "./LatestBlogs";
import GlobalEconomy from "./GlobalEconomoy";
import ErrorPage from "./ErrorPage";

export default async function MainArea() {
  const data1 = (await fetch(`${process.env.URL}/home`))?.json() || [];

  try {
  } catch (err) {
    return <ErrorPage></ErrorPage>;
  }
  return (
    <main className="min-h-[70vh]  md:mx-auto bg-gray">
      <div className="">
        {/* sidebar for pc left  */}
        {/* <div className="hidden p-4 md:p-10 md:block col-span-2 bg-slate-200">
          <LeftSidebar></LeftSidebar>
        </div> */}
        <div className="bg-white">
          {/* here is content area in pc */}
          {/* banner section */}
          <section className=" p-4 md:p-10">
            <Banner data={data1}></Banner>
          </section>

          {/* latest blog section */}
          <section className="bg-gray p-4 md:p-10">
            <div className=" md:w-[70%] mx-auto">
              <h1 className="uppercase text-3xl mb-6">Latest blogs</h1>
              <div className="md:grid grid-cols-3  lg:grid-cols-3 gap-10 ">
                no post yet
              </div>
              <button className="px-3 pt-1 pb-2 text-end block ml-auto font-semibold blur-[.5px] mb-4 rounded-md bg-primary text-white text-lg">
                Read More
              </button>
            </div>
          </section>

          {/* global economy section */}
          <section className="md:w-[70%] p-4 md:p-10 mx-auto">
            <h1 className="uppercase  text-3xl my-6 pt-4">Global Economy</h1>
            <div className="md:grid grid-cols-3 lg:grid-cols-3 gap-10">
              no post yet
            </div>
          </section>
        </div>
        {/* sidebar for pc right */}
        {/* <div className="col-span-2 p-4 md:p-10 hidden md:block bg-slate-200">
          <RightSidebar></RightSidebar>
        </div> */}
      </div>
    </main>
  );
}
