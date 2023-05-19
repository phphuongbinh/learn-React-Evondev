import axios from "axios";
import { useEffect, useReducer, useRef } from "react";

const initialState = {
  news: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: `http://hn.algolia.com/api/v1/search?query=''`,
};

const hackerNewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, news: action.payload };
    }

    case "SET_LOADING": {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case "SET_ERROR": {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }

    case "SET_QUERY": {
      return {
        ...state,
        query: action.payload,
      };
    }

    case "SET_URL": {
      return {
        ...state,
        url: action.payload,
      };
    }

    default:
      break;
  }
};

export default function useHackerNewsAPI() {
  const [state, dispatch] = useReducer(hackerNewsReducer, initialState);
  const handleGetApi = useRef("");

  handleGetApi.current = async () => {
    // setLoading(true);
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(state.url);
      //   setNews(response.data.hits);
      setTimeout(() => {
        dispatch({
          type: "SET_DATA",
          payload: response.data?.hits,
        });
        //   setLoading(false);
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
      }, 3000);
    } catch (error) {
      //   setLoading(false);
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      //   setErrorMessage(`Error: ${error}`);
      dispatch({
        type: "SET_ERROR",
        payload: `Error: ${state.error}`,
      });
    }
  };

  useEffect(() => {
    handleGetApi.current();
  }, [state.url]);

  return {
    state,
    dispatch,
  };
}
