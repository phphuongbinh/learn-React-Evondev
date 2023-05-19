import axios from "axios";
import React, { useEffect, useReducer, useRef } from "react";
import useHackerNewsAPI from "../../hooks/useHackerNewsAPI";

const News = () => {
  console.log(useHackerNewsAPI());
  const { state, dispatch } = useHackerNewsAPI();
  console.log(state, dispatch);
  return (
    <div className="bg-white mx-auto  p-5 rounded-lg shadow-md w-2/4">
      <div className="flex gap-3 my-5">
        <input
          type="text"
          defaultValue={state.query}
          onChange={(e) =>
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value,
            })
          }
          className="border border-gray-200 p-5 block w-full transition-all rounded-md focus:border-blue-400"
          //   onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch({
              type: "SET_URL",
              payload: `http://hn.algolia.com/api/v1/search?query=${state.query}`,
            });
          }}
          className=" flex-shrink-0 p-5 rounded-lg font-semibold text-white bg-blue-500 cursor-pointer"
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <p className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></p>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading && state.errorMessage && (
          <div className="text-red-400 my-5">{state.errorMessage}</div>
        )}
        {!state.loading &&
          state.news.length > 0 &&
          state.news.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <div key={index} className="bg-gray-100 rounded-md p-3">
                {item.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default News;
