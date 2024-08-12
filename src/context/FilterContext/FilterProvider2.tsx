import { FC, ReactNode, useEffect, useReducer } from "react";
import { FilterContext } from "./FilterContext2";
import { reducer } from "../../reducers/filter";
import { useSearchParams } from "react-router-dom";

type FilterProviderProps = {
  children: ReactNode;
};

const FilterProvider: FC<FilterProviderProps> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(reducer, {
    filters: searchParams || null,
  });

  // console.log("state:", state.filters?.toString());

  useEffect(() => {
    if (state.filters) {
      setSearchParams(state.filters, { replace: true });
    }
  }, [state.filters, setSearchParams]);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider };
