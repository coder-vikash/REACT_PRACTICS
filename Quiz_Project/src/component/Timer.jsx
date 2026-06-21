// import { useState, useEffect } from "react";

// export const Timer = () => {
//   const [timer, setTimer] = useState(5);
//   const [formattedTime, setFormattedTime] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer((prev) => {
//         if (prev <= 1) {
//           clearInterval(interval);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(interval); // cleanup
//   }, []);

//   useEffect(() => {
//     const newFormattedTime = `${Math.floor(timer / 60)
//       .toString()
//       .padStart(2, "0")} : ${(timer % 60).toString().padStart(2, "0")}`;

//     setFormattedTime(newFormattedTime);
//   }, [timer]);

//   return (
//     <div className="flex items-center justify-center pt-10">
//       <div className="text-3xl font-mono bg-gray-800 px-6 py-1 rounded-lg shadow-lg border border-gray-700">
//         ⌚ Timer Left: <span className="text-green-400">{formattedTime}</span>
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from "react";

export const Timer = ({ setIsOver }) => {
  const [timer, setTimer] = useState(20); // start at 60 seconds
  const [formattedTime, setFormattedTime] = useState("01:00");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setIsOver(true);
    }
    const minutes = Math.floor(timer / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timer % 60).toString().padStart(2, "0");
    setFormattedTime(`${minutes}:${seconds}`);
  }, [timer, setIsOver]);

  return (
    <div className="flex items-center justify-center pt-10">
      <div className="text-4xl font-mono bg-gray-900 text-white px-8 py-4 rounded-lg shadow-lg border border-gray-700">
        ⏳ Time Left:{" "}
        <span
          className={`${
            timer <= 10 ? "text-red-400 font-bold" : "text-green-400"
          }`}
        >
          {formattedTime}
        </span>
      </div>
    </div>
  );
};
