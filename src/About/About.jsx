import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import GridItem from "./GridItem.jsx";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const firstCards = [
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
  },
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
  },
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
  },
];
const secondCards = [
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
    className: "w-[20vw]",
  },
  {
    type: "text",
    text: "Built",
    className: "font-bold text-pink text-[7.5vw] uppercase ",
  },
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
    className: "w-[20vw]",
  },
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
    className: "w-[20vw]",
  },
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
    className: "w-[20vw]",
  },
];
const thirdCards = [
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
    className: "w-[20vw]",
  },
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
    className: "w-[20vw]",
  },
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
    className: "w-[20vw]",
  },
  {
    type: "text",
    text: "BY",
    className: "font-bold text-black text-[7.5vw] uppercase ",
  },
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
    className: "w-[20vw]",
  },
];
const fourthCards = [
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
    className: "w-[20vw]",
  },
  {
    type: "text",
    text: "THE",
    className: "font-bold text-black text-[7.5vw] uppercase ",
  },
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
    className: "w-[20vw]",
  },
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
    className: "w-[20vw]",
  },
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
    className: "w-[20vw]",
  },
];
const fifthCards = [
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
    className: "w-[20vw]",
  },
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
    className: "w-[20vw]",
  },
  {
    type: "text",
    text: "ambitious",
    className: "font-bold text-pink text-[7.5vw] uppercase ",
  },
  {
    type: "image",
    src: "/public/about-images/eid-small-.webp",
    className: "w-[20vw]",
  },
];
function About() {
  const wrapperRef = useRef(null);
  const TitleRef = useRef(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const slider3Ref = useRef(null);
  const slider4Ref = useRef(null);
  const slider5Ref = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const Title = TitleRef.current;
    const slider1 = slider1Ref.current;
    const slider2 = slider2Ref.current;
    const slider3 = slider3Ref.current;
    const slider4 = slider4Ref.current;
    const slider5 = slider5Ref.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    const animation = tl
      .fromTo(slider1, { x: 80 }, { x: -110 })
      .fromTo(slider2, { x: -150 }, { x: 20 }, 0)
      .fromTo(slider3, { x: 80 }, { x: 60 }, 0)
      .fromTo(slider4, { x: -120 }, { x: 40 }, 0)
      .fromTo(slider5, { x: 80 }, { x: -120 }, 0)
      .fromTo(Title, { scale: 0.9 }, { scale: 1.3 }, 0);

    return () => {
      animation.kill();
      animation.scrollTrigger.kill();
    };
  });

  return (
    <div ref={wrapperRef} className="wrapper ">
      <div className="w-full h-max bg-white pb-[4vh] ">
        {/* title */}
        <h1
          ref={TitleRef}
          className="text-center font-bold text-[3.5vw] leading-[1.3] py-[8vh]"
        >
          Questionable People <br />
          Unquestionable Results
        </h1>
        {/* end */}
        {/* first Cards */}
        <div ref={slider1Ref} className="flex  gap-[1vw] ">
          {firstCards.map((item, index) => (
            <GridItem
              key={index}
              type={item.type}
              src={item.src}
              className="w-[34vw] h-[30vh] shrink-0"
            />
          ))}
        </div>
        {/* end */}
        {/* second Cards */}
        <div ref={slider2Ref} className="flex  gap-[1vw] my-[2vh]">
          {secondCards.map((item, index) => (
            <GridItem
              key={index}
              type={item.type}
              src={item.src}
              text={item.text}
              className={` h-[18vh] shrink-0 ${item.className} `}
            />
          ))}
        </div>
        {/* end */}
        {/* 3 Cards */}
        <div ref={slider3Ref} className="flex  gap-[1vw] my-[2vh]">
          {thirdCards.map((item, index) => (
            <GridItem
              key={index}
              type={item.type}
              src={item.src}
              text={item.text}
              className={` h-[18vh] shrink-0 ${item.className} `}
            />
          ))}
        </div>
        {/* end */}
        {/* 4 Cards */}
        <div ref={slider4Ref} className="flex  gap-[1vw] my-[2vh]">
          {fourthCards.map((item, index) => (
            <GridItem
              key={index}
              type={item.type}
              src={item.src}
              text={item.text}
              className={`h-[18vh] shrink-0 ${item.className} `}
            />
          ))}
        </div>
        {/* end */}
        {/* 5 Cards */}
        <div ref={slider5Ref} className="flex  gap-[1vw] my-[2vh]">
          {fifthCards.map((item, index) => (
            <GridItem
              key={index}
              type={item.type}
              src={item.src}
              text={item.text}
              className={` h-[18vh] shrink-0 ${item.className} `}
            />
          ))}
        </div>
        {/* end */}
      </div>
    </div>
  );
}

export default About;
