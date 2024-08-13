import { SET_CURRENT_PAGE, SET_TOTAL_PAGES } from "../constants/actions";
import { DEFAULT_ITEMS } from "../data/data2";
import { PaginationActionType, PaginationStateType } from "../types/pagination";
import { ITEMS_PER_PAGE } from "../utils/paginateItems";

const initialState: PaginationStateType = {
  pagination: {
    currentPage: 1,
    limit: ITEMS_PER_PAGE,
    totalPages: DEFAULT_ITEMS.length / ITEMS_PER_PAGE,
  },
};

const reducer = (
  state: PaginationStateType,
  action: PaginationActionType
): PaginationStateType => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.payload,
        },
      };
    case SET_TOTAL_PAGES:
      const { limit, total_count } = action.payload;
      return {
        ...state,
        pagination: {
          ...state.pagination,
          totalPages: Math.ceil(total_count / limit),
          limit,
        },
      };
    default:
      return state;
  }
};

export { initialState, reducer };
