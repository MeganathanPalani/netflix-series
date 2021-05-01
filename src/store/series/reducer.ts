import {
    FETCH_SERIES_REQUEST,
    FETCH_SERIES_SUCCESS,
    FETCH_SERIES_FAILURE,
    FETCH_SERIES_INFO_REQUEST,
    FETCH_SERIES_INFO_SUCCESS,
    FETCH_SERIES_INFO_FAILURE,
    FETCH_SEASON_REQUEST,
    FETCH_SEASON_SUCCESS,
    FETCH_SEASON_FAILURE,
} from "./actionTypes";
import { SeriesState, SeriesActions } from "./types";

const initialState: SeriesState = {
    loading: false,
    seriesList: [],
    error: null,
    noData: false,
    seriesInfo: {},
    seasonList: [],
    searchString: ""
}

const seriesReducer = (state = initialState, action: SeriesActions) => {
    switch(action.type) {
        case FETCH_SERIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_SERIES_SUCCESS:
            return {
                ...state,
                loading: false,
                seriesList: action.payload.seriesList,
                error: null,
                noData: action.payload.noData,
                searchString: action.payload.searchString
            }
        case FETCH_SERIES_FAILURE:
            return {
                ...state,
                loading: false,
                seriesList: [],
                error: action.payload.error,
                noData: false
            }
        case FETCH_SERIES_INFO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_SERIES_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                seriesInfo: action.payload.seriesInfo,
                error: null
            }
        case FETCH_SERIES_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                seriesInfo: {},
                error: action.payload.error
            }
        case FETCH_SEASON_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_SEASON_SUCCESS:
            return {
                ...state,
                loading: false,
                seasonList: action.payload.seasonList,
                error: null
            }
        case FETCH_SEASON_FAILURE:
            return {
                ...state,
                loading: false,
                seasonList: [],
                error: action.payload.error
            }                            
        default:
            return {
                ...state
            }
    }
}

export default seriesReducer;