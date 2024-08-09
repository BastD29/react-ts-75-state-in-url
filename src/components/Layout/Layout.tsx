import { FC, Suspense } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.scss";
// import { FilterProvider } from "../../context/FilterContext/FilterProvider";

const Layout: FC = () => {
  return (
    <div className={style["layout"]}>
      {/* <FilterProvider> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Outlet />
      </Suspense>
      {/* </FilterProvider> */}
    </div>
  );
};

export default Layout;
