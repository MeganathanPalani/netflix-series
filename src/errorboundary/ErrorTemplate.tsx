import React, { Fragment, ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ErrorImg from "../assets/images/error.png" 
import "./ErrorTemplate.scss" 

const ErrorTemplate: React.FC = (): ReactElement => {
    return (
        <Fragment>
            <div className="error-boundary">
                <Grid container justify="center">
                    <Grid item md={6}>
                        <Paper elevation={5} className="paper">
                            <img src={ErrorImg} className="error-img" alt="error" />
                            <div className="oops">
                                Oops!
                            </div>
                            <div className="error">There's is an error</div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default ErrorTemplate;