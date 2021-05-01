import React, { lazy, ReactElement, Suspense } from "react";
import {
    Router,
    Switch,
    Route
} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import history from "../utils/history";

const Dashboard = lazy(() => import ("../views/dashboard"));
const ShowDetail = lazy(() => import ("../views/show-detail"));
// const ErrorTemplate = lazy(() => import ("../errorboundary/ErrorTemplate"));
const PageNotFound = lazy(() => import ("../views/page-not-found/PageNotFound"));


export const Routes:React.FC = (): ReactElement => {
    return (
        <Router history={history}>
            <Suspense fallback={
                    <div className="loader">
                        <CircularProgress />
                    </div>
                }
            >
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/show-detail/:showId" component={ShowDetail} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Suspense>
        </Router>
    )
}