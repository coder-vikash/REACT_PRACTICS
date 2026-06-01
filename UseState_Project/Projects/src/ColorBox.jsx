export const ColorBox = ({ color }) => {
  return (
    <div
      className="w-[350px] h-[300px] rounded-2xl text-center content-center border-3 border-black text-black flex flex-col justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <h1>{color.toUpperCase()}</h1>
    </div>
  );
};
