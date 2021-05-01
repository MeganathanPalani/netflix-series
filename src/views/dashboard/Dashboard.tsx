import React, { Fragment, ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { DashboardProps } from "../../store/series/types";
import { getNoDataSelector, getSearchStrSelector, getSeriesSelector } from "../../store/series/selectors";
import { fetchSeriesRequest } from "../../store/series/actions";
import Info from "../../assets/images/info.png";
import Card from "../../components/Card";
import "./dashboard.scss";

const Dashboard: React.FC<DashboardProps> = ({ history }): ReactElement => {
    const getNoData = useSelector(getNoDataSelector);
    const series = useSelector(getSeriesSelector);
    const searchString = useSelector(getSearchStrSelector);
    const dispatch = useDispatch();
    const [searchKey, setSearchKey] = useState<string>(searchString || "");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchKey(value);
    }
    const handleClick = () => {
        dispatch(fetchSeriesRequest(searchKey));
    }
    const handleClear = () => {
        setSearchKey("");
    }
    const navigateToDetail = (id: number) => {
        history.push(`/show-detail/${id}`)
    }

    return (
        <Fragment>
            <div className="dashboard">
                <Grid container justify="center">
                    <Grid item md={9}>
                        <Paper className="paper">
                            <Grid container justify="center">
                                <Grid item md={6}>
                                    <TextField
                                        id="inputField"
                                        name="showTitle"
                                        label="Show Title..."
                                        variant="outlined"
                                        size="small"
                                        placeholder="e.g. Peaky Blinders"
                                        value={searchKey}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                
                            </Grid>
                            <Grid container justify="center" className="btn-group">
                                <Grid item>
                                    <Button
                                        id="search"
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={handleClick}
                                        className="search-btn"
                                        disabled={!searchKey}
                                    >
                                        Search
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="small"
                                        onClick={handleClear}
                                    >
                                        Clear
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid container justify={series.length === 0 ? "center" : "flex-start"} spacing={3} className="card-section">
                                {series.length > 0 && 
                                    series.map((el: any) => (
                                        <Grid item md={4} key={el.id}>
                                            <Card
                                                id={el.id}
                                                image={el.image}
                                                title={el.title}
                                                description={el.description}
                                                navigateToDetail={navigateToDetail}
                                            />
                                        </Grid>
                                    ))
                                }
                                {series.length === 0 && getNoData &&
                                    <Grid item md={4}>
                                        <Paper elevation={5} className="paper">
                                            <img src={Info} alt="info" className="info" />
                                            <div className="no-content">No Data Available</div>
                                        </Paper>
                                    </Grid>
                                }
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default Dashboard;