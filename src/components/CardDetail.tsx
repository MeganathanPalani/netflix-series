import React, { Fragment, ReactElement } from "react"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { ICardDetail } from "../store/series/types";
import NoImg from "../assets/images/no-img.jpg";
import "./CardDetail.scss"

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const CardDetail: React.FC<ICardDetail> = ({id, title, image, description, navigateToDetail, seasons, selectedSeason, seasonValue}): ReactElement => {
    const backToHome = () => {
        navigateToDetail();
    }
    const changeDateFormat = (date: string) => {
        const dateFormat = new Date(date);
        
        const day = dateFormat.getDate();
        const monthAlbt = month[dateFormat.getMonth()];
        const year = dateFormat.getFullYear();

        return `${monthAlbt} ${day}, ${year}`;
    }

    return (
        <Fragment>
            <Paper className="card-detail" elevation={5}>
                <Breadcrumbs separator="›" aria-label="breadcrumb" className="breadcumb">
                    <Link color="inherit" href="#" onClick={backToHome}>
                        Dashbaord
                    </Link>
                    <Typography color="textPrimary">Detail</Typography>
                </Breadcrumbs>
                <Grid container spacing={2}>
                    <Grid item>
                        <img className="series-img" src={image ? image : NoImg} alt={image} />
                    </Grid>
                    <Grid item md={6}>
                        <div className="season-details">
                            <FormControl className="season-dropdown" variant="outlined" size="small">
                                <InputLabel id="season-select-outlined-label-">Season</InputLabel>
                                <Select
                                    label="Season"
                                    labelId="season-select-outlined-label"
                                    id="season-select-outlined"
                                    value={seasonValue}
                                    onChange={(e: any) => {
                                        const {value} = e.target;
                                        console.log(value)
                                        selectedSeason(value)
                                    }}
                                >
                                    {seasons.map((el: any) => (
                                        <MenuItem value={el.number} key={el.number}>Season {el.number}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            {
                                seasonValue && 
                                    <div className="season-info">
                                        <Grid container spacing={2}>
                                            <Grid item md={3}>
                                                <div className="key">Total Episodes</div>
                                            </Grid>
                                            <Grid item>
                                                <div className="value">{seasons[seasonValue - 1].episodes}</div>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2}>
                                            <Grid item md={3}>
                                                <div className="key">Premier Date</div>
                                            </Grid>
                                            <Grid item>
                                                <div className="value">{changeDateFormat(seasons[seasonValue - 1].premiereDate)}</div>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2}>
                                            <Grid item md={3}>
                                                <div className="key">End Date</div>
                                            </Grid>
                                            <Grid item>
                                                <div className="value">{changeDateFormat(seasons[seasonValue - 1].endDate)}</div>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2}>
                                            <Grid item md={3}>
                                                <div className="key">Network</div>
                                            </Grid>
                                            <Grid item>
                                                <div className="value">{seasons[seasonValue - 1]?.network}</div>
                                            </Grid>
                                        </Grid>
                                    </div>
                            }
                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item md={12}>
                        <div className="details">
                            <div className="title">{title}</div>
                            <div className="description" dangerouslySetInnerHTML={{__html: description}} />
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Fragment>
    )
}

export default CardDetail;