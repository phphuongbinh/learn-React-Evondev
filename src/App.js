import "./App.css";
import Arcordion from "./components/advanced-react/react-composition/Arcordion";
import Editable from "./components/advanced-react/react-composition/Editable";
function App() {
  return (
    <div className="max-w-[500px] mx-auto">
      <Arcordion header="Can I change my plan later?">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        dignissimos. Excepturi voluptate atque repudiandae! Pariatur.
      </Arcordion>
      <Arcordion header="Can I become a Front-end Developer?">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        dignissimos. Excepturi voluptate atque repudiandae! Pariatur.
      </Arcordion>
    </div>
  );
}

export default App;
