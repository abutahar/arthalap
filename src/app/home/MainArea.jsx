import Banner from "./Banner";
import LeftSidebar from "../shared/LeftSidebar";
import RightSidebar from "../shared/RightSidebar";

export default function MainArea() {
  return (
    <main className="min-h-[70vh]">
      <div className=" bg-slate-600">
        {/* sidebar for pc left  */}
        {/* <div className="hidden p-4 md:p-10 md:block col-span-2 bg-slate-200">
          <LeftSidebar></LeftSidebar>
        </div> */}
        <div className="w-full  p-4 md:p-10">
          {/* here is content area in pc */}
          {/* banner section */}
          <section>
            <Banner></Banner>
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
