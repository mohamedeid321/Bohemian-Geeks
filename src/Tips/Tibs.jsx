import PanoramaSlider from "./PanoramaSlider.jsx";
const objects = [
  { src: "/public/3dCarosel/1.svg" },
  { src: "/public/3dCarosel/2.svg" },
  { src: "/public/3dCarosel/3.svg" },
  { src: "/public/3dCarosel/4.svg" },
];
function Tibs() {
  return (
    <div className="w-screen h-screen">
      <PanoramaSlider arrayCards={objects} />
    </div>
  );
}

export default Tibs;
