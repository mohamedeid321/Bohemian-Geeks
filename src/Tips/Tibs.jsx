import PanoramaSlider from "./PanoramaSlider.jsx";
const objects = [
  { src: `${import.meta.env.BASE_URL}3dCarosel/1.svg` },
  { src: `${import.meta.env.BASE_URL}3dCarosel/2.svg` },
  { src: `${import.meta.env.BASE_URL}3dCarosel/3.svg` },
  { src: `${import.meta.env.BASE_URL}3dCarosel/4.svg` },
];
function Tibs() {
  return (
    <div className="w-screen h-screen">
      <PanoramaSlider arrayCards={objects} />
    </div>
  );
}

export default Tibs;
