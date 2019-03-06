import { FETCH_CHAR_START } from "../actions";

const initialState = {
  characters: [],
  isLoading: false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHAR_START:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    default:
      return state;
  }
};
