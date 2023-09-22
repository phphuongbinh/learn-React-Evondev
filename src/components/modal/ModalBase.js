import React, { useRef } from "react";
import Portal from "../../Portal";
import { CSSTransition } from "react-transition-group";

const ModalBase = ({ visible, onClose, children }) => {
  return (
    <>
      <CSSTransition in={visible} timeout={300} unmountOnExit classNames="zoom">
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            containerClassName="fixed z-[999] inset-0 flex items-center justify-center"
            bodyClassName="relative z-10 content"
            bodyStyle={{ transition: "all 250ms" }}
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
