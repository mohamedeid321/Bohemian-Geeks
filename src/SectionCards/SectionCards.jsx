import Card from "./Card";
import SectionSlider from "./SectionSlider";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const bigCards = [
  {
    id: 1,
    src: "/public/tilt-6-images/al-gioshy.jpg",
    title: "Al Gioshy Steel",
  },
  {
    id: 2,
    src: "/public/tilt-6-images/alrashid.jpg",
    title: "Alrashid",
  },
  {
    id: 3,
    src: "/public/tilt-6-images/Corridor-talks-Calendar.webp",
    title: "Corridor Talks",
  },
  { id: 4, src: "/public/tilt-6-images/master-gold.jpg", title: "Master Gold" },
  { id: 5, src: "/public/tilt-6-images/riot.jpg", title: "Riot" },
  { id: 6, src: "/public/tilt-6-images/tireex.jpg", title: "Tireex" },
];
function SectionCards() {
  const contentCardsRef = useRef(null);
  useEffect(() => {
    const contentCards = contentCardsRef.current;

    const animation = gsap.from(contentCards.children, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contentCards,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
    return () => {
      animation.kill();
      animation.scrollTrigger.kill();
    };
  }, []);
  return (
    <div>
      <div className="w-full h-max bg-black overflow-hidden">
        <SectionSlider />
        <div className="wrapper">
          <div
            ref={contentCardsRef}
            className="content w-full h-max grid grid-cols-1 md:grid-cols-3 grid-rows-6 md:grid-rows-2  gap-[4vh] place-items-center px-[2vw] pb-[5vh]"
          >
            {bigCards.map((card) => (
              <Card key={card.id} src={card.src} title={card.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionCards;
