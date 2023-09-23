import { Fragment } from "react";
import "./App.css";
import { useCount } from "./contexts/countContext";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";

import BlogPage from "./components/BlogPage";
import ProfilePage from "./components/ProfilePage";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<div>Home Page</div>}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Route>
        <Route path="*" element={<div>This is 404 Page</div>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
