// import { useState } from "react";
// import Quize from "./Question.json";

// export const Question = ({ setIsOver, setScore }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);

//   const handleOption = (selectedOption) => {
//     setSelectedAnswer(selectedOption);

//     if (selectedOption === Quize.quiz[currentIndex].answer) {
//       setScore((prev) => prev + 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentIndex < Quize.quiz.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//       setSelectedAnswer(null);
//     } else {
//       setIsOver(true);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center p-6 max-w-2xl m-auto bg-amber-400 rounded-lg shadow-lg">
//       {/* Question */}
//       <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//         {Quize.quiz[currentIndex].question}
//       </h1>

//       {/* Options */}
//       <div className="flex flex-col gap-4 w-full">
//         {Quize.quiz[currentIndex].options.map((option, index) => (
//           <button
//             onClick={() => handleOption(option)}
//             key={index}
//             className={`px-4 py-2 rounded-md text-xl transition duration-200 shadow-md
//               ${
//                 selectedAnswer === option
//                   ? option === Quize.quiz[currentIndex].answer
//                     ? "bg-green-500 text-white"
//                     : "bg-red-500 text-white"
//                   : "bg-blue-500 text-white hover:bg-blue-600"
//               }`}
//           >
//             {option}
//           </button>
//         ))}
//       </div>

//       {/* Next Button */}
//       {selectedAnswer && (
//         <button
//           onClick={handleNext}
//           className="mt-6 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
//         >
//           Next Question →
//         </button>
//       )}
//     </div>
//   );
// };

import { useState } from "react";
import Quize from "./Question.json";

export const Question = ({ setIsOver, setScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOption = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    setShowFeedback(true);

    if (selectedOption === Quize.quiz[currentIndex].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < Quize.quiz.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setIsOver(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 max-w-2xl m-auto bg-amber-400 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        {Quize.quiz[currentIndex].question}
      </h1>

      <div className="flex flex-col gap-4 w-full">
        {Quize.quiz[currentIndex].options.map((option, index) => (
          <button
            onClick={() => handleOption(option)}
            key={index}
            disabled={showFeedback} // disable buttons after selection
            className={`px-4 py-2 rounded-md text-xl transition duration-200 shadow-md
              ${
                showFeedback && option === Quize.quiz[currentIndex].answer
                  ? "bg-green-500 text-white"
                  : showFeedback && option === selectedAnswer
                    ? "bg-red-500 text-white"
                    : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
          >
            {option}
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className="mt-4 text-lg font-medium">
          {selectedAnswer === Quize.quiz[currentIndex].answer ? (
            <p className="text-green-700">✅ Correct!</p>
          ) : (
            <p className="text-red-700">
              ❌ Wrong! Correct answer:{" "}
              <span className="font-bold">
                {Quize.quiz[currentIndex].answer}
              </span>
            </p>
          )}
          <button
            onClick={handleNext}
            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            Next Question →
          </button>
        </div>
      )}
    </div>
  );
};
