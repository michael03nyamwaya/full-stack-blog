import React from "react";


const Introduction = () => {
  return (
    <div className="mt-8">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-orange-400">
        <b className="text-blue-600">Your Ultimate Guide to</b> Starting a Business
      </h1>
      <div className="mt-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 h-[500px] relative  ">
          <img src="/pp.jpg" alt="" fill className="object-cover rounded-lg" />
        </div>
        <div className="flex-1 flex flex-col gap-5 ">
          <h1 className="text-4xl">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className="text-lg font-light text-gray-500 mt-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="py-4 px-5 border-none rounded-lg max-w-max">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
