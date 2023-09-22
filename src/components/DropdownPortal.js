import React, { useEffect, useRef, useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";
import { ReactDOM } from "react";

const DropdownPortal = () => {
  const {
    show: showDropdown,
    nodeRef: dropdownRef,
    setShow: setShowDropdown,
  } = useClickOutSide();
  const [coords, setCoords] = useState({});
  const handleClick = () => {
    console.log(dropdownRef.current.getBoundingClientRect());
    setCoords(dropdownRef.current.getBoundingClientRect());
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="relative w-full max-w-[400px]" ref={dropdownRef}>
      <div
        className="w-full p-5 border border-gray-200 rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        Selected
      </div>
      {showDropdown && (
        <div
          className="absolute left-0 w-full border border-gray-200 rounded-lg top-full"
          style={{
            left: coords.left,
          }}
        >
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">ReactJS</div>
          <div className="p-5 cursor-pointer">NodeJS</div>
        </div>
      )}
    </div>
  );
};

export default DropdownPortal;
