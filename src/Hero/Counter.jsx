import { useRef, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
function Counter({ target, suffix = "", className = "" }) {
  const counterRef = useRef(null);
  useEffect(() => {
    const el = counterRef.current;
    let obj = { val: 0 };

    const anim = gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 70%",
        once: true,
      },
      onUpdate: () => {
        el.textContent = Math.floor(obj.val);
      },
    });
    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [target]);

  return (
    <div className={className}>
      <h1 ref={counterRef}>0</h1>
      {suffix && <span>{suffix}</span>}
    </div>
  );
}

export default Counter;
