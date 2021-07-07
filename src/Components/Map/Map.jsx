import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "./Map.scss";
import L, { map } from "leaflet";
import originalMarker from "../../assets/images/marker.png";
import orangeMarker from "../../assets/images/location-marker.png";
import greenMarker from "../../assets/images/building-marker.png";
import InfoModal from "../InfoModal/InfoModal";
import { EsriProvider, GeoSearchControl } from "leaflet-geosearch";
import { firestore } from "../../firebase";
import { useHistory } from "react-router-dom";
import locatebtn from '../../assets/images/Locatebutton.png'

// HACK: To stop duplicates
let hasAddedSearchControl = false;

const Map = (props) => {
  let defaultMarker = new L.Icon({
    iconUrl: originalMarker,
    iconRetinaUrl: originalMarker,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [40, 40],
  });
  let locationMarker = new L.Icon({
    iconUrl: orangeMarker,
    iconRetinaUrl: orangeMarker,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [40, 40],
  });
  let buildingMarker = new L.Icon({
    iconUrl: greenMarker,
    iconRetinaUrl: greenMarker,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [40, 40],
  });

  const [renderDBMarkers, setRenderDBMarkers] = useState([]);
  const [show, setShow] = useState(false);
  let history = useHistory();

  const showDatabaseMarkers = () => {
    // may need a useEffect to render correctly from DB query
    const dbGeolocations = [];
    // replace allMarkers with database input

    const handleOpen = () => {
      setShow(true);
    };

    const handleClose = () => {
      setShow(false);
    };

    firestore
      .collection("locations")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dbGeolocations.push(doc.data());
        });
        setRenderDBMarkers(
          dbGeolocations.map((location) => {
            if (location.geolocation.length) {
              console.log("db location: ", location.geolocation);
              return (
                <Marker position={location.geolocation} icon={defaultMarker}>
                  <Popup>
                    <img src={location.image ? location.image : null}></img>

                    {location.live ? (
                      <button
                        onClick={handleOpen}
                        className="moreInfo btn-primary"
                      >
                        More Info!
                      </button>
                    ) : (
                      <button className="pendingInfo btn-secondary">
                        Pending Info...
                      </button>
                    )}
                  </Popup>
                  <InfoModal handleClose={handleClose} show={show} />
                </Marker>
              );
            }
          })
        );
      });
  };

  useEffect(() => {
    showDatabaseMarkers();
  }, []);

  const LocationMarker = () => {
    const [position, setPosition] = useState(null);
    const [toggle, setToggle] = useState(false);

    const map = useMapEvents({
      locationfound: (e) => {
        props.setCurrentLocation([e.latlng.lat, e.latlng.lng]);
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom(), {
          animate: true,
          duration: 1, // seconds
        });
      },
    });

    useEffect(() => {
      if (!props.currentLocation.length) {
        map.locate({ enableHighAccuracy: true });
      }
    }, []);

    useEffect(() => {
      if (toggle) {
        map.flyTo(
          props.currentLocation.length ? props.currentLocation : position,
          map.getZoom(),
          {
            animate: true,
            duration: 1, // seconds
          }
        );
        setToggle(false);
      }
    }, [toggle]);

    useEffect(() => {
      if (!hasAddedSearchControl) {
        hasAddedSearchControl = true;
        const provider = new EsriProvider();
        map.addControl(
          new GeoSearchControl({
            provider: provider,
            classNames: {
              container: "search-input",
              msgbox: "search-results",
              resetButton: "search-reset",
            },
          })
        );
      }
    }, []);

    if (props.currentLocation.length) {
      return (
        <>
          <Marker position={props.currentLocation} icon={locationMarker}>
            <Popup>You are here, at {props.currentLocation.toString()}</Popup>
          </Marker>
          <img className="locate-button" src={locatebtn} onClick={() => setToggle(!toggle)}>
          </img>
        </>
      );
    } else {
      return position === null ? null : (
        <>
          <Marker position={position} icon={locationMarker}>
            <Popup>You are here, at {position.toString()}</Popup>
          </Marker>
          <img className="locate-button" src={locatebtn} onClick={() => setToggle(!toggle)}>
          </img>
        </>
      );
    }
  };

  const ClickMarker = () => {
    const [position, setPosition] = useState(null);

    useMapEvents({
      dblclick(e) {
        props.setManualLocation([e.latlng.lat, e.latlng.lng]);
        if (history.location.pathname == "/submit") {
          history.push("/submit");
          // props.setForceLocation([e.latlng.lat, e.latlng.lng])
        }
        setPosition(e.latlng);
      },
    });

    const [show, setShow] = useState(false);

    const handleOpen = () => {
      setShow(true);
    };

    const handleClose = () => {
      setShow(false);
    };

    if (props.manualLocation.length) {
      return (
        <Marker position={props.manualLocation} icon={buildingMarker}>
          <Popup>
            <img
              src={
                props.imgFile
                  ? URL.createObjectURL(props.imgFile)
                  : "https://www.wilsons.school/history/files/image_256-687129.jpg"
              }
            ></img>

            {props.imgData.live ? (
              <button onClick={handleOpen} className="moreInfo btn-primary">
                More Info!
              </button>
            ) : (
              <button className="pendingInfo btn-secondary">
                Pending Info...
              </button>
            )}
          </Popup>
          <InfoModal handleClose={handleClose} show={show} />
        </Marker>
      );
    } else {
      return position === null ? null : (
        <Marker position={position} icon={buildingMarker}>
          <Popup>
            <img
              src={
                props.imgFile
                  ? URL.createObjectURL(props.imgFile)
                  : "https://www.wilsons.school/history/files/image_256-687129.jpg"
              }
            ></img>

            {props.imgData.live ? (
              <button onClick={handleOpen} className="moreInfo btn-primary">
                More Info!
              </button>
            ) : (
              <button className="pendingInfo btn-secondary">
                Pending Info...
              </button>
            )}
          </Popup>
          <InfoModal handleClose={handleClose} show={show} />
        </Marker>
      );
    }
  };

  return (
    <div>
      <MapContainer
        center={
          !props.currentLocation.length
            ? [51.505537, -0.128746]
            : props.currentLocation
        }
        zoom={15}
        maxZoom={18}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {renderDBMarkers}

        <LocationMarker />

        <ClickMarker />
      </MapContainer>
    </div>
  );
};

export default Map;
