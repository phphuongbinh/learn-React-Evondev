import React from "react";
import { useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("search"));
  return <div>Blog</div>;
};

export default BlogPage;
