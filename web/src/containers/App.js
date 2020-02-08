import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import MovieList from "../MovieList";
import MovieDetails from "../MovieDetails";
import Navi from "../components/Navi/Navi";
import Footer from "../components/Footer/Footer";
import PropertyList from "../components/PropertyList/PropertyList";
import SearchBox from "../components/SearchBox/SearchBox";
import PropertyDetails from "../components/PropertyDetails/PropertyDetails";
import Apitest from "../components/TEST/Apitest";

export default function App() {
  return (
    <Fragment>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/movies/:id" component={MovieDetails} />
            <Route exact path="/movies" component={MovieList} />
            <Route exact path="/houses/:id" component={PropertyDetails} />
            <Route exact path="/test" component={Apitest} />
            <Route exact path="/">
              <Navi />
              <SearchBox />
              <PropertyList />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}
