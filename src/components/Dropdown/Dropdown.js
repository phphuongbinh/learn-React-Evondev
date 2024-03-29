import React, { useEffect, useRef, useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const Dropdown = () => {
  const {
    show: showDropdown,
    nodeRef: dropdownRef,
    setShow: setShowDropdown,
  } = useClickOutSide();
  return (
    <div className="relative w-full max-w-[400px]" ref={dropdownRef}>
      <div
        className="w-full p-5 border border-gray-200 rounded-lg cursor-pointer"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Selected
      </div>
      {showDropdown && (
        <div className="absolute left-0 w-full border border-gray-200 rounded-lg top-full">
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">ReactJS</div>
          <div className="p-5 cursor-pointer">NodeJS</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
