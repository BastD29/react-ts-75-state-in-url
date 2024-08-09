import { FC, ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterContext } from "./FilterContext";

type FilterProviderProps = {
  children: ReactNode;
};

const FilterProvider: FC<FilterProviderProps> = ({ children }) => {
  const [filters, setFilters] = useSearchParams();

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider };
