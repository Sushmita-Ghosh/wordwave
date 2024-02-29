import useWordsApi from "../hooks/useWordsApi";

interface WordDetailsProps {
  selectedWord: string;
  image: string;
  description: string;
}

const WordDetails = ({
  selectedWord,
  image,
}: // description,
WordDetailsProps) => {
  const { data, loading, error } = useWordsApi(selectedWord);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="w-full px-4 md:px-4 py-3 pb-8 flex-col flex justify-center items-center">
      <div className="flex items-center flex-col justify-center w-full md:w-6/12 ">
        {/* Animation for Image  */}
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="h-96 w-72">
            <img
              src={image}
              alt={selectedWord}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-500  group-hover:from-indigo-500 group-hover:via-indigo-600 group-hover:to-indigo-500"></div>
          <div className="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-Lora text-3xl font-bold text-white capitalize">
              {data[0].word}
            </h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-Lora">
              {data[0].meanings[0]?.definitions[0].definition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordDetails;
