import React from "react";
import withLoading from "./withLoading";

const FetchingData = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}></div>
      ))}
    </div>
  );
};

export default withLoading(
  FetchingData,
  "https://hn.algolia.com/api/v1/search?query=react"
);
