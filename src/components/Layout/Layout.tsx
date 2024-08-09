import { FC, Suspense } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.scss";

const Layout: FC = () => {
  return (
    <div className={style["layout"]}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
