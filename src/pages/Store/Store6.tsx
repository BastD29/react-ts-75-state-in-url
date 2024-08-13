import { FC, useMemo } from "react";
import { DEFAULT_ITEMS } from "../../data/data2";
import { filterItems } from "../../utils/filterItems";
import { useFilterContext } from "../../hooks/useFilterContext2";
import { SET_FILTER } from "../../constants/actions";
import style from "./Store.module.scss";

const Store: FC = () => {
  const { state, dispatch } = useFilterContext();

  const filteredItems = useMemo(
    () => filterItems(DEFAULT_ITEMS, state.filters || new URLSearchParams()),
    [DEFAULT_ITEMS, state.filters]
  );

  const handleFilter = (key: string, value: string | boolean) => {
    const newFilters = new URLSearchParams(state.filters || undefined);
    // console.log("newFilters:", newFilters);
    newFilters.set(key, value.toString());
    // console.log("newFilters:", newFilters.toString());
    dispatch({ type: SET_FILTER, payload: newFilters });
  };

  return (
    <div className={style["store"]}>
      <h2>Store</h2>
      <div className={style["store__filter"]}>
        <label htmlFor="name">Name</label>
        <input
          type="search"
          id="name"
          // value={filters.get("name") || ""}
          value={state.filters?.get("name") || ""}
          onChange={(e) => handleFilter("name", e.target.value)}
          placeholder="Name"
        />
      </div>
      <div className={style["store__filter"]}>
        <label htmlFor="inStock">In stock</label>
        <input
          type="checkbox"
          id="inStock"
          // checked={filters.get("inStock") === "true"}
          checked={state.filters?.get("inStock") === "true"}
          onChange={(e) => handleFilter("inStock", e.target.checked)}
        />
      </div>
      <div className={style["store__filter"]}>
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id="price"
          min="0"
          max="1200"
          // value={filters.get("price") || ""}
          value={state.filters?.get("price") || ""}
          onChange={(e) => handleFilter("price", e.target.value)}
        />
        {/* <span>{filters.get("price") || ""}</span> */}
        <span>{state.filters?.get("price") || ""}</span>
      </div>
      <div className={style["store__filter"]}>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          // value={filters.get("category") || ""}
          value={state.filters?.get("category") || ""}
          onChange={(e) => handleFilter("category", e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="literature">Literature</option>
          <option value="transportation">Transportation</option>
          <option value="accessories">Accessories</option>
          <option value="kitchenware">Kitchenware</option>
        </select>
      </div>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Store;
