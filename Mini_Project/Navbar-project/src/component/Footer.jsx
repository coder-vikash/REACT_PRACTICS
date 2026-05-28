export const Footer = () => {
  return (
    <div className="bg-red-300 py-5">
      <header
        className="max-w-[60rem] grid grid-cols-6 gap-6 text-2xl pb-8 text-black/80 m-auto 
                         max-[770px]:grid-cols-3 max-[440px]:grid-cols-1"
      >
        <h1 className="col-span-1">Brand</h1>

        <div className="flex flex-col gap-2 text-xl items-center">
          <h1 className="font-bold mb-2">Company</h1>
          <a href="">Features</a>
          <a href="">Use Case</a>
          <a href="">Integration</a>
          <a href="">Learn More</a>
          <a href="">About Us</a>
        </div>

        <div className="flex flex-col gap-2 text-xl items-center">
          <h1 className="font-bold mb-2">About Us</h1>
          <a href="">Features</a>
          <a href="">Use Case</a>
          <a href="">Integration</a>
          <a href="">Learn More</a>
          <a href="">About Us</a>
        </div>

        <div className="flex flex-col gap-2 text-xl items-center">
          <h1 className="font-bold mb-2">Contact Us</h1>
          <a href="">Features</a>
          <a href="">Use Case</a>
          <a href="">Integration</a>
          <a href="">Learn More</a>
          <a href="">About Us</a>
        </div>

        <div className="flex flex-col gap-2 text-xl items-center">
          <h1 className="font-bold mb-2">Support</h1>
          <a href="">Features</a>
          <a href="">Use Case</a>
          <a href="">Integration</a>
          <a href="">Learn More</a>
          <a href="">About Us</a>
        </div>
      </header>

      <div className="w-full h-[2px] bg-amber-200"></div>

      <div className="max-w-[60rem] pt-3 m-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center md:text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
          dolore?
        </p>
        <div className="flex gap-5">
          <a href="" className="font-bold">
            T
          </a>
          <a href="" className="font-bold">
            Y
          </a>
        </div>
      </div>
    </div>
  );
};
