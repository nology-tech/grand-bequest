import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Details from "../Details";
import Confirmation from "../Confirmation";
import ErrorPage from "../ErrorPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/details">
        <Details />
      </Route>
      <Route path="/confirmation">
        <Confirmation />
      </Route>
      <Route path="/*">
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Routes;
