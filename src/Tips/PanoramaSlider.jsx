// import gsap from "gsap";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const radius = 450; // radius of the circle of the 3d carosel
const maxAngle = 100; //max angle for rotate Y
const N = 1; //number of cards left and right around the center card
// params to use to make the slider moves with the cursor

function PanoramaSlider({ arrayCards }) {
  const state = useRef({
    position: 0,
  }).current;
  const contentRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startPosition = useRef(0);
  function updateCards() {
    const content = contentRef.current; //holding parent of the cards
    const cards = [...content.children]; //holding the cards (childrens)
    const totalCards = cards.length;
    cards.forEach((card, index) => {
      let distance = index - state.position;
      // نحولها لمسافة دائرية
      distance =
        ((((distance + totalCards / 2) % totalCards) + totalCards) %
          totalCards) -
        totalCards / 2;
      const absDistance = Math.abs(distance);

      const sign = Math.sign(distance);

      // نحول المسافة لنسبة من 0 إلى 1
      const normalizedDistance = Math.min(absDistance / (N + 1), 1);

      // نحولها لزاوية
      const angle = normalizedDistance * maxAngle * (Math.PI / 180);

      // X على القوس
      const x = sign * radius * Math.sin(angle);

      // Z للأمام
      const z = radius * (1 - Math.cos(angle));

      // دوران الكارت مع اتجاه القوس
      const rotationY = sign * -maxAngle * normalizedDistance;

      gsap.set(card, {
        xPercent: -50,
        yPercent: -50,
        x: x,
        z: z,
        rotationY: rotationY,
      });
    });
    console.log(state.position);
  }
  //auto play part
  //-------------------- auto play ----------------------
  const AUTOPLAY_INTERVAL = 1.5; // auto play in sec
  const autoplayTimer = useRef(null);
  function goToNext() {
    gsap.killTweensOf(state);
    gsap.to(state, {
      position: state.position + 1,
      duration: 0.8,
      ease: "power2.inOut",
      onUpdate: updateCards,
    });
  }

  function startAutoplay() {
    stopAutoplay(); //
    autoplayTimer.current = setInterval(goToNext, AUTOPLAY_INTERVAL * 1000);
  }

  function stopAutoplay() {
    clearInterval(autoplayTimer.current);
  }
  //----------------------------------------------------------------

  useEffect(() => {
    updateCards();
    startAutoplay();

    return () => {
      stopAutoplay();
      gsap.killTweensOf(state);
    };
  }, []);
  // Pointer Down Handler
  function PointerDownHandler(e) {
    e.currentTarget.setPointerCapture(e.pointerId);

    gsap.killTweensOf(state);

    isDragging.current = true;

    startX.current = e.clientX;

    startPosition.current = state.position;

    stopAutoplay();

    document.body.classList.add("is-dragging");
  }

  // Pointer Move Handler
  function PointerMoveHandler(e) {
    if (!isDragging.current) return;

    const moveX = e.clientX - startX.current;

    state.position = startPosition.current - moveX / 400;

    updateCards();
  }

  // Pointer Up Handler
  function PointerUpHandler() {
    if (!isDragging.current) return;

    isDragging.current = false;

    gsap.to(state, {
      position: Math.round(state.position),
      duration: 0.6,
      ease: "power3.out",
      onUpdate: updateCards,
      onComplete: startAutoplay,
    });

    document.body.classList.remove("is-dragging");
  }
  return (
    <div
      onPointerDown={PointerDownHandler}
      onPointerMove={PointerMoveHandler}
      onPointerUp={PointerUpHandler}
      onPointerCancel={PointerUpHandler}
      className="wrapper w-full h-full perspective-[32vw] flex items-center justify-center"
    >
      <div ref={contentRef} className="content preserve-3d relative">
        {arrayCards.map((card, index) => (
          <div
            key={index}
            className="w-[20vw] h-[48vh] rounded-[2vw] will-change-transform absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <img
              draggable="false"
              src={card.src}
              alt="card"
              className="w-full h-full object-cover select-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PanoramaSlider;
