import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { 
    fetchSeriesSuccess,
    fetchSeriesFailure,
    fetchSeriesInfoSuccess,
    fetchSeriesInfoFailure,
    fetchSeasonSuccess,
    fetchSeasonFailure
} from "./actions";
import { FETCH_SEASON_REQUEST, FETCH_SERIES_INFO_REQUEST, FETCH_SERIES_REQUEST } from "./actionTypes";
import { ISeries, ISeason } from "./types";

const getSeries = (value: string) =>
    axios.get<ISeries[]>(`https://api.tvmaze.com/search/shows?q=${value}`);

const getSeason = (value: string) =>
    axios.get<ISeason[]>(`https://api.tvmaze.com/shows/${value}/seasons`);

const getSeriesInfo = (value: string) =>
    axios.get<ISeries[]>(`https://api.tvmaze.com/shows/${value}`);    

// worker saga: fired on FETCH_SERIES_REQUEST action

function* fetchSeriesSaga(options: any): any {
    try {
        const response = yield call(getSeries, options.payload);
        const transformData = response.data.length > 0 ? 
            response.data.map((el: any) => (
                {
                    id: el?.show?.id,
                    image: el?.show?.image?.medium || "",
                    title: el?.show?.name || "",
                    description: el?.show?.summary || "<p>No Description</p>"
                }
            )) : []
        yield put(
            fetchSeriesSuccess({
                seriesList: transformData,
                noData: transformData.length === 0 ? true : false,
                searchString: options.payload
            })
        )
    } catch(e) {
        yield put(
            fetchSeriesFailure({
                error: e.message,
                noData: false
            })
        )
    }
}

function* fetchSeriesInfoSaga(options: any): any {
    try {
        const response = yield call(getSeriesInfo, options.payload);
        const transformData = {
            id: response.data?.id,
            image: response.data?.image?.medium || "",
            title: response.data?.name || "",
            description: response.data?.summary || "<p>No Description</p>"
        }
        yield put(
            fetchSeriesInfoSuccess({
                seriesInfo: transformData
            })
        )
    } catch(e) {
        yield put(
            fetchSeriesInfoFailure({
                error: e.message
            })
        )
    }
}

function* fetchSeasonSaga(options: any): any {
    try {
        const response = yield call(getSeason, options.payload);
        const transformData = response.data.length > 0 ? 
        response.data.map((el: any) => (
            {
                number: el?.number,
                episodes: el?.episodeOrder,
                premiereDate: el?.premiereDate,
                endDate: el?.endDate,
                network: el?.network?.name || "-"
            }
        )) : []
        yield put(
            fetchSeasonSuccess({
                seasonList: transformData
            })
        )
    } catch(e) {
        yield put(
            fetchSeasonFailure({
                error: e.message
            })
        )
    }
}

// starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action. allows concurrent increments

function* seriesSaga() {
    yield all([
        takeLatest(FETCH_SERIES_REQUEST, fetchSeriesSaga),
        takeLatest(FETCH_SERIES_INFO_REQUEST, fetchSeriesInfoSaga),
        takeLatest(FETCH_SEASON_REQUEST, fetchSeasonSaga)
    ])
}

export default seriesSaga;

