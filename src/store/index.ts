import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

// run the saga
sagaMiddleware.run(rootSaga);

export default store;