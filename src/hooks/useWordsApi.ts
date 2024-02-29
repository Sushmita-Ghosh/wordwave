import { useEffect, useState } from "react";
import axios from "axios";

type ApiReponse = {
  word?: string;
  phonetic?: string;
  meanings: [
    {
      partOfSpeech?: string;
      definitions: [{ definition: string }];
    }
  ];
};

const useWordsApi = (selectedWord: string) => {
  const [data, setData] = useState<ApiReponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`
        );

        if (data) {
          setData(data);
          setLoading(false);
        } else {
          // Handle the case when response.data is undefined
        }
      } catch (error) {
        setError(new Error("Failed to fetch data"));
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedWord]);

  return { data, loading, error };
};

export default useWordsApi;
