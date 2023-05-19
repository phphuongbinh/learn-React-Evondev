import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className={`youtube__item ${props.className}`}>
      <img src={props.image} alt="" className="youtube__image" />
      <div className="youtube__footer">
        <img src={props.avatar} alt="" className="youtube__avatar" />
        <div className="youtube__info">
          <h3 className="youtube__title">
            {props.title || "this is example title"}
          </h3>
          <h4 className="youtube__author">
            {props.author || "this is example name"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
