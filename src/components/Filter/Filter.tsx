import { FC } from "react";
import { SetURLSearchParams } from "react-router-dom";
import style from "./Filter.module.scss";

type FilterPropsType = {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
};

const Filter: FC<FilterPropsType> = ({ searchParams, setSearchParams }) => {
  const handleFilter = (key: string, value: string | boolean) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev.toString()); // Clone the existing params
      params.set(key, value.toString()); // Update the specific filter
      return params;
    });
  };

  return (
    <div className={style["filter"]}>
      <div className={style["filter__filter"]}>
        <label htmlFor="name">Name</label>
        <input
          type="search"
          id="name"
          value={searchParams.get("name") || ""}
          onChange={(e) => handleFilter("name", e.target.value)}
          placeholder="Name"
        />
      </div>
      <div className={style["filter__filter"]}>
        <label htmlFor="inStock">In stock</label>
        <input
          type="checkbox"
          id="inStock"
          checked={searchParams.get("inStock") === "true"}
          onChange={(e) => handleFilter("inStock", e.target.checked)}
        />
      </div>
      <div className={style["filter__filter"]}>
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id="price"
          min="0"
          max="1200"
          value={searchParams.get("price") || ""}
          onChange={(e) => handleFilter("price", e.target.value)}
        />
        <span>{searchParams.get("price") || ""}</span>
      </div>
      <div className={style["filter__filter"]}>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={searchParams.get("category") || ""}
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
    </div>
  );
};

export default Filter;
