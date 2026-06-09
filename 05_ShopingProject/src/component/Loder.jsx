import React from "react";

export const Loder = () => {
  return (
    <div className="p-30 text-center text-xl">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
        <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Please Wait Page Load Ho Raha Hai 🥰
        </p>
      </div>
    </div>
  );
};
