import CarouselSlider from "@/components/sections/carousel";
import SocialProof from "@/components/sections/socialProof";
import About from "@/components/sections/about";
import { Metadata } from "next";
import HomepageHeader from "@/components/sections/homepage_header";

export const metadata: Metadata = {
  title: "Blooming Brands | Home",
};

const HomePage = () => {
  return (
    <>
      <HomepageHeader />
      <About />
      <div className="w-full  bg-slate-800 text-white">
        <div className="container mx-auto h-[90vh]">
          <h2>Home Page</h2>
        </div>
      </div>
    </>
  );
};

export default HomePage;
