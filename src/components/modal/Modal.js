import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = ({ open = false, handleClose = () => {} }) => {
  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-5 modal ${
        open ? "" : " opacity-0 invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-25 overlay"
        onClick={handleClose}
      ></div>
      <div className="relative z-10 w-full p-10 bg-white rounded-lg modal-content max-w-[482px] ">
        <span
          className="absolute p-2 text-white bg-red-500 rounded-md cursor-pointer top-1 right-1"
          onClick={handleClose}
        >
          Close
        </span>
        <h2 className="text-4xl font-semibold text-center text-black">
          Welcome Back
        </h2>
        <div className="flex flex-col gap-5 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 text-sm leading-normal bg-gray-200 rounded-lg"
          ></input>
        </div>
        <div className="flex flex-col gap-5 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-4 text-sm leading-normal bg-gray-200 rounded-lg"
          ></input>
        </div>
        <button className="w-full p-4 font-semibold text-white bg-blue-500 rounded-lg">
          Sign in
        </button>
      </div>
    </div>,
    document.querySelector("body")
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
