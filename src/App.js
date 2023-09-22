import { Fragment } from "react";
import "./App.css";
import { useState } from "react";
import Tooltip from "./components/tooltip/Tooltip";
import Modal from "./components/modal/Modal";
import ModalBase from "./components/modal/ModalBase";
import TooltipAvenced from "./components/tooltip/TooltipAvenced";
function App() {
  const [openModalBase, setOpenModalBase] = useState(false);
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={() => setOpenModalBase(true)}
        className="p-3 text-white bg-blue-500 rounded-lg"
      >
        Open Modal
      </button>
      <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="bg-white p-10 rounded-lg w-full max-w-[320px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          sapiente temporibus molestias molestiae, ipsum maiores repellat saepe
          ex illo numquam.
        </div>
      </ModalBase>
      <TooltipAvenced overlay={false} title={"Tooltip"}>
        This is a tool tip
      </TooltipAvenced>
    </div>
  );
}

export default App;
