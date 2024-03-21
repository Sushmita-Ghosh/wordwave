import grid1 from "../assets/grid1.jpg";
import grid2 from "../assets/grid2.jpg";
import grid3 from "../assets/grid3.jpg";
import grid4 from "../assets/grid4.jpg";

const Hero = () => {
  return (
    <section className="hero p-10 gap-4 flex flex-col md:flex-row items-center justify-between">
      <div className="left-section py-10 md:w-6/12">
        <span className="text-orange-500 text-sm font-Lora">AI IMAGE</span>
        <h1 className="text-6xl font-bold  py-4">
          Turn your Text into the
          <span className="text-orange-500 "> Images</span> in Seconds
        </h1>
        <p className="text-lg  pt-5 text-gray-500">
          Convert words into an image in mere seconds with the Image Generator.
          Type a detailed description
        </p>

        {/* div section for buttons */}
        <div className="py-5 flex items-center gap-3">
          <input
            type="text"
            className="outline-none px-5 py-3 border shadow-xl border-gray-200 rounded-full focus:border focus:border-orange-500 w-6/12 "
            placeholder="Enter a description"
          />

          <button className=" rounded-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-4">
            Generate
          </button>
        </div>
      </div>

      <div className="right-section relative md:w-6/12 ">
        {/* top dots */}
        <div className="absolute top-[-2rem] left-[-2rem] h-40 w-40 bg-white bg-[radial-gradient(#8a7e7e_1px,transparent_1px)] [background-size:16px_16px] -z-10" />
        {/* bottom dots */}
        <div className="absolute bottom-[4rem] right-[-2rem] h-72 w-40 bg-white bg-[radial-gradient(#8a7e7e_1px,transparent_1px)] [background-size:16px_16px] -z-10" />
        {/* grid section */}
        <div className=" relative grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <img
              className="object-cover object-center w-full  h-70 max-w-full rounded-lg"
              src={grid1}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="object-cover object-center w-full h-70 max-w-full rounded-lg"
              src={grid2}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="object-cover object-center w-full h-70 max-w-full rounded-lg"
              src={grid3}
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="object-cover object-center w-full h-70 max-w-full rounded-lg"
              src={grid4}
              alt="gallery-photo"
            />
          </div>
        </div>
        {/* top dots */}
        {/* <div className="absolute top-[-3rem] left-[-1rem] inset-0 h-40 w-40 -z-10 bg-white bg-[radial-gradient(#d3d5db_1px,transparent_1px)] [background-size:16px_16px]" /> */}
      </div>
    </section>
  );
};

export default Hero;
