import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Details from "../Details";
import Confirmation from "../Confirmation";
import ErrorPage from "../ErrorPage";
import Submit from "../Submit";
import Landing from "../Landing/Landing";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/home">
        <Home
          imgData={props.imgData}
          setImgData={props.setImgData}
          setImgFile={props.setImgFile}
        />
      </Route>
      <Route path="/confirmation">
        <Confirmation
          upload={props.upload}
          imgData={props.imgData}
          setImgData={props.setImgData}
          imgFile={props.imgFile}
        />
      </Route>
      <Route path="/submit">
        <Submit
          upload={props.upload}
          imgData={props.imgData}
          setImgData={props.setImgData}
          imgFile={props.imgFile}
        />
      </Route>
      <Route path="/details">
        <Details
          imgData={props.imgData}
          setImgData={props.setImgData}
          imgFile={props.imgFile}
        />
      </Route>

      <Route path="/*">
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Routes;
