import React from "react";
import { useParams } from "react-router-dom";

const BlogPageDetail = () => {
  const { slug } = useParams();
  console.log(slug);
  return <div>BlogPageDetail</div>;
};

export default BlogPageDetail;
