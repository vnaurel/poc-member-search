import React, { Component } from "react";
import "./App.css";
import Members from "./components/members";
import NavBar from "./components/common/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/notfound";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container m-2" role="main">
          <Switch>
            <Route path="/members" component={Members} />
            <Route path="/not-found" exact component={NotFound} />
            <Redirect exact from="/" to="/members" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
