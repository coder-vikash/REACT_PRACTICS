export const Popup = ({ Popup, setPopup }) => {
  return (
    <>
      {Popup && (
        <div className="w-screen h-screen absolute bg-red-500 top-0 left-0 flex justify-center items-center">
          {/* Close Button */}
          <button
            onClick={() => {
              setPopup(false);
            }}
            className="absolute bg-black text-white text-2xl right-4 top-4 cursor-pointer rounded-full px-3 py-1 hover:bg-gray-800 transition"
          >
            ❌
          </button>

          {/* Popup Content */}
          <div className="flex flex-col justify-center items-center gap-6 h-[30rem] w-[55rem] bg-amber-400 rounded-xl shadow-lg p-8">
            <h1 className="bg-black text-white text-3xl font-bold px-6 py-3 rounded-lg">
              ⚠️ Confirm
            </h1>
            <p className="text-xl text-black font-medium">
              Are you sure you want to delete these items?
            </p>

            {/* Action Buttons */}
            <div className="flex gap-6">
              <button className="bg-green-600 text-white text-xl px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition">
                Yes
              </button>
              <button className="bg-red-600 text-white text-xl px-6 py-2 rounded-lg shadow-md hover:bg-red-700 transition">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
