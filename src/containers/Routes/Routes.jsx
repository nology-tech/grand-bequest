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
        <Home
          setImgFile={props.setImgFile}
          imgFile={props.imgFile}
          currentLocation={props.currentLocation}
          setCurrentLocation={props.setCurrentLocation}
          manualLocation={props.manualLocation}
          setManualLocation={props.setManualLocation}
          imgData={props.imgData}
          setImgData={props.setImgData}
        />
      </Route>
      <Route path="/confirmation">
        <Confirmation
          imgFile={props.imgFile}
          currentLocation={props.currentLocation}
          setCurrentLocation={props.setCurrentLocation}
          manualLocation={props.manualLocation}
          setManualLocation={props.setManualLocation}
          imgData={props.imgData}
          setImgData={props.setImgData}
        />
      </Route>
      <Route path="/submit">
        <Submit
          imgFile={props.imgFile}
          currentLocation={props.currentLocation}
          setCurrentLocation={props.setCurrentLocation}
          manualLocation={props.manualLocation}
          setManualLocation={props.setManualLocation}
          imgData={props.imgData}
          setImgData={props.setImgData}
        />
      </Route>
      <Route path="/details">
        <Details
          imgData={props.imgData}
          setImgData={props.setImgData}
          imgFile={props.imgFile}
        />
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
