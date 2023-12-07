import Navbar from "./Navbar";
import { Outlet } from "react-router";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
