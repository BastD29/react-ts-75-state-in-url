// import { FC, useMemo } from "react";
// import { DEFAULT_ITEMS } from "../../data/data2";
// import { filterItems } from "../../utils/filterData2";
// import { useFilterContext } from "../../hooks/useFilterContext";
// import style from "./Store.module.scss";

// const Store: FC = () => {
//   const { filters, setFilters } = useFilterContext();

//   const filteredItems = useMemo(
//     () => filterItems(DEFAULT_ITEMS, filters),
//     [DEFAULT_ITEMS, filters]
//   );

//   const handleFilter = (key: string, value: string | boolean) => {
//     setFilters(
//       (prev) => {
//         prev.set(key, value.toString());
//         return prev;
//       },
//       { replace: true }
//     );
//   };

//   return (
//     <div className={style["store"]}>
//       <h2>Store</h2>
//       <div className={style["store__filter"]}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="search"
//           id="name"
//           // value={queryParams.name}
//           value={filters.get("name") || ""}
//           onChange={(e) => handleFilter("name", e.target.value)}
//           placeholder="Name"
//         />
//       </div>
//       <div className={style["store__filter"]}>
//         <label htmlFor="inStock">In stock</label>
//         <input
//           type="checkbox"
//           id="inStock"
//           // checked={queryParams.inStock}
//           checked={filters.get("inStock") === "true"}
//           onChange={(e) => handleFilter("inStock", e.target.checked)}
//         />
//       </div>
//       <div className={style["store__filter"]}>
//         <label htmlFor="price">Price</label>
//         <input
//           type="range"
//           id="price"
//           min="0"
//           max="1200"
//           // value={queryParams.price}
//           value={filters.get("price") || ""}
//           onChange={(e) => handleFilter("price", e.target.value)}
//         />
//         {/* <span>{queryParams.price}</span> */}
//         <span>{filters.get("price") || ""}</span>
//       </div>
//       <div className={style["store__filter"]}>
//         <label htmlFor="category">Category</label>
//         <select
//           name="category"
//           id="category"
//           // value={queryParams.category}
//           value={filters.get("category") || ""}
//           onChange={(e) => handleFilter("category", e.target.value)}
//         >
//           <option value="">All Categories</option>
//           <option value="electronics">Electronics</option>
//           <option value="literature">Literature</option>
//           <option value="transportation">Transportation</option>
//           <option value="accessories">Accessories</option>
//           <option value="kitchenware">Kitchenware</option>
//         </select>
//       </div>
//       <ul>
//         {filteredItems.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Store;
