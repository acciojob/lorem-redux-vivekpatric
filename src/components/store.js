import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

// Action types
export const FETCH_LOREM_REQUEST = "FETCH_LOREM_REQUEST";
export const FETCH_LOREM_SUCCESS = "FETCH_LOREM_SUCCESS";
export const FETCH_LOREM_FAILURE = "FETCH_LOREM_FAILURE";

// Reducer
const initialState = {
  content: "",
  isLoading: false,
  error: null,
};

const loremReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_LOREM_SUCCESS:
      return { ...state, content: action.payload, isLoading: false };
    case FETCH_LOREM_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  lorem: loremReducer,
});

// Action creators
export const fetchLorem = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_LOREM_REQUEST });

    try {
      const response = await axios.get("https://baconipsum.com/api/?type=all-meat&paras=1");
      const content = response.data[0];
      dispatch({ type: FETCH_LOREM_SUCCESS, payload: content });
    } catch (error) {
      dispatch({ type: FETCH_LOREM_FAILURE, payload: error.message });
    }
  };
};

// Store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;