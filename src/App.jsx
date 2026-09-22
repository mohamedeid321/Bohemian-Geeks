import Header from "./Header/Header.jsx";

import SectionCards from "./SectionCards/SectionCards.jsx";
import About from "./About/About.jsx";
import Tibs from "./Tips/Tibs.jsx";
import Text3D from "./3dText/Text3D.jsx";
import { gsap } from "gsap/gsap-core";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollSmoother);

function App() {
  const smooth_wrapper = useRef(null);
  const smooth_content = useRef(null);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: smooth_wrapper.current,
      content: smooth_content.current,
      smooth: 1.5,
    });
    return () => {
      smoother.kill();
    };
  }, []);
  return (
    <div>
      <Header />
      <div ref={smooth_wrapper}>
        <div ref={smooth_content} className="overflow-hidden">
          <Text3D />

          <SectionCards />
          <About />
          <Tibs />
        </div>
      </div>
    </div>
  );
}

export default App;
