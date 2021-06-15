import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Details from "../Details";
import Confirmation from "../Confirmation";
import ErrorPage from "../ErrorPage";
import Submit from "../Submit";

const Routes = (props) => {

  return (
    <Switch>
      <Route exact path="/">
        <Home imgData={props.imgData} setImgData={props.setImgData} />
      </Route>
      <Route path="/home">
        <Home imgData={props.imgData} setImgData={props.setImgData} />
      </Route>
      <Route path="/confirmation">
        <Confirmation imgData={props.imgData} setImgData={props.setImgData} />
      </Route>
      <Route path="/submit">
        <Submit imgData={props.imgData} setImgData={props.setImgData} />
      </Route>
      <Route path="/details">
        <Details imgData={props.imgData} setImgData={props.setImgData} />
      </Route>
      <Route path="/*">
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Routes;
