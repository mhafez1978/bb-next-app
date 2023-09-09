import Link from "next/link";
const myLogo: any = "Blooming Brands LLC";

const Header = () => {
  return (
    <div className="header w-full min-h-[5vh] bg-slate-800 text-white px-4">
      <div className="headerWraper container mx-auto">
        <div className="flex flex-row justify-between items-center py-4">
          <div className="brand">
            {myLogo === "" ? (
              <h1 className="text-2xl">Blooming Brands</h1>
            ) : (
              myLogo
            )}
          </div>
          <div className="navMenu flex flex-row gap-2 uppercase text-xs">
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
