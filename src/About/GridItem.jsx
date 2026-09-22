function GridItem({
  type,
  src,
  text,
  className = "",
  objectPosition = " text-center",
}) {
  if (type === "text") {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <h2>{text}</h2>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-[1.2vw] bg-[#d0d0d0] ${className}`}
    >
      <img
        src={src}
        alt=""
        className={`w-full h-full object-contain grayscale transition-all duration-300 ease-in-out scale-100 hover:scale-115 ${objectPosition}`}
      />
    </div>
  );
}

export default GridItem;
