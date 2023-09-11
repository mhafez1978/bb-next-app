"use client";

import { Lilita_One, Abhaya_Libre } from "next/font/google";

interface Props {
  title: string;
  description: string;
  url: string;
}

const ll = Lilita_One({
  weight: "400",
  subsets: ["latin-ext"],
});

const abhaLibre = Abhaya_Libre({
  weight: "800",
  subsets: ["sinhala"],
});

export default function HorizontalSlide({ title, description, url }) {
  return (
    <div className="container w-full mx-auto">
      <div className="h-[70vh] w-full flex flex-col justify-center items-start text-left">
        <h1 className="title pb-4 text-5xl">{title}</h1>
        <p className="pb-4 text-sm">{description}</p>
        <a
          href={url}
          type="button"
          className="button outline rounded py-1 px-8 hover:bg-white hover:text-black"
        >
          Get A Free Quote
        </a>
      </div>
    </div>
  );
}
