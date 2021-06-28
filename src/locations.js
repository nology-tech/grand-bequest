export let manualLocation = [];
export const setManualLocation = (newLocation) => {
  console.log("neeeeeeew", newLocation);

  manualLocation = newLocation;
  console.log("manual", manualLocation);
};

export let currentLocation = [];
export const setCurrentLocation = (newLocation) => {
  console.log("neeeeeeew", newLocation);

  currentLocation = newLocation;
  console.log(currentLocation);
};