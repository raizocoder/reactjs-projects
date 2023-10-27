import { NavLink, Outlet } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      {/* <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link> */}

      {/* NavLink is use instead of link tag bcoz link tag has no active class feature which is object for current page is shown */}
      <NavLink
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
        to="/contact"
      >
        About
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
        to="/about"
      >
        Contact
      </NavLink>
      <Outlet />
    </>
  );
};

export default Navigation;
