export const Button = ({ children, color }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="px-6 py-2 rounded-lg text-white shadow-md hover:scale-105 transition-transform duration-200"
    >
      {children}
    </button>
  );
};
