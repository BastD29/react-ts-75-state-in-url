import { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { DEFAULT_ITEMS } from "../../data/data2";
import Pagination from "../../components/Pagination/Pagination";
import style from "./PaginatedStore.module.scss";

const ITEMS_PER_PAGE = 5;

const PaginatedStore: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");
  //   console.log("currentPage:", currentPage);

  const totalPages = Math.ceil(DEFAULT_ITEMS.length / ITEMS_PER_PAGE);
  //   console.log("totalPages:", totalPages);

  // ensures that if the current page is less than 1, it will reset to page 1,
  // and if it exceeds the totalPages, it will reset to the last page.
  useEffect(() => {
    if (currentPage > totalPages) {
      setSearchParams({ page: totalPages.toString() });
    } else if (currentPage < 1) {
      setSearchParams({ page: "1" });
    }
  }, [currentPage, totalPages, setSearchParams]);

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  const paginatedItems = DEFAULT_ITEMS.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className={style["paginated-store"]}>
      <ul>
        {paginatedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Pagination
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default PaginatedStore;
