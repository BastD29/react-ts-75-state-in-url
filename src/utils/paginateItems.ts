import { ArticleType } from "../types/article";

const ITEMS_PER_PAGE = 5;

const paginateItems = (items: ArticleType[], searchParams: URLSearchParams) => {
  const currentPage = parseInt(searchParams.get("page") || "1");

  return items.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
};

export { paginateItems, ITEMS_PER_PAGE };
