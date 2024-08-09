import { createContext } from "react";
import { SetURLSearchParams } from "react-router-dom";

type FilterContextType = {
  filters: URLSearchParams;
  setFilters: SetURLSearchParams;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export { FilterContext };
