import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Details from "../Details";
import Confirmation from "../Confirmation";
import ErrorPage from "../ErrorPage";
import Submit from "../Submit";
import Landing from "../Landing/Landing";
import Information from "../Information/Information";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/home">
        <Home imgData={props.imgData} setImgData={props.setImgData} />
      </Route>
      <Route path="/confirmation">
        <Confirmation upload={props.upload} imgData={props.imgData} setImgData={props.setImgData} />
      </Route>
      <Route path="/submit">
        <Submit upload={props.upload} imgData={props.imgData} setImgData={props.setImgData} />
      </Route>
      <Route path="/details">
        <Details imgData={props.imgData} setImgData={props.setImgData} />
      </Route>
      <Route path="/information">
        <Information imgData={props.imgData} setImgData={props.setImgData} />
      </Route>
      <Route path="/*">
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Routes;
