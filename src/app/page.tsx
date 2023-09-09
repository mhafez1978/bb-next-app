import CarouselSlider from "@/components/sections/carousel";
import SocialProof from "@/components/sections/socialProof";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blooming Brands | Home",
};

const HomePage = () => {
  return (
    <>
      <CarouselSlider />
      <SocialProof />
      <div className="container mx-auto">
        <h2>Home Page</h2>
      </div>
    </>
  );
};

export default HomePage;
