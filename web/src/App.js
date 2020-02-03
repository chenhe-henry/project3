import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./scss/App.scss";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import Navi from "./Navi";
import PropertyList from "./PropertyList";

export default function App() {
  return (
    <Fragment>
      <Navi />
      <PropertyList />
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/movies/:id" component={MovieDetails} />
            <Route exact path="/movies" component={MovieList} />
            <Route exact path="/"></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}
