import { useContext } from "react";
import { PaginationContext } from "../context/PaginationContext/PaginationContext";

const usePaginationContext = () => {
  const context = useContext(PaginationContext);

  if (!context) {
    throw new Error(
      "usePaginationContext must be used within a PaginationProvider"
    );
  }

  return context;
};

export { usePaginationContext };
