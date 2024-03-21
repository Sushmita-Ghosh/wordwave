import Card from "../atoms/Card";
import card3 from "../assets/card3.jpeg";
import scroll from "../assets/scroll.png";
const HowItWorks = () => {
  return (
    <section className="how-it-works py-20">
      <div className="flex flex-col items-center justify-center">
        <span className="text-orange-500 text-sm font-Lora">HOW IT WORKS</span>
        <h1 className="text-5xl font-bold text-center">
          How to Generate
          <span className="text-orange-500"> Images</span>
        </h1>
      </div>

      {/* grid section for cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 pt-20">
        {/* card 1 */}
        <Card
          children={
            <div className="m-10 h-[10rem] bg-white flex justify-center items-center rounded">
              <p className="p-5 text-sm">
                <span className="my-2 block bg-gradient-to-r from-gray-100 to-orange-50 ">
                  AI Content Generator Tool creates content
                </span>{" "}
                <span className="my-2 block bg-gradient-to-r from-gray-100  to-orange-50 ">
                  for a wide range professional needs. From
                </span>{" "}
                <span className="my-2 block bg-gradient-to-r from-gray-100  to-orange-50 ">
                  headlines to entire articles
                </span>
              </p>
            </div>
          }
          heading="Speak Or Type"
          paragraph="Click the A-Z buttons or Generate the prompt by speaking the word"
        />

        {/* card 2 */}
        <Card
          children={
            <div className="m-10 h-[10rem] bg-white flex justify-center items-center rounded">
              <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-4 rounded">
                Generate
              </button>
            </div>
          }
          heading="Click on Generate"
          paragraph="Click on the Generate button to generate the image"
        />
        <Card
          children={
            <div className="m-10 h-[10rem] rounded">
              <img
                src={card3}
                alt="card"
                className="w-full h-full rounded object-cover object-center"
              />
              <div className="absolute top-[50%] right-[42%]">
                <img src={scroll} alt="scroll" className="w-10 h-10" />
              </div>
            </div>
          }
          heading="Download Image"
          paragraph="With our image generator, you can download any image you want"
        />
      </div>
    </section>
  );
};
export default HowItWorks;
