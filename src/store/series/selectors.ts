import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getLoading = (state: AppState) => state.series.loading;
const getSeries = (state: AppState) => state.series.seriesList;
const getError = (state: AppState) => state.series.error;
const getNoData = (state: AppState) => state.series.noData;
const getSeriesInfo = (state: AppState) => state.series.seriesInfo;
const getSeason = (state: AppState) => state.series.seasonList;
const getSearchString = (state: AppState) => state.series.searchString;

export const getSeriesSelector = createSelector(getSeries, (series) => series);
export const getLoadingSelector = createSelector(getLoading, (loading) => loading);
export const getErrorSelector = createSelector(getError, (error) => error);
export const getNoDataSelector = createSelector(getNoData, (noData) => noData);
export const getSeriesInfoSelector = createSelector(getSeriesInfo, (seriesInfo) => seriesInfo);
export const getSeasonSelector = createSelector(getSeason, (seasonList) => seasonList);
export const getSearchStrSelector = createSelector(getSearchString, (searchString) => searchString);
