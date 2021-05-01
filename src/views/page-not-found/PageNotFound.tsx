import React, { Fragment, ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Bug from "../../assets/images/bug.png" 
import "./PageNotFound.scss" 

const PageNotFound: React.FC = (): ReactElement => {
    return (
        <Fragment>
            <div className="page-not-found">
                <Grid container justify="center">
                    <Grid item md={6}>
                        <Paper elevation={5} className="paper">
                            <img src={Bug} className="error-img" alt="error" />
                            <div className="oops">
                                404
                            </div>
                            <div className="error">Sorry, Page not found</div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default PageNotFound;