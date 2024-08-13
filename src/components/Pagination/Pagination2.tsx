import { FC, useEffect } from "react";
import { SetURLSearchParams } from "react-router-dom";
import { DEFAULT_ITEMS } from "../../data/data2";
import { ITEMS_PER_PAGE } from "../../utils/paginateItems";
import { usePaginationContext } from "../../hooks/usePaginationContext";
import { SET_CURRENT_PAGE } from "../../constants/actions";
import style from "./Pagination.module.scss";

type PaginationProps = {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
};

const Pagination: FC<PaginationProps> = ({ searchParams, setSearchParams }) => {
  const {
    dispatch,
    state: { pagination },
  } = usePaginationContext();

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
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev.toString()); // Clone the existing params
      params.set("page", page.toString()); // Set the new page
      return params;
    });

    dispatch({
      type: SET_CURRENT_PAGE,
      payload: page,
    });
  };

  return (
    <div className={style["pagination"]}>
      <button
        onClick={() => handlePageChange(pagination.currentPage - 1)}
        disabled={pagination.currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: pagination.totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          disabled={index + 1 === pagination.currentPage}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(pagination.currentPage + 1)}
        disabled={pagination.currentPage === pagination.totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
