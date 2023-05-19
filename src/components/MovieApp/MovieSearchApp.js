import axios from "axios";
import React, { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import LoadingSkeleton from "../loading/LoadingSkeleton";

// https://api.themoviedb.org/3/movie/550?api_key=2e95e6fd928ef2111035543f379e0ae2
// https://api.themoviedb.org/3/search/movie?api_key=2e95e6fd928ef2111035543f379e0ae2&query=Jack+Reacher

const MovieSearchApp = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("jack");
  const [loading, setLoading] = useState(false);
  const queryDebounce = useDebounce(query, 500);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=2e95e6fd928ef2111035543f379e0ae2&query=${queryDebounce}`
      );
      if (response.data.results) {
        setMovies(response.data.results);
        setLoading(false);
      }
    }
    fetchData();
  }, [queryDebounce]);
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto">
        <input
          type="text"
          className="w-full p-5 border border-violet-500 shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2);] rounded-lg"
          placeholder="Search movie..."
          onChange={handleSearch}
          value={query}
        />
      </div>
      {loading && (
        <div className="grid grid-cols-3 gap-5 mt-20">
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
          <MovieItemLoading></MovieItemLoading>
        </div>
      )}
      {!loading && (
        <div className="grid grid-cols-3 gap-5 mt-20">
          {movies.length > 0 &&
            movies.map((movie) => <MovieItem key={movie.id} data={movie} />)}
        </div>
      )}
    </div>
  );
};

const MovieItemLoading = () => {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-md flex flex-col">
      <div className="h-[297px]">
        <LoadingSkeleton
          width="100%"
          height="100%"
          radius="16px"
        ></LoadingSkeleton>
      </div>
      <div className="p-8 flex flex-col flex-1">
        <h4 className="mb-4 text-xl text-black font-semibold">
          <LoadingSkeleton width="100%" height="20px"></LoadingSkeleton>
        </h4>
        <p className="mb-6 text-[#999] ">
          <LoadingSkeleton height="10px"></LoadingSkeleton>
          <div className="h-2"></div>
          <LoadingSkeleton height="10px"></LoadingSkeleton>
          <div className="h-2"></div>
          <LoadingSkeleton height="10px"></LoadingSkeleton>
        </p>
        <div className="flex items-center gap-x-3 mt-auto">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66713 1.02447C7.7719 0.702008 8.2281 0.702009 8.33287 1.02447L9.71753 5.28602C9.76439 5.43023 9.89877 5.52786 10.0504 5.52786H14.5313C14.8703 5.52786 15.0113 5.96173 14.737 6.16102L11.1119 8.7948C10.9892 8.88393 10.9379 9.04191 10.9847 9.18612L12.3694 13.4477C12.4742 13.7701 12.1051 14.0383 11.8308 13.839L8.20572 11.2052C8.08305 11.1161 7.91695 11.1161 7.79428 11.2052L4.16918 13.839C3.89488 14.0383 3.52581 13.7701 3.63059 13.4477L5.01525 9.18612C5.06211 9.04191 5.01078 8.88393 4.88811 8.7948L1.26301 6.16102C0.988711 5.96173 1.12968 5.52786 1.46874 5.52786H5.9496C6.10123 5.52786 6.23561 5.43023 6.28247 5.28602L7.66713 1.02447Z"
              stroke="#FFB86C"
              strokeWidth="1.5"
            />
          </svg>

          <span className="text-sm font-semibold text-[#333]">
            <LoadingSkeleton width="50px" height="20px"></LoadingSkeleton>
          </span>
        </div>
      </div>
    </div>
  );
};

const MovieItem = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-white p-3 rounded-2xl shadow-md flex flex-col">
      <div className="h-[297px]">
        <img
          className="w-full h-full object-cover rounded-lg"
          alt="show"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <h4 className="mb-4 text-xl text-black font-semibold">{data.title}</h4>
        <p className="mb-6 text-[#999] ">{data.overview}</p>
        <div className="flex items-center gap-x-3 mt-auto">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66713 1.02447C7.7719 0.702008 8.2281 0.702009 8.33287 1.02447L9.71753 5.28602C9.76439 5.43023 9.89877 5.52786 10.0504 5.52786H14.5313C14.8703 5.52786 15.0113 5.96173 14.737 6.16102L11.1119 8.7948C10.9892 8.88393 10.9379 9.04191 10.9847 9.18612L12.3694 13.4477C12.4742 13.7701 12.1051 14.0383 11.8308 13.839L8.20572 11.2052C8.08305 11.1161 7.91695 11.1161 7.79428 11.2052L4.16918 13.839C3.89488 14.0383 3.52581 13.7701 3.63059 13.4477L5.01525 9.18612C5.06211 9.04191 5.01078 8.88393 4.88811 8.7948L1.26301 6.16102C0.988711 5.96173 1.12968 5.52786 1.46874 5.52786H5.9496C6.10123 5.52786 6.23561 5.43023 6.28247 5.28602L7.66713 1.02447Z"
              stroke="#FFB86C"
              strokeWidth="1.5"
            />
          </svg>
          <span className="text-sm font-semibold text-[#333]">
            {data.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieSearchApp;
