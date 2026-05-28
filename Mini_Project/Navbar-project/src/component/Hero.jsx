import { Button } from "./Button";

export const Hero = () => {
  return (
    <div
      className="max-w-[55rem] m-auto text-center py-[8rem] px-4 
                    md:py-[6rem] sm:py-[4rem]"
    >
      {/* Headline */}
      <h1 className="text-7xl md:text-5xl sm:text-3xl font-serif font-bold leading-tight">
        The best Way to{" "}
        <span className="bg-yellow-300 rounded-2xl px-3">Review</span> Creative
        Assects
      </h1>

      {/* Paragraph */}
      <p className="text-lg md:text-base sm:text-sm my-7 max-w-[45rem] m-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsa.
        Totam eligendi veniam provident mollitia. Cumque quibusdam quae maiores
        doloribus qui amet deleniti? Illum architecto mollitia fugiat, quae
        error accusamus.
      </p>

      {/* CTA Button */}
      <Button text="Learn More" />
    </div>
  );
};
