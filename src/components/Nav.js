import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const listLink = [
  {
    id: 1,
    path: "/",
    title: "Home",
  },
  {
    id: 1,
    path: "/blog",
    title: "Blog",
  },
  {
    id: 1,
    path: "/profile",
    title: "Profile",
  },
];

const Nav = () => {
  return (
    <>
      <div className="p-5 shadow-md bg-white flex items-center justify-center gap-x-5">
        {listLink &&
          listLink.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => (isActive ? "text-green-500" : "")}
            >
              {item.title}
            </NavLink>
          ))}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
