"use client";
import Carousel from "nuka-carousel";
import HorizontalSlide from "@/components/HorizontalSlide";
import { easeCircleOut, easeElasticOut } from "d3-ease";
import Image from "next/image";

const CarouselSlider = () => {
  return (
    <Carousel
      pauseOnHover={true}
      easing={easeCircleOut}
      edgeEasing={easeElasticOut}
      wrapAround={true}
      autoplay={true}
      autoplayInterval={8000}
    >
      <div className="container mx-auto">
        <div className="w-full h-[70vh] mx-auto flex flex-row">
          <div className="w-1/2">
            <HorizontalSlide
              title="We Design Better &amp; Faster Websites"
              description="Transform your brand with custom data-driven applications. Harness
              the power of data to optimize operations, enhance user
              experiences, and drive growth."
              url="/contact"
            />
          </div>
          <div className="w-1/2 h-[70vh] flex flex-row justify-center items-center">
            <Image
              src="/images/fast-websites.png"
              alt=""
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="w-full h-[70vh] mx-auto flex flex-row">
          <div className="w-1/2">
            <HorizontalSlide
              title="Our Apps Are Data Driven"
              description="Transform your brand with custom data-driven applications. Harness
              the power of data to optimize operations, enhance user
              experiences, and drive growth."
              url="/contact"
            />
          </div>
          <div className="w-1/2 h-[70vh] flex flex-row justify-center items-center">
            <Image
              src="/images/datadrivenapps.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="w-full h-[70vh] mx-auto flex flex-row">
          <div className="w-1/2">
            <HorizontalSlide
              title="Time To Re-Think Your Brand"
              description="Our marketing and branding team can help re-think your business brand and customers. Focusing on the user experience as well as the business image will help enhance your credebility in the local market."
              url="/contact"
            />
          </div>
          <div className="w-1/2 h-[70vh] flex flex-row justify-center items-center">
            <img src="/images/seo.png" alt="" width={600} height={600} />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="w-full h-[70vh] mx-auto flex flex-row">
          <div className="w-1/2">
            <HorizontalSlide
              title="Let's Get You More Customers"
              description="Our marketing and branding team can help re-think your business brand and customers. Focusing on the user experience as well as the business image will help enhance your credebility in the local market."
              url="/contact"
            />
          </div>
          <div className="w-1/2 h-[70vh] flex flex-row justify-center items-center">
            <Image
              src="/images/online-marketing-bw.png"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
