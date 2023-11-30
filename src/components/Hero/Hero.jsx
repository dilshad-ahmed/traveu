import React from "react";

const Hero = ({ handleLoginPopup }) => {
  return (
    <>
      <main>
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
          <h1
            className="md:w-[550px] text-center text-4xl p-8 sm:p-2 sm:text-6xl md:text-8xl font-bold select-none mix-blend-exclusion text-white font-dancing
          "
          >
            Adopt the pace of nature.
          </h1>
          <p className="mix-blend-exclusion text-white md:w-[550px] text-center tracking-widest">
            Lorem ipsum, sit amet consectetur adipisicing elit.
          </p>
          <button
            onClick={handleLoginPopup}
            className="bg-orange-500 text-white py-1 px-5 rounded-full mt-7 hover:bg-orange-500/80 transition-200 "
          >
            Join Now
          </button>
        </div>
      </main>
    </>
  );
};

export default Hero;
