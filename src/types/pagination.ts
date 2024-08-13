import { SET_CURRENT_PAGE, SET_TOTAL_PAGES } from "../constants/actions";

type PaginationType = {
  currentPage: number;
  totalPages: number;
  limit: number;
};

// type PaginationType = URLSearchParams; ???

type PaginationStateType = {
  pagination: PaginationType;
};

type TotalPagesPayloadType = {
  total_count: number;
  limit: number;
};

// actions

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
};

type SetTotalPagesActionType = {
  type: typeof SET_TOTAL_PAGES;
  payload: TotalPagesPayloadType;
};

type PaginationActionType = SetCurrentPageActionType | SetTotalPagesActionType;

export type {
  PaginationType,
  PaginationStateType,
  TotalPagesPayloadType,
  // actions
  PaginationActionType,
};
