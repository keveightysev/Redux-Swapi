import { FETCH_CHAR_START, FETCH_CHAR_SUCCESS, FETCH_CHAR_FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAR_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_CHAR_SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: [...state.characters, ...action.payload],
      };
    case FETCH_CHAR_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
