import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import lodash from "lodash";

const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleHackerNewsApi = useRef({});

  handleHackerNewsApi.current = async () => {
    setLoading(true);
    try {
      const news = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(news.data?.hits || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happened:`);
    }
  };

  const handleUpdateValue = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 1000);

  useEffect(() => {
    handleHackerNewsApi.current();
  }, [query]);
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <input
        defaultValue={query}
        onChange={handleUpdateValue}
        className="border border-green-500 text-black p-5 mb-5"
      />
      <div>
        {loading && <p>Loading...</p>}
        {!loading && errorMessage && <p>{errorMessage}</p>}
        {!loading &&
          hits.length > 0 &&
          hits.map((item) => <h3 key={item.title}>{item.title}</h3>)}
      </div>
    </div>
  );
};

export default HackerNews;
