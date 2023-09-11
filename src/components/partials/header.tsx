import Link from "next/link";
import Image from "next/image";
// import MyLogo from "@/components/logo";
const MyLogo = "";

const Header = () => {
  return (
    <div className="header w-full h-[7vh] fixed top-0 z-50 text-white bg-[url('/images/slices_01.png')] bg-cover bg-center bg-no-repeat">
      <div className="headerWraper container mx-auto">
        <div className="flex flex-row justify-between items-center py-1">
          <div className="brand">
            {MyLogo === "" ? (
              <div className="flex flex-col items-start justify-start">
                <h1 className="title font-black font-bold text-2xl ml-8">
                  Blooming Brands
                </h1>
                <p className="text-xs pl-14">We Help Small Business Grow</p>
              </div>
            ) : (
              <div className="w-[240px] h-[60px] bg-[url('/images/logo2.png')] bg-cover bg-center bg-no-repeat"></div>
            )}
          </div>
          <div className="navMenu flex flex-row gap-2 uppercase text-sm font-black font-bold">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/latest-news">Latest News</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
