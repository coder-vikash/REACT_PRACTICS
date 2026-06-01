export const Result = ({ score }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="text-3xl font-mono bg-gray-800 px-6 py-4 rounded-lg shadow-lg border border-gray-700 text-white">
        🎉 Quiz Finished! <br />✅ Your Score:{" "}
        <span className="text-green-400">{score}</span>
      </div>
    </div>
  );
};
