import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { questionsReducer } from "../reducers/questionsReducer";

const rootReducer = combineReducers({
    questions: questionsReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store