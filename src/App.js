import { Fragment } from "react";
import "./App.css";
import { CountProvider, useCount } from "./contexts/countContext";
import { AuthProvider } from "./contexts/auth-context";
import HeaderMain from "./components/HeaderMain";
import { GalleyProvider } from "./contexts/gallery-context";
import PhotoList from "./components/gallery/PhotoList";
import CartList from "./components/gallery/CartList";

function CountDisplay() {
  const [count] = useCount();
  return <div>The count is: {count}</div>;
}

function Counter() {
  const [, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      onClick={increment}
      className="p-4 font-semibold text-white rounded-lg bg-violet-500"
    >
      Increment
    </button>
  );
}

function App() {
  return (
    <Fragment>
      {/* <div className="flex items-center justify-center p-5 gap-x-5">
        <CountProvider>
          <CountDisplay></CountDisplay>
          <Counter></Counter>
        </CountProvider>
      </div> */}
      <AuthProvider>
        <GalleyProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </GalleyProvider>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
