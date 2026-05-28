export const Button = (props) => {
  return (
    <div className="bg-blue-400 text-white rounded-lg px-3 py-2">
      <button className="cursor-pointer">{props.title}</button>
    </div>
  );
};
