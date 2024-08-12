import { SET_FILTER } from "../constants/actions";
import { FilterActionType, FilterStateType } from "../types/filter";

// const initialState: FilterStateType = {
//   filters: null,
// };

const reducer = (
  state: FilterStateType,
  action: FilterActionType
): FilterStateType => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};

export { /* initialState, */ reducer };
