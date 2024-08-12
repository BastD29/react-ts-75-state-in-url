import { FC } from "react";
import style from "./Pagination.module.scss";

type PaginationProps = {
  handlePageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
};

const Pagination: FC<PaginationProps> = ({
  currentPage,
  handlePageChange,
  totalPages,
}) => {
  return (
    <div className={style["pagination"]}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          disabled={index + 1 === currentPage}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
