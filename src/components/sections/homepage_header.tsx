"use client";
import Header from "../partials/header";
import Carousel from "./carousel";

const HomepageHeader = () => {
  return (
    <div className="w-full h-[80vh] bg-[url('/images/mainbg-bw.png')] bg-cover bg-center bg-no-repeat">
      <Header />
      <Carousel />
    </div>
  );
};

export default HomepageHeader;
