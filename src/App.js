import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListPage from "./components/ListPage";
import EventPage from "./components/EventPage";
import Header from "./components/Header";

function App() {
  return (
      <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={ListPage} />
            <Route path="/event/:title" component={EventPage} />
        </Switch>
      </Router>
  );
}

export default App;
