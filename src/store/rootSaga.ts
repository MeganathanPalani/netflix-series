import { all, fork } from "redux-saga/effects";

import seriesSaga from "./series/saga";

export function* rootSaga() {
    yield all([fork(seriesSaga)])
}