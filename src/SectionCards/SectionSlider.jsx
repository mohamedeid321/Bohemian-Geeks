import { useEffect, useRef } from "react";
import { gsap } from "gsap";
const minCards = [
  { id: 1, src: `${import.meta.env.BASE_URL}logos-slider/1.png` },
  { id: 2, src: `${import.meta.env.BASE_URL}logos-slider/3.png` },
  { id: 3, src: `${import.meta.env.BASE_URL}logos-slider/4.png` },
  { id: 4, src: `${import.meta.env.BASE_URL}logos-slider/5.png` },
  { id: 5, src: `${import.meta.env.BASE_URL}logos-slider/6.png` },
  { id: 6, src: `${import.meta.env.BASE_URL}logos-slider/7.png` },
  { id: 7, src: `${import.meta.env.BASE_URL}logos-slider/8.png` },
  { id: 8, src: `${import.meta.env.BASE_URL}logos-slider/9.png` },
  { id: 9, src: `${import.meta.env.BASE_URL}logos-slider/11.png` },
  { id: 10, src: `${import.meta.env.BASE_URL}logos-slider/12.png` },
  { id: 11, src: `${import.meta.env.BASE_URL}logos-slider/13.png` },
  { id: 12, src: `${import.meta.env.BASE_URL}logos-slider/14.png` },
  { id: 13, src: `${import.meta.env.BASE_URL}logos-slider/15.png` },
  { id: 14, src: `${import.meta.env.BASE_URL}logos-slider/16.png` },
  { id: 15, src: `${import.meta.env.BASE_URL}logos-slider/17.png` },
  { id: 16, src: `${import.meta.env.BASE_URL}logos-slider/18.png` },
  { id: 17, src: `${import.meta.env.BASE_URL}logos-slider/19.png` },
  { id: 18, src: `${import.meta.env.BASE_URL}logos-slider/20.png` },
  { id: 19, src: `${import.meta.env.BASE_URL}logos-slider/21.png` },
  { id: 20, src: `${import.meta.env.BASE_URL}logos-slider/22.png` },
  { id: 21, src: `${import.meta.env.BASE_URL}logos-slider/23.png` },
  { id: 22, src: `${import.meta.env.BASE_URL}logos-slider/24.png` },
  { id: 23, src: `${import.meta.env.BASE_URL}logos-slider/25.png` },
  { id: 24, src: `${import.meta.env.BASE_URL}logos-slider/26.png` },
  { id: 25, src: `${import.meta.env.BASE_URL}logos-slider/27.png` },
  { id: 26, src: `${import.meta.env.BASE_URL}logos-slider/28.png` },
];
function SectionSlider() {
  const sliderRef = useRef(null);

  const sliderCards = [...minCards, ...minCards];
  useEffect(() => {
    const slider = sliderRef.current;
    const cards = slider.children;
    const firstCard = cards[0];
    const cardWidth = firstCard.offsetWidth;
    const gap = parseFloat(getComputedStyle(slider).gap);
    const singleSetWidth = (cardWidth + gap) * minCards.length;
    const animation = gsap.to(slider, {
      x: -singleSetWidth,
      duration: 60,
      ease: "none",
      repeat: -1,
    });
    return () => {
      animation.kill();
    };
  }, []);
  return (
    <div className="w-full overflow-hidden mask-fade-x select-none">
      <div
        ref={sliderRef}
        className="flex w-max gap-[5vw] items-center py-[12vh]"
      >
        {sliderCards.map((card, index) => (
          <div key={`${card.id}-${index}`} className="card w-[8vw] shrink-0">
            <img src={card.src} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default SectionSlider;
