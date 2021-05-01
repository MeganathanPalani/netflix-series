import React, { Fragment, ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { DetailProps } from "../../store/series/types";
import CardDetail from "../../components/CardDetail";
import { fetchSeasonRequest, fetchSeriesInfoRequest } from "../../store/series/actions";
import { getSeriesInfoSelector, getSeasonSelector } from "../../store/series/selectors";
import "./ShowDetail.scss";

const ShowDetail: React.FC<DetailProps> = ({ history }): ReactElement => {
    const dispatch = useDispatch();
    const { showId }: any = useParams();
    useEffect(() => {
        // parallel call on both API's
        dispatch(fetchSeriesInfoRequest(showId))
        dispatch(fetchSeasonRequest(showId))
    }, [showId, dispatch])
    const {id, image, title, description}: any = useSelector(getSeriesInfoSelector);
    if (!+showId) {
        history.push('/')
    }
    const seasons = useSelector(getSeasonSelector);
    const [season, setSeason] = useState<any>("");
    const backToDashboard = () => {
        history.push('/')
    }

    return (
        <Fragment>
            <div className="show-detail">
                <Grid container justify="center">
                    <Grid item xs={12} sm={12} md={9}>
                        <Paper className="paper">
                            <CardDetail
                                id={id}
                                image={image}
                                title={title}
                                description={description}
                                navigateToDetail={backToDashboard}
                                seasons={seasons}
                                selectedSeason={(season) => {
                                    setSeason(season)
                                }}
                                seasonValue={season}
                            />  
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default ShowDetail;