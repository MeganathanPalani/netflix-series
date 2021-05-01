import { combineReducers } from "redux";

import seriesReducer from "./series/reducer";

const rootReducer = combineReducers({
    series: seriesReducer
})

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

