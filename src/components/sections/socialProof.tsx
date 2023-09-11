import { HiArrowCircleDown } from "react-icons/hi";

const SocialProof = () => {
  return (
    <div className="flex w-full min-h-[20vh] p-4 bg-slate-900 text-white">
      <div className="container mx-auto w-[40vw] py-2 px-4">
        <p className="socialProof flex flex-col justify-center items-center text-center text-3xl py-2">
          We&apos;ll Help You Turn Your Brand Into A Success Story Find Out How
          ?
          <div className="h-[10px] w-full flex justify-center py-2">
            <a href="#about">
              <HiArrowCircleDown />
            </a>
          </div>
        </p>
      </div>
    </div>
  );
};

export default SocialProof;
