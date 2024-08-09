import { FC } from "react";
import { DEFAULT_ITEMS } from "../../data/data";
import { useSearchParams } from "react-router-dom";
import style from "./Store.module.scss";

const Store: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams:", searchParams.toString());

  const queryParams = {
    q: searchParams.get("q") || "",
    onlyComputerItems: searchParams.get("onlyComputerItems") === "true",
  };
  console.log("queryParams:", queryParams);

  const items: string[] = DEFAULT_ITEMS.filter((item) => {
    return (
      item.toLowerCase().includes(queryParams.q?.toLowerCase()) &&
      (!queryParams.onlyComputerItems ||
        (queryParams.onlyComputerItems &&
          (item === "Computer" || item === "Keyboard")))
    );
  });

  const handleSearch = (key: string, value: string | boolean) => {
    setSearchParams(
      (prev) => {
        prev.set(key, value.toString());
        return prev;
      },
      { replace: true }
    );
  };

  return (
    <div className={style["store"]}>
      <h2>Store</h2>
      <div>
        <label htmlFor="q">Title</label>
        <input
          type="text"
          id="q"
          value={queryParams.q}
          onChange={(e) => handleSearch("q", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="onlyComputerItems">Only computer items</label>
        <input
          type="checkbox"
          id="onlyComputerItems"
          checked={queryParams.onlyComputerItems}
          onChange={(e) => handleSearch("onlyComputerItems", e.target.checked)}
        />
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Store;
