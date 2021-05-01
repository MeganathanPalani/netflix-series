import {
    FETCH_SERIES_REQUEST,
    FETCH_SERIES_SUCCESS,
    FETCH_SERIES_FAILURE,
    FETCH_SEASON_REQUEST,
    FETCH_SEASON_SUCCESS,
    FETCH_SEASON_FAILURE,
    FETCH_SERIES_INFO_REQUEST,
    FETCH_SERIES_INFO_SUCCESS,
    FETCH_SERIES_INFO_FAILURE
} from "./actionTypes";
import {
    FetchSeriesRequest,
    FetchSeriesSuccess,
    FetchSeriesSuccessPayload,
    FetchSeriesFailurePayload,
    FetchSeriesFailure,
    FetchSeasonRequest,
    FetchSeasonSuccessPayload,
    FetchSeasonSuccess,
    FetchSeasonFailurePayload,
    FetchSeasonFailure,
    FetchSeriesInfoRequest,
    FetchSeriesInfoSuccessPayload,
    FetchSeriesInfoSuccess,
    FetchSeriesInfoFailurePayload,
    FetchSeriesInfoFailure
} from "./types"

// fetch series result based on search query
export const fetchSeriesRequest = (value: string): FetchSeriesRequest => ({
    type: FETCH_SERIES_REQUEST,
    payload: value
})

export const fetchSeriesSuccess = (
    payload: FetchSeriesSuccessPayload
):  FetchSeriesSuccess => ({
    type: FETCH_SERIES_SUCCESS,
    payload
})

export const fetchSeriesFailure = (
    payload: FetchSeriesFailurePayload
):  FetchSeriesFailure => ({
    type: FETCH_SERIES_FAILURE,
    payload
})

// fetch season information
export const fetchSeasonRequest = (value: string): FetchSeasonRequest => ({
    type: FETCH_SEASON_REQUEST,
    payload: value
})

export const fetchSeasonSuccess = (
    payload: FetchSeasonSuccessPayload
):  FetchSeasonSuccess => ({
    type: FETCH_SEASON_SUCCESS,
    payload
})

export const fetchSeasonFailure = (
    payload: FetchSeasonFailurePayload
):  FetchSeasonFailure => ({
    type: FETCH_SEASON_FAILURE,
    payload
})

// fetch series main information
export const fetchSeriesInfoRequest = (value: string): FetchSeriesInfoRequest => ({
    type: FETCH_SERIES_INFO_REQUEST,
    payload: value
})

export const fetchSeriesInfoSuccess = (
    payload: FetchSeriesInfoSuccessPayload
):  FetchSeriesInfoSuccess => ({
    type: FETCH_SERIES_INFO_SUCCESS,
    payload
})

export const fetchSeriesInfoFailure = (
    payload: FetchSeriesInfoFailurePayload
):  FetchSeriesInfoFailure => ({
    type: FETCH_SERIES_INFO_FAILURE,
    payload
})