import React, { useLayoutEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");

  const handleChange = (e) => {
    setTextareaHeight("auto");
    setParentHeight("auto");
    setText(e.target.value);
  };

  useLayoutEffect(() => {
    setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
    setParentHeight(`${textareaRef.current.scrollHeight}px`);
  }, [text]);
  return (
    <div
      style={{
        minHeight: parentHeight,
      }}
    >
      <textarea
        value={text}
        ref={textareaRef}
        className="transition-all overflow-hidden max-w[400px] p-4 rounded-lg border border-gray-300 focus:border-blue-400 "
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
