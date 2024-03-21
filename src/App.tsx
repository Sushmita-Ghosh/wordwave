// import { useState } from "react";
// import Alphabet from "./components/Alphabet";
// import Words from "./components/Words";
// import WordDetails from "./components/WordDetails";
// import wordsData from "./data/wordsData";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";

const App = () => {
  // const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  // const [selectedWord, setSelectedWord] = useState<string | null>(null);

  // get the details for the selected word from the wordsData.json
  // const { commonWords, wordDetails } = wordsData;

  // const selectLetter = (letter: string) => {
  //   setSelectedLetter(letter);
  //   setSelectedWord(null);
  // };

  // const selectWord = (word: string) => {
  //   setSelectedWord(word);
  // };

  return (
    <div className=" min-h-screen  ">
      <Header />
      <Hero />
      <HowItWorks />
      {/* <Alphabet selectLetter={selectLetter} /> */}
      {/* <div className="w-full mt-8">
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
      </div> */}
    </div>
  );
};

export default App;
