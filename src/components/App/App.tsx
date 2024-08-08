import { FC } from "react";
import Chat from "../Chat/Chat";
import style from "./App.module.scss";

const App: FC = () => {
  return (
    <div className={style["app"]}>
      <Chat />
    </div>
  );
};

export default App;
