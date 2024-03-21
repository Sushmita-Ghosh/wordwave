import { useState } from "react";

interface AlphabetProps {
  selectLetter: (letter: string) => void;
}

const Alphabet = ({ selectLetter }: AlphabetProps) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const [active, setIsActive] = useState<string | null>(null);

  const handleButtonClick = (letter: string) => {
    selectLetter(letter);
    setIsActive(letter);
  };

  return (
    <div className="flex justify-center items-center gap-2 flex-wrap">
      {alphabet.split("").map((letter) => (
        <button
          key={letter}
          onClick={() => handleButtonClick(letter)}
          className={`px-2 py-1 md:px-5 md:py-3 bg-orange-500 shadow-md text-white hover:bg-orange-400 rounded ${
            active === letter ? "bg-orange-400 border-2 border-orange-500" : ""
          }`}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Alphabet;
