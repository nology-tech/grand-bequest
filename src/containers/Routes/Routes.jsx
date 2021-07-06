import { Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Home from "../Home";
import Details from "../Details";
import Confirmation from "../Confirmation";
import ErrorPage from "../ErrorPage";
import Submit from "../Submit";
import Landing from "../Landing/Landing";
import Information from "../Information/Information";
import GrandStepper from "../../components/GrandStepper/GrandStepper.jsx";

const Routes = (props) => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/home">
        <GrandStepper step={currentStep} />
        <Home
          setCurrentStep={setCurrentStep}
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
        <GrandStepper step={currentStep} />
        <Confirmation
          setCurrentStep={setCurrentStep}
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
      <Route path="/submit">
        <GrandStepper step={currentStep} />
        <Submit
          setCurrentStep={setCurrentStep}
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
      <Route path="/details">
        <GrandStepper step={currentStep} />
        <Details
          setCurrentStep={setCurrentStep}
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
