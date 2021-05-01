import React, { Fragment, ReactElement } from "react"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { ICard } from "../store/series/types";
import NoImg from "../assets/images/no-img.jpg";
import "./Card.scss"

const Card: React.FC<ICard> = ({id, title, image, description, navigateToDetail}): ReactElement => {
    const name = title.length > 20 ? `${title.substr(0, 20)}...` : title
    const summary = description.length > 100 ? `${description.substr(0, 100)}...` : description;
    return (
        <Fragment>
            <Paper className="card" elevation={5}>
                <Grid container>
                    <Grid item md={6}>
                        <img className="series-img" src={image ? image : NoImg} alt={image} />
                    </Grid>
                    <Grid item md={6}>
                        <div className="details">
                            <div className="title">{name}</div>
                            <div className="description" dangerouslySetInnerHTML={{__html: summary}} />
                            <div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={() => {
                                        navigateToDetail(id)
                                    }}
                                >
                                    Show Episode
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Fragment>
    )
}

export default Card;