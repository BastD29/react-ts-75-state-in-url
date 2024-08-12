import { SET_FILTER } from "../constants/actions";

type FilterType = URLSearchParams;

type FilterStateType = {
  filters: FilterType | null;
};

// actions

type SetFilterActionType = { type: typeof SET_FILTER; payload: FilterType };

type FilterActionType = SetFilterActionType;

export type { FilterType, FilterStateType, FilterActionType };
