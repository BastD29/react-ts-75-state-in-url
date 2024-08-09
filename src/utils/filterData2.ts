import { ArticleType } from "../types/article";

const filterItems = (items: ArticleType[], filters: URLSearchParams) => {
  const queryParams = {
    name: filters.get("name") || "",
    category: filters.get("category") || "",
    price: filters.get("price") || "",
    inStock: filters.get("inStock") === "true",
  };

  return items.filter((item) => {
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
};

export { filterItems };
