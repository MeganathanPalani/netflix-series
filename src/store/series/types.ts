import { 
    FETCH_SEASON_FAILURE,
    FETCH_SEASON_REQUEST,
    FETCH_SEASON_SUCCESS,
    FETCH_SERIES_FAILURE,
    FETCH_SERIES_INFO_FAILURE,
    FETCH_SERIES_INFO_REQUEST,
    FETCH_SERIES_INFO_SUCCESS,
    FETCH_SERIES_REQUEST,
    FETCH_SERIES_SUCCESS
} from "./actionTypes";

export interface ISeries {
    id: number,
    image: string,
    title: string,
    description: string,
}

export interface ISeason {
    number: number,
    episodes: number,
    premiereDate: string,
    endDate: string,
    network: string,
}

export interface DashboardProps {
    history: any
}

export interface DetailProps {
    history: any
}

export interface ICard {
    id: number,
    image: string,
    title: string,
    description: string,
    navigateToDetail: (id: number) => void
}

export interface ICardDetail {
    id: number,
    image: string,
    title: string,
    description: string,
    navigateToDetail: () => void,
    seasons: ISeason[],
    selectedSeason: (id: number) => void,
    seasonValue: number
}

export interface SeriesState {
    loading: boolean;
    seriesList: ISeries[];
    error: string | null;
    noData: boolean;
    seriesInfo: object;
    seasonList: ISeason[];
    searchString: string;
}

// fetch based on search query
export interface FetchSeriesRequest {
    type: typeof FETCH_SERIES_REQUEST;
    payload: string;
}

export interface FetchSeriesSuccessPayload {
    seriesList: [];
    noData: boolean;
    searchString: string;
}
  
export interface FetchSeriesFailurePayload {
    error: string;
    noData: boolean;
}
  
export type FetchSeriesSuccess = {
    type: typeof FETCH_SERIES_SUCCESS;
    payload: FetchSeriesSuccessPayload;
};
  
export type FetchSeriesFailure = {
    type: typeof FETCH_SERIES_FAILURE;
    payload: FetchSeriesFailurePayload;
};

// fetch main info based on series
export interface FetchSeriesInfoRequest {
    type: typeof FETCH_SERIES_INFO_REQUEST;
    payload: string;
}

export interface FetchSeriesInfoSuccessPayload {
    seriesInfo: {};
}
  
export interface FetchSeriesInfoFailurePayload {
    error: string;
}
  
export type FetchSeriesInfoSuccess = {
    type: typeof FETCH_SERIES_INFO_SUCCESS;
    payload: FetchSeriesInfoSuccessPayload;
};
  
export type FetchSeriesInfoFailure = {
    type: typeof FETCH_SERIES_INFO_FAILURE;
    payload: FetchSeriesInfoFailurePayload;
}; 

// fetch season info based on series 
export interface FetchSeasonRequest {
    type: typeof FETCH_SEASON_REQUEST;
    payload: string;
}

export interface FetchSeasonSuccessPayload {
    seasonList: [];
}
    
export interface FetchSeasonFailurePayload {
    error: string;
}
    
export type FetchSeasonSuccess = {
    type: typeof FETCH_SEASON_SUCCESS;
    payload: FetchSeasonSuccessPayload;
};
    
export type FetchSeasonFailure = {
    type: typeof FETCH_SEASON_FAILURE;
    payload: FetchSeasonFailurePayload;
};

export type SeriesActions =
    | FetchSeriesRequest
    | FetchSeriesSuccess
    | FetchSeriesFailure
    | FetchSeriesInfoRequest
    | FetchSeriesInfoSuccess
    | FetchSeriesInfoFailure
    | FetchSeasonRequest
    | FetchSeasonSuccess
    | FetchSeasonFailure;