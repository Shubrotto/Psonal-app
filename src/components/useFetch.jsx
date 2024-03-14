import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((quotes) => {
        setQuotes(quotes.quotes);
      });
  }, [url]);
  return [quotes];
};

export default useFetch;
