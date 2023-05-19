import React from "react";
import useLinkNewTab from "../../hooks/useLinkNewTab";
import useHover from "../../hooks/useHover";

const Blog = () => {
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  return (
    <div className="entry-content" ref={contentRef}>
      <p className="m-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.{" "}
        <a
          href="https://www.lipsum.com/"
          className={`underline ${hovered ? "text-green-400" : ""}`}
          ref={nodeRef}
        >
          google
        </a>
      </p>
      <p className="m-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book{" "}
        <a href="https://www.lipsum.com/" className="underline">
          google
        </a>
      </p>
      <p className="m-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book{" "}
        <a href="https://www.lipsum.com/" className="underline">
          google
        </a>
      </p>
    </div>
  );
};

export default Blog;
