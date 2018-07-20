import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import SearchResult from "./components/SearchResult";
import SavedArticles from "./components/SavedArticles";
const App = () => (
    <Router>
    <div>
<Nav />
<Switch>
        <Route exact path="/" component={SearchResult} />
        <Route exact path="/articles" component={SavedArticles} />
<SearchResult />
</Switch>
</div>
</Router>
)
export default App;