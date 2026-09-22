//import React from 'react'
import { forwardRef } from "react";
import Counter from "./Counter";

const Hero = forwardRef(function Hero(props, ref) {
  const bottomCards = [
    { title: "Projects", target: 300, suffix: "+" },
    { title: "Human", target: 62, suffix: "+" },
    { title: "Years", target: 7, suffix: "" },
    { title: "Cup of Coffee", target: 36, suffix: "K" },
  ];
  return (
    <div className="hero-wrapper relative w-screen h-screen">
      <div
        ref={ref}
        className="hero-content w-full h-full grid grid-cols-[1fr] md:grid-cols-[1fr] grid-rows-3 md:grid-rows-[100%]"
      >
        {/* data */}
        <div className="data absolute flex flex-col justify-center items-center gap-[5vh] p-[5vw] font-bold  ">
          <h1 className="text-cream text-[15vh] leading-[1.2] absolute top-[15vh] text-left left-[8vw] uppercase flex flex-col">
            <span className="text-[8vh] block">We</span>

            <span className="block">Craft</span>
          </h1>
          <h1 className="text-cream text-[8vh] leading-[1.2] absolute top-[23vh] text-left left-[65vw] ">
            {/* Digital
            <br /> */}
            <span className="text-pink font-['Dancing'] text-[20vh]">
              Magic
            </span>
          </h1>
        </div>
        {/* end data */}
        {/* video */}
        <div className="bg-white">
          <video
            autoPlay
            muted
            loop
            src={`${import.meta.env.BASE_URL}hero-video/video.mp4`}
            className="w-full h-full object-cover  "
          ></video>
        </div>

        {/* end video */}
        {/* bottom */}
        <div className="bottom absolute w-full flex justify-between items-center col-span-2 gradiant-black-bottom text-pink px-[5vw] bottom-[-5px] ">
          {bottomCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-center justify-center bg-bblack/3 w-[20vw] pb-[2.5vh] rounded-[0.5vw] "
            >
              <Counter
                target={card.target}
                suffix={card.suffix}
                className="flex font-normal text-[5vw] text-transparent text-stroke-thin "
              />
              <h2 className="text-[1.5vw] font-bold">{card.title}</h2>
            </div>
          ))}
        </div>
        {/* end bottom */}
      </div>
    </div>
  );
});

export default Hero;
