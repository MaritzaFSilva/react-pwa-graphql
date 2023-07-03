import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PersonDetail from "./pages/person/detail";
import PersonList from "./pages/person/list";
import { NotFound } from "./pages/NotFound";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/person/:id" render={() => <PersonDetail />} />
                <Route path="/" exact render={() => <PersonList />} />
                <Route path="/*" render={() => <NotFound />} />
            </Switch>
        </Router>
    );
}

export default Routes;
