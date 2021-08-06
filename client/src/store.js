// Import dependencies
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./reducers/index";

// Connect the application to Redux Devtools
import { composeWithDevTools } from "redux-devtools-extension";


// Setup initial state
const initialState = {};


// Import middleware
const middleware = [thunk]; // action creators


// Setup store
const store = createStore(
    combineReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  // Export store
  export default store;