import Hero from "../Hero/Hero.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Text3D() {
  const contentRef = useRef(null);
  const TitleRef = useRef(null);
  const heroRef = useRef(null);
  const texts = [
    {
      title1: "Bohemian",
      title2: "Geeks",
      className: "text-[18vw] origin-top  -rotate-x-85",
      classNameTop: "h-1/3 scale-y-130 ",
      classNameBottom: "h-2/3 scale-x-100 scale-y-140 text-[31vw]",
      topRef: useRef(null),
    },
    {
      title1: "YOUR",
      title2: "design",
      className: "text-[25vw] origin-right  -rotate-y-105",
      classNameTop: "h-1/2 scale-y-130 scale-x-138 ",
      classNameBottom: "h-1/2 scale-x-126 scale-y-140 text-[22vw]",
      rightRef: useRef(null),
    },
    {
      title1: "YOURS",
      title2: "to create",
      className: "text-[28.5vw] origin-bottom  rotate-x-85",
      classNameTop: "h-2/3 scale-y-140 ",
      classNameBottom: "h-1/3 scale-x-103 scale-y-130 text-[17vw]",
      bottomRef: useRef(null),
    },
    {
      title1: "YOUR",
      title2: "ideas",
      className: "text-[25vw] origin-left  rotate-y-105",
      classNameTop: "h-1/2 scale-y-130 scale-x-138 ",
      classNameBottom: "h-1/2 scale-x-152 scale-y-140 text-[22vw]",
      leftRef: useRef(null),
    },
  ];
  useEffect(() => {
    const content = contentRef.current;
    const Title = TitleRef.current;
    const hero = heroRef.current;
    const heroData = hero.children[0];
    const heroDataTitle1 = heroData.children[0];
    const heroDataTitle2 = heroData.children[1];
    const heroDataTitle1All = [...heroDataTitle1.children];
    const heroBottom = hero.children[2];
    const heroBottomAll = [...heroBottom.children];
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: content.parentElement,
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
        anticipatePin: 1,
        // markers: true,
      },
    });
    const animation = t1
      .to(content, {
        z: 500,
        rotateZ: 50,
        opacity: 0,
        duration: 1,
      })
      .to(
        Title,
        {
          opacity: 0,
          duration: 1,
        },
        0,
      )
      .from(
        heroDataTitle1All,
        {
          opacity: 0,
          y: 50,
          stagger: 0.3,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .from(
        heroDataTitle2,
        {
          opacity: 0,
          y: 50,
          stagger: 0.3,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .from(
        heroBottomAll,
        {
          opacity: 0,
          y: 50,
          stagger: 0.3,
          duration: 1,
          ease: "power3.out",
        },
        "-=1.5",
      );
    return () => {
      animation.kill();
      animation.scrollTrigger.kill();
    };
  }, []);
  return (
    <div className="wrapper w-full h-screen relative perspective-[26vw]">
      <div
        ref={TitleRef}
        className="absolute left-1/2 top-1/2 -translate-1/2 z-11 w-[31vw] pt-[2vh]"
      >
        <img src="/public/logo/bgk-logo.png" alt="" />
        <img src="/public/logo/bgk-5years.png" alt="" />
      </div>
      <div
        ref={contentRef}
        className="content absolute w-full h-full perspective-[26vw] bg-black z-10"
      >
        {texts.map((item, index) => (
          <div
            ref={item.topRef}
            key={index}
            className={`text-pink w-full h-full absolute preserve-3d font-["Restore"] text-center   overflow-hidden 
                ${item.className}`}
          >
            <span
              className={`w-full  overflow-hidden  origin-center leading-none flex items-center justify-center ${item.classNameTop}`}
            >
              {item.title1}
            </span>

            <span
              className={`w-full  overflow-hidden origin-center leading-none flex items-center justify-center ${item.classNameBottom}`}
            >
              {item.title2}
            </span>
          </div>
        ))}
      </div>
      <Hero ref={heroRef} />
    </div>
  );
}

export default Text3D;
