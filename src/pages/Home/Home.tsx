import { FC } from "react";
import style from "./Home.module.scss";
// import { useLocation } from "react-router-dom";

const Home: FC = () => {
  // const location = useLocation();
  // console.log("Current Location:", location);

  return (
    <div className={style["home"]}>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
