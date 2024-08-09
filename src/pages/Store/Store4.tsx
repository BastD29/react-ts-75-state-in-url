import { FC } from "react";
import { DEFAULT_ITEMS } from "../../data/data2";
import { useSearchParams } from "react-router-dom";
import { ArticleType } from "../../types/article";
import style from "./Store.module.scss";

const Store: FC = () => {
  const [filters, setFilters] = useSearchParams();
  console.log("filters:", filters.toString());

  const queryParams = {
    name: filters.get("name") || "",
    category: filters.get("category") || "",
    price: filters.get("price") || "",
    inStock: filters.get("inStock") === "true",
  };
  console.log("queryParams:", queryParams);

  const items: ArticleType[] = DEFAULT_ITEMS;
  console.log("items:", items);

  const filteredItems = items.filter((item) => {
    const matchesName = queryParams.name
      ? item.name.toLowerCase().includes(queryParams.name.toLowerCase())
      : true;
    const matchesCategory = queryParams.category
      ? item.category.toLowerCase() === queryParams.category.toLowerCase()
      : true;
    const matchesPrice = queryParams.price
      ? item.price <= parseFloat(queryParams.price)
      : true;
    const matchesInStock = queryParams.inStock
      ? item.inStock === queryParams.inStock
      : true;

    return matchesName && matchesCategory && matchesPrice && matchesInStock;
  });

  const handleFilter = (key: string, value: string | boolean) => {
    setFilters(
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
      <div className={style["store__filter"]}>
        <label htmlFor="name">Name</label>
        <input
          type="search"
          id="name"
          value={queryParams.name}
          onChange={(e) => handleFilter("name", e.target.value)}
          placeholder="Name"
        />
      </div>
      <div className={style["store__filter"]}>
        <label htmlFor="inStock">In stock</label>
        <input
          type="checkbox"
          id="inStock"
          checked={queryParams.inStock}
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
          value={queryParams.price}
          onChange={(e) => handleFilter("price", e.target.value)}
        />
        <span>{queryParams.price}</span>
      </div>
      <div className={style["store__filter"]}>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={queryParams.category}
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
