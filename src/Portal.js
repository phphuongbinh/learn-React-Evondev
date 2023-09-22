import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}

const portalWrapperEle = createPortalWrapper();

const Portal = ({
  containerClassName = "",
  bodyClassName = "",
  overlay = true,
  containerStyle = {},
  bodyStyle = {},
  onClose = () => {},
  children,
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperEle);
  }, []);
  const renderContent = (
    <div className={containerClassName} style={containerStyle}>
      {overlay && (
        <div
          className="absolute inset-0 bg-black bg-opacity-60 overlay"
          onClick={onClose}
        ></div>
      )}
      <div className={bodyClassName} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
  return createPortal(renderContent, portalWrapperEle);
};

Portal.propTypes = {
  containerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  onClose: PropTypes.func,
  children: PropTypes.node,
  overlay: PropTypes.bool.isRequired,
};

export default Portal;
