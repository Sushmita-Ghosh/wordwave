import { useState } from "react";
import Alphabet from "./components/Alphabet";
import Words from "./components/Words";
import WordDetails from "./components/WordDetails";
import wordsData from "./data/wordsData";

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  // get the details for the selected word from the wordsData.json
  const { commonWords, wordDetails } = wordsData;

  const selectLetter = (letter: string) => {
    setSelectedLetter(letter);
    setSelectedWord(null);
  };

  const selectWord = (word: string) => {
    setSelectedWord(word);
  };

  return (
    <div className="mx-auto p-8 min-h-screen  flex flex-col items-center justify-center bg-gradient-to-t from-indigo-100 via-fuchsia-400 to-indigo-100  ">
      <h1 className="animate-bounce text-5xl font-bold mb-4 bg-gradient-to-r  from-black to-gray-500 bg-clip-text text-transparent">
        Word Wave
      </h1>

      <Alphabet selectLetter={selectLetter} />
      <div className="w-full mt-8">
        <div className="shadow-xl bg-white rounded-xl">
          {selectedLetter && (
            <Words
              selectedLetter={selectedLetter}
              words={commonWords[selectedLetter]}
              selectWord={selectWord}
            />
          )}
          <div className="w-full">
            {selectedWord && (
              <WordDetails
                selectedWord={selectedWord}
                {...wordDetails[selectedWord]}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;