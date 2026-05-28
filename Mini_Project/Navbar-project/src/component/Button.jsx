export const Button = (props) => {
  return (
    <button className="bg-green-400 rounded-lg px-4 py-2 cursor-pointer">
      {props.text}
    </button>
  );
};
