import Image from "next/image";

const MyLogo = () => {
  return (
    <Image
      src="/images/logo.png"
      alt="Blooming Brands"
      width={400}
      height={100}
    />
  );
};

export default MyLogo;
