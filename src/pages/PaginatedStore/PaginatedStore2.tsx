import { FC, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { DEFAULT_ITEMS } from "../../data/data2";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/Filter/Filter";
import { filterItems } from "../../utils/filterItems";
import { paginateItems } from "../../utils/paginateItems";
import style from "./PaginatedStore.module.scss";

const PaginatedStore: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log("searchParams:", searchParams.toString());

  const paginatedItems = useMemo(
    () => paginateItems(DEFAULT_ITEMS, searchParams),
    [DEFAULT_ITEMS, searchParams]
  );

  const filteredItems = useMemo(
    () => filterItems(paginatedItems, searchParams),
    [paginatedItems, searchParams]
  );

  return (
    <div className={style["paginated-store"]}>
      <h2>Store</h2>
      <Filter searchParams={searchParams} setSearchParams={setSearchParams} />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Pagination
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </div>
  );
};

export default PaginatedStore;
