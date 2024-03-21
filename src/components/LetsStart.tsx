import { useState } from "react";
import Alphabet from "./Alphabet";
import audio from "../assets/audio.gif";
import report from "../assets/report.gif";

const LetsStart = () => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  console.log(selectedLetter);
  console.log(selectedWord);

  const selectLetter = (letter: string) => {
    setSelectedLetter(letter);
    setSelectedWord(null);
  };

  return (
    <section className="lets-start pb-10">
      {/* heading */}
      <div className="flex flex-col items-center justify-center">
        <span className="text-orange-500 text-sm font-Lora uppercase">
          Let's Start
        </span>
        <h1 className="text-5xl font-bold text-center">
          Turn your Text into
          <span className="text-orange-500"> Images</span>
        </h1>
        <p className="text-gray-500 text-center py-5">
          Either click on the buttons or speak by clicking generate
        </p>
      </div>

      {/* keyboard section */}
      <div className="flex flex-col md:flex-row items-center justify-between py-10 px-10 gap-5 md:gap-10">
        <div className="left-section rounded flex justify-center items-center w-full md:w-6/12 md:min-h-[22rem] py-10 px-5 bg-gradient-to-r from-gray-100 to-orange-50">
          <div className="border-8 border-orange-500 rounded-xl p-4 ">
            <Alphabet selectLetter={selectLetter} />
          </div>
        </div>

        <div className="right-section rounded py-10 w-full md:w-6/12 flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-orange-50">
          <div className="flex flex-row items-center justify-center pb-10">
            <img
              className="h-20 md:h-[10rem] object-fit rounded"
              src={audio}
            ></img>
            <img
              className="h-16 md:h-[6rem] object-fit rounded"
              src={report}
            ></img>
          </div>

          <button className="rounded-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-4 mt-5">
            Generate
          </button>
        </div>
      </div>
    </section>
  );
};

export default LetsStart;
