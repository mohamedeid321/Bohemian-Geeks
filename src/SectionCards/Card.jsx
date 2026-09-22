import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Card({
  src = "/public/tilt-6-images/tireex.jpg",
  title = "put your title",
}) {
  const maxTilt = 10;
  const wrapperRef = useRef(null);

  function getTiltValues(e, cardEl) {
    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = x / rect.width - 0.5;
    const percentY = y / rect.height - 0.5;

    return {
      rotateY: -percentX * maxTilt * 2,
      rotateX: percentY * maxTilt * 2,
    };
  }

  function MouseMoveHandler(e) {
    const wrapper = wrapperRef.current;
    const card = wrapper.children[0];
    const { rotateX, rotateY } = getTiltValues(e, card);

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.05,
      duration: 1,
      ease: "power2.out",
    });
  }

  function MouseLeaveHandler() {
    const wrapper = wrapperRef.current;
    const card = wrapper.children[0];
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 1,
      ease: "power4.out", // إحساس "مطاطي" لطيف وقت الرجوع بس
    });
  }
  return (
    <div
      ref={wrapperRef}
      onMouseMove={MouseMoveHandler}
      onMouseLeave={MouseLeaveHandler}
      className="wrapper flex items-center justify-center w-[90vw] md:w-[30vw] h-[75vh] perspective-[74vh]"
    >
      <div className="group  content flex items-center justify-center w-full h-full relative rounded-[2vh] overflow-hidden preserve-3d">
        <h1
          className="title absolute top-1/2 left-1/2 -translate-1/2 text-[2vw] font-bold text-center
           text-white z-3 opacity-0 scale-y-0 transition-all duration-300 ease-in-out  group-hover:opacity-100 group-hover:scale-y-100 "
        >
          {title}
        </h1>
        <div
          className="
      absolute
      inset-0
      bg-black/0
      transition-all
      duration-300
      group-hover:bg-black/30
      
    "
        ></div>
        <img
          src={src}
          alt=""
          className="
      w-full
      h-full
      object-cover
      transition-all
      duration-300
      group-hover:scale-105
      group-hover:blur-[3px]
      group-hover:brightness-50
      
    "
        />
      </div>
    </div>
  );
}

export default Card;
